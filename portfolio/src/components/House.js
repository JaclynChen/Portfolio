import { Canvas } from "@react-three/fiber";
import {OrbitControls, useGLTF} from '@react-three/drei';
import {Suspense, useRef, useState} from 'react'



const House = () => {
  return (

    <div className="h-4/5 w-3/5 block">

    <Canvas>  


     <Suspense fallback={null}>

        <ambientLight intensity={0.8}/>
        <Model />
        <OrbitControls enablePan={true}
                                         enableZoom={false}
                                         enableRotate={true}/>

     </Suspense>

      
    </Canvas>

    </div> 
  );
};




export function Model(props) {
    const { nodes, materials } = useGLTF('/scene.gltf')
    return (
      <group {...props} dispose={null} scale={0.20} >
        <group position={[-0.88, 0.26, 1.8]} rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[0.32, -8.21, 8.04]} rotation={[-0.99, 1.09, 2.02]} />
          <group position={[-16.56, -4.53, 5.02]} rotation={[1.38, -1.37, -0.15]} scale={1.07} />
          <group position={[3.79, 1.87, 0.31]} rotation={[0, -0.03, -2.09]} scale={10}>
            <mesh geometry={nodes['Material_002-material'].geometry} material={materials['Material.002']} />
          </group>
          <group position={[3.51, 2.01, 1.7]} rotation={[0, -0.03, -2.09]} scale={12.57}>
            <mesh geometry={nodes['Material_001-material'].geometry} material={materials['Material.001']} />
          </group>
          <group position={[-0.28, -4.23, 2.52]} rotation={[-0.1, -0.31, -2.91]} scale={0.43}>
            <mesh geometry={nodes['Material-material'].geometry} material={materials.Material} />
            <mesh geometry={nodes['Material_004-material'].geometry} material={materials['Material.004']} />
            <mesh geometry={nodes['Material_005-material'].geometry} material={materials['Material.005']} />
            <mesh geometry={nodes['Material_006-material'].geometry} material={materials['Material.006']} />
          </group>
          <group position={[6.16, -4, 3.42]} rotation={[-0.22, -0.11, 2.92]} scale={0.17}>
            <mesh geometry={nodes['Material_007-material'].geometry} material={materials['Material.007']} />
            <mesh geometry={nodes['Material_008-material'].geometry} material={materials['Material.008']} />
          </group>
          <group position={[5.39, -5.35, 3.39]} rotation={[-0.05, -0.19, 0.8]} scale={0.17}>
            <mesh geometry={nodes['Material_007-material_1'].geometry} material={materials['Material.007']} />
            <mesh geometry={nodes['Material_008-material_1'].geometry} material={materials['Material.008']} />
          </group>
          <group position={[-4.05, 0.78, 2.23]} rotation={[-0.02, -0.12, 3.08]} scale={0.42}>
            <mesh geometry={nodes['Material-material_1'].geometry} material={materials.Material} />
            <mesh geometry={nodes['Material_004-material_1'].geometry} material={materials['Material.004']} />
            <mesh geometry={nodes['Material_005-material_1'].geometry} material={materials['Material.005']} />
            <mesh geometry={nodes['Material_006-material_1'].geometry} material={materials['Material.006']} />
          </group>
          <group position={[8.8, -0.26, 4.75]} rotation={[0.08, -0.18, -2.97]} scale={0.17}>
            <mesh geometry={nodes['Material_007-material_2'].geometry} material={materials['Material.007']} />
            <mesh geometry={nodes['Material_008-material_2'].geometry} material={materials['Material.008']} />
          </group>
          <group position={[8.7, -0.83, 4.35]} rotation={[0, -0.2, 3.07]} scale={0.13}>
            <mesh geometry={nodes['Material_007-material_3'].geometry} material={materials['Material.007']} />
            <mesh geometry={nodes['Material_008-material_3'].geometry} material={materials['Material.008']} />
          </group>
          <group position={[5.39, 8.65, 3.91]} rotation={[-0.01, -0.02, 2.2]} scale={0.17}>
            <mesh geometry={nodes['Material_007-material_4'].geometry} material={materials['Material.007']} />
            <mesh geometry={nodes['Material_008-material_4'].geometry} material={materials['Material.008']} />
          </group>
          <group position={[5.89, 7.68, 4.01]} rotation={[-0.06, -0.2, 2.98]} scale={0.13}>
            <mesh geometry={nodes['Material_007-material_5'].geometry} material={materials['Material.007']} />
            <mesh geometry={nodes['Material_008-material_5'].geometry} material={materials['Material.008']} />
          </group>
          <group position={[5.33, 8, 3.76]} rotation={[0.12, 0.01, -2.7]} scale={0.13}>
            <mesh geometry={nodes['Material_007-material_6'].geometry} material={materials['Material.007']} />
            <mesh geometry={nodes['Material_008-material_6'].geometry} material={materials['Material.008']} />
          </group>
          <group position={[3, 0.26, 2.78]} rotation={[0.27, 0.03, -0.73]} scale={0.32}>
            <mesh geometry={nodes['Material-material_2'].geometry} material={materials.Material} />
            <mesh geometry={nodes['Material_004-material_2'].geometry} material={materials['Material.004']} />
            <mesh geometry={nodes['Material_005-material_2'].geometry} material={materials['Material.005']} />
            <mesh geometry={nodes['Material_006-material_2'].geometry} material={materials['Material.006']} />
          </group>
          <group position={[-0.25, 1.87, 3]} rotation={[0.09, -0.19, 1.42]} scale={0.16}>
            <mesh geometry={nodes['Material_007-material_7'].geometry} material={materials['Material.007']} />
            <mesh geometry={nodes['Material_008-material_7'].geometry} material={materials['Material.008']} />
          </group>
          <group position={[-1.58, 7.24, 2.46]} rotation={[-0.04, -0.12, 1.04]} scale={0.19}>
            <mesh geometry={nodes['Material_007-material_8'].geometry} material={materials['Material.007']} />
            <mesh geometry={nodes['Material_008-material_8'].geometry} material={materials['Material.008']} />
          </group>
          <group position={[-2.26, 6.91, 2.44]} rotation={[0.32, 0.05, 1.79]} scale={0.14}>
            <mesh geometry={nodes['Material_007-material_9'].geometry} material={materials['Material.007']} />
            <mesh geometry={nodes['Material_008-material_9'].geometry} material={materials['Material.008']} />
          </group>
          <group position={[5.16, -4.21, 3.16]} rotation={[0.04, -0.33, 1.36]} scale={0.14}>
            <mesh geometry={nodes['Material_007-material_10'].geometry} material={materials['Material.007']} />
            <mesh geometry={nodes['Material_008-material_10'].geometry} material={materials['Material.008']} />
          </group>
          <group position={[1.4, 5.78, 8.15]} scale={0.67}>
            <mesh geometry={nodes['Material_003-material'].geometry} material={materials['Material.003']} />
          </group>
        </group>
      </group>
    )
  }




export default House;
