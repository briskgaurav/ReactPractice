import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import *  as THREE from 'three'
import { Group } from "three";

function MacComponent() {
  const data = useGLTF("/mac.glb");
  const texture = useTexture('/red.jpg')
  const meshes = {}
  data.scene.traverse(e=>{
   meshes[e.name]= e;
  })
  // meshes.screen.rotation.x = Math.PI
  meshes.matte.material.map= texture
  meshes.matte.material.emissiveIntensity= 0;
  meshes.matte.material.roughness= 1;
  meshes.matte.material.metalness= 0;
 console.log( meshes.matte.material)
  const scrollData = useScroll()
  useFrame((state, delta)=>{
    // console.log(scrollData.offset *90)
   meshes.screen.rotation.x = THREE.MathUtils.degToRad(180-scrollData.offset * 90)
  })
  return (
    <group position={[0,-16,80]}>
      <primitive object={data.scene}/>
    </group>
  );
}

export default MacComponent;
