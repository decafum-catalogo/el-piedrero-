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
const { buildCarpioMap, CARPIO_W, CARPIO_H, AREAS }=await import('../src/world/carpio/CarpioLayout.js');

test('el mapa de La Carpio tiene el tamaño previsto, perímetro cerrado y las escenas ancla',()=>{
  const map=buildCarpioMap();
  assert.equal(map.length,CARPIO_H); assert.equal(map[0].length,CARPIO_W);
  assert.ok(map[0].every(t=>t==='wall'));
  assert.equal(map[AREAS.court.z0+1][AREAS.court.x0+1],'floor');
  assert.equal(map[AREAS.lot.z0+3][AREAS.lot.x0+3],'grass');
  assert.equal(map[AREAS.mana.z0+1][AREAS.mana.x0+1],'mana');
});

test('el distrito de La Carpio se construye completo, con zonas reservadas caminables y calles conectadas',()=>{
  const scene=new THREE.Scene();
  const collisions=new CollisionSystem();
  const city=new Carpio();
  city.build(scene,collisions);
  for(const [name,spot] of Object.entries(city.reserved)) {
    assert.ok(city.isWalkableAt(spot.x,spot.z),`${name} debe ser caminable`);
  }
  assert.ok(city.getParkingSpots().length>20);
  assert.ok(city.getTrafficRoutes().length>=3);
  assert.ok(city.npcs.length>10);
  assert.equal(city.getGroundHeight(city.reserved.spawn.x,city.reserved.spawn.z)>=0,true);
  city.dispose(scene);
});
