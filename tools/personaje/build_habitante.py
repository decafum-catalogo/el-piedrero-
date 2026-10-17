# Construye el personaje de prueba "habitante" con MPFB2 y lo exporta a GLB para three.js.
# Uso: blender -b --python build_habitante.py -- <salida.glb> [preview.png]
import sys
import bpy
from bl_ext.blender_org.mpfb.services.humanservice import HumanService
from bl_ext.blender_org.mpfb.services.targetservice import TargetService

argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
OUT = argv[0] if argv else "habitante.glb"
PREVIEW = argv[1] if len(argv) > 1 else None
MAX_TEX = 1024  # texturas livianas para la web

# Hombre de unos 55 años, delgado, mestizo; ropa gastada (chaqueta sobre camisa, jean, botas)
human_info = {
    "name": "habitante",
    "phenotype": {
        "gender": 1.0, "age": 0.72, "muscle": 0.45, "weight": 0.38,
        "proportions": 0.45, "height": 0.42, "cupsize": 0.5, "firmness": 0.5,
        "race": {"asian": 0.4, "caucasian": 0.4, "african": 0.2},
    },
    "rig": "mixamo",
    "eyes": "low-poly/low-poly.mhclo",
    "eyebrows": "eyebrow001/eyebrow001.mhclo",
    "eyelashes": "eyelashes01/eyelashes01.mhclo",
    "teeth": "", "tongue": "",
    "hair": "culturalibre_hair_02/culturalibre_hair_02.mhclo",
    "proxy": "",
    "targets": [],
    "clothes": [
        "male_casualsuit05/male_casualsuit05.mhclo",
        "wdg_scruffy_beard/wdg_scruffy_beard.mhclo",
        "toigo_ankle_boots_male/toigo_ankle_boots_male.mhclo",
    ],
    "skin_mhmat": "middleage_asian_male/middleage_asian_male.mhmat",
    "skin_material_type": "MAKESKIN",
    "eyes_material_type": "MAKESKIN",
    "clothes_material_type": "MAKESKIN",
    "skin_material_settings": {}, "eyes_material_settings": {}, "expressions": [],
}

# Escena limpia
bpy.ops.wm.read_factory_settings(use_empty=True)

settings = HumanService.get_default_deserialization_settings()
settings["subdiv_levels"] = 0
basemesh = HumanService.deserialize_from_dict(human_info, settings)
TargetService.bake_targets(basemesh)  # las formas quedan fijas; no exportamos shape keys


def pick_images(mat):
    """Devuelve (color, normal, alpha?) a partir de las texturas del material de MPFB."""
    color = normal = None
    if not mat or not mat.use_nodes:
        return None, None
    for n in mat.node_tree.nodes:
        if n.type != 'TEX_IMAGE' or not n.image:
            continue
        name = n.image.name.lower()
        if any(k in name for k in ("norm", "nrm", "bump")):
            normal = normal or n.image
        elif any(k in name for k in ("spec", "_ao", "rough", "litsphere", "sss")):
            continue
        else:
            color = color or n.image
    return color, normal


def shrink(img):
    if img and max(img.size) > MAX_TEX:
        f = MAX_TEX / max(img.size)
        img.scale(int(img.size[0] * f), int(img.size[1] * f))


# Tinte (multiplica la textura) por pieza: se exporta como baseColorFactor de glTF
TINTS = {
    "body": (0.78, 0.56, 0.42, 1),          # piel curtida por el sol
    "hair": (0.3, 0.28, 0.27, 1),          # pelo negro con canas
    "beard": (0.55, 0.53, 0.5, 1),          # barba canosa
    "eyebrow": (0.15, 0.13, 0.12, 1),
    "casualsuit05": (0.78, 0.82, 0.62, 1),  # chaqueta más verde oliva
}


ALPHA_PARTS = ("hair", "beard", "eyebrow", "eyelash")


def tint_for(name):
    for key, rgba in TINTS.items():
        if key in name:
            return rgba
    return None


def to_pbr(obj):
    """Reemplaza el material por uno Principled simple que el exportador glTF entiende."""
    for slot in obj.material_slots:
        old = slot.material
        color, normal = pick_images(old)
        mat = bpy.data.materials.new((old.name if old else obj.name) + "_pbr")
        mat.use_nodes = True
        nt = mat.node_tree
        bsdf = nt.nodes.get("Principled BSDF")
        bsdf.inputs["Roughness"].default_value = 0.85
        if color:
            shrink(color)
            tex = nt.nodes.new("ShaderNodeTexImage")
            tex.image = color
            tint = tint_for(obj.name)
            if tint:
                mix = nt.nodes.new("ShaderNodeMix")
                mix.data_type = 'RGBA'
                mix.blend_type = 'MULTIPLY'
                mix.inputs["Factor"].default_value = 1.0
                mix.inputs[7].default_value = tint  # B (color)
                nt.links.new(tex.outputs["Color"], mix.inputs[6])  # A (color)
                nt.links.new(mix.outputs[2], bsdf.inputs["Base Color"])
            else:
                nt.links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
            # Solo pelo, barba, cejas y pestañas son transparentes; el resto opaco
            # (si todo es BLEND, three.js ordena mal y el cuerpo atraviesa la ropa)
            if any(k in obj.name for k in ALPHA_PARTS):
                nt.links.new(tex.outputs["Alpha"], bsdf.inputs["Alpha"])
        elif old and old.use_nodes:
            # sin textura: conserva el color base del material original
            ob = old.node_tree.nodes.get("Principled BSDF")
            if ob:
                bsdf.inputs["Base Color"].default_value = ob.inputs["Base Color"].default_value
        if normal:
            shrink(normal)
            normal.colorspace_settings.name = "Non-Color"
            ntex = nt.nodes.new("ShaderNodeTexImage")
            ntex.image = normal
            nmap = nt.nodes.new("ShaderNodeNormalMap")
            nt.links.new(ntex.outputs["Color"], nmap.inputs["Color"])
            nt.links.new(nmap.outputs["Normal"], bsdf.inputs["Normal"])
        slot.material = mat


meshes = [o for o in bpy.data.objects if o.type == 'MESH']
for o in meshes:
    to_pbr(o)
    print("MESH", o.name, len(o.data.vertices), "verts",
          [s.material.name for s in o.material_slots])

if PREVIEW:
    scene = bpy.context.scene
    scene.render.engine = 'BLENDER_EEVEE'
    scene.render.resolution_x, scene.render.resolution_y = 640, 900
    cam = bpy.data.objects.new("cam", bpy.data.cameras.new("cam"))
    scene.collection.objects.link(cam)
    cam.location = (0.0, -3.4, 1.05)
    cam.rotation_euler = (1.5708, 0, 0)
    cam.data.lens = 50
    scene.camera = cam
    sun = bpy.data.objects.new("sun", bpy.data.lights.new("sun", 'SUN'))
    sun.data.energy = 3.5
    sun.rotation_euler = (0.9, 0.2, 0.6)
    scene.collection.objects.link(sun)
    world = bpy.data.worlds.new("w")
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs[0].default_value = (0.35, 0.37, 0.4, 1)
    scene.world = world
    scene.render.filepath = PREVIEW
    bpy.ops.render.render(write_still=True)

bpy.ops.export_scene.gltf(
    filepath=OUT,
    export_format='GLB',
    export_apply=True,          # aplica la máscara de helpers
    export_animations=False,
    export_morph=False,
    export_image_format='WEBP',
    export_yup=True,
)
print("EXPORTED", OUT)
