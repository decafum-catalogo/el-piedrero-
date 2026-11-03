import assert from 'node:assert/strict';
import { mock, test } from 'node:test';
import * as THREE from 'three';
import * as textures from '../src/world/bogota/textures.js';
import { CollisionSystem } from '../src/systems/CollisionSystem.js';

const textureSet=()=>({map:new THREE.Texture(),bumpMap:new THREE.Texture(),emissiveMap:new THREE.Texture()});
const replacements={...textures};
for(const name of ['asphalt','sidewalk','brick','facade','roofTiles','slab','zinc','cardboard','trashBag','dirt','concrete']) replacements[name]=textureSet;
for(const name of ['radialSprite','lightbox','neon']) replacements[name]=()=>new THREE.Texture();
mock.module('../src/world/bogota/textures.js',{namedExports:replacements});
mock.module('../src/utils/signs.js',{namedExports:{signTexture:()=>new THREE.Texture()}});
mock.module('../src/character/RealisticCharacter.js',{namedExports:{
  REALISTIC_SCALE:1.08,createRealisticCharacter:async()=>({group:new THREE.Group(),update(){}}),
  loadCatalog:async()=>({}),normalizeReal:(_,look)=>look,optionsFor:()=>[{id:'test'}]
}});
const { Carpio }=await import('../src/world/districts/Carpio.js');
const { DangerSystem }=await import('../src/systems/DangerSystem.js');

test('perros y chapulines aparecen en lugares caminables de La Carpio',()=>{
  const scene=new THREE.Scene(); const city=new Carpio(); city.build(scene,new CollisionSystem());
  const ds=new DangerSystem(city,{isNight:()=>true,hurt(){},robFraction:()=>0,toast(){}});
  for(const [n,l] of [['perro',ds.dogs],['chapulín',ds.muggers]]) l.forEach((e,i)=>{
    const p=e.pos||e.position||e.group?.position;
    assert.ok(city.isWalkableAt(p.x,p.z),`${n} ${i} en (${p.x},${p.z}) no es caminable`);
  });
  city.dispose(scene);
});
