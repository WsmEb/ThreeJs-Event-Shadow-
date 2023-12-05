import { Canvas} from "react-three-fiber"
import Cube from "./Components/Geometrys"
import {  useRef, useState } from "react"
import { OrbitControls, Text } from "@react-three/drei";
import Sphere from "./Components/Sphere";
import Point from "./Components/PointsChild";
import Plane from "./Components/Plane";



import * as THREE from "three"
import Envirements from "./Components/Envirement";



function App() {

  const [width,setWidth] = useState( window.innerWidth)
  const [height,setHeight] = useState(window.innerHeight);
  const [aspect,setAspect] = useState(width/height)

  const lights = useRef()
  



  return (

    <>
     <Canvas camera={{position:[0,0,4],aspect,fov:76}} style={{width:"100vw",height:"100vh"}} shadows >
      <OrbitControls enableDamping={true} />
      <ambientLight args={["#ffffff",0.4]}  />
      <spotLight args={["#ffffff",7,10,0.700,0.1]} color={"#ffffff"} position={[-2,2,1]}  castShadow/>
      {/* <Text  font={fontf} anchorX="center"  anchorY="middle"   side={THREE.DoubleSide}  position={[1,0.5,1]}  rotation={[2.1,-1.5,2]} fontSize={0.6}  material={new THREE.MeshPhongMaterial() } castShadow >
        hello there
      </Text> */}

      <Cube  />
      <Sphere  />
      <Plane  />
       {/* <pointLight ref={lights} color={'red'} intensity={5} distance={100} position={[1,1,1]} />  */}
      {/* <Point  /> */}
      <Envirements/>
     </Canvas> 
 
    
    {/* <Canvas  shadows camera={[76,aspect,0.1,10]} style={{width:"100vw",height:"100vh",backgroundColor:"black"}} >
      <OrbitControls  makeDefault enableDamping  />
      <mesh position={[0,0.5,0]} castShadow>
        <boxGeometry  />
        <meshStandardMaterial />
      </mesh>
      <mesh rotation={[-190,0,0]} receiveShadow >
        <planeGeometry args={[10,10,10]} />
        <meshPhongMaterial color={"white"}  />
      </mesh>
      <ambientLight args={["red",0.25]} />
      <spotLight args={["white",1.5,7,0.800,0.4]} position={[-3,2,0]} castShadow />
    </Canvas>
    */}

    </>

  )

}

export default App
