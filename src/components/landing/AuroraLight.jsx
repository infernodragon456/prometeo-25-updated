/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/environment./models/environment/auroraLight.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function AuroraLight(props) {
  const { nodes, materials } = useGLTF('./models/environment/auroraLight.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['northern-lights-png-transparent-image-download-98450-2048x924'].geometry} material={materials['northern-lights-png-transparent-image-download-98450-2048x924']} rotation={[Math.PI, 0, 0]} scale={88.607} />
    </group>
  )
}

useGLTF.preload('./models/environment/auroraLight.glb')