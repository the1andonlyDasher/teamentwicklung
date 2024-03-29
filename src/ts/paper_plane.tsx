/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/paper_plane.glb --types --output src/ts/paper_plane.tsx 
*/

import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useAspect, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { motion } from 'framer-motion-3d'
import { useAnimation } from 'framer-motion'
import { useAtom } from 'jotai'
import { loc, sections } from './atoms'
import { Vector3, useFrame, useThree } from '@react-three/fiber'
import { easing } from "maath";

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
  }
  materials: {}
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>


export function Model(props: JSX.IntrinsicElements['group']) {
  const { size } = useThree();
  const [w, h] = useAspect(size.width, size.height)
  const [app, setApp] = useAtom(loc)
  const [s, setSections]: any = useAtom(sections)
  const [anchors, setAnchors] = useState(s.map((item: any) => item.slice_type ? item.primary.anchor : item.type))
  const zPos = Math.max(1, Math.min(w / 2, 3))
  const yPos = -Math.max(1, Math.min(w / 2, 3))
  const posPre: Vector3 = [zPos - 3, 0, - 1]
  const posPost: Vector3 = [zPos - 3, yPos + 2, -2]



  const paperPlaneVariants = {
    home: { rotateY: 2.6, rotateX: 0.5 },
    content1: { rotateY: -1 },
    content2: { rotateY: 2 },
    kontakt: { rotateY: 1.5 },
  }

  const planeControls = useAnimation()
  const group: any = useRef()
  const mesh: any = useRef()

  useEffect(() => {
    planeControls.start(`${app}`)
  }, [app])

  const { nodes, materials } = useGLTF('/paper_plane.glb') as GLTFResult

  useFrame((state, delta) => {
    easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta);

  })

  return (
    <group ref={group} {...props} dispose={null}>
      <motion.mesh ref={mesh} position={[zPos - 3, 0, - 1]} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.25 }} geometry={nodes.Plane.geometry} initial="home" variants={paperPlaneVariants} animate={planeControls}>
        <meshStandardMaterial color={"#fcf3ea"} />
      </motion.mesh>
    </group>
  )
}

useGLTF.preload('/paper_plane.glb')
