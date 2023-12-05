import * as THREE from "three"

import { Environment } from "@react-three/drei";

const Envirements = () => {
  return ( 
    <>
    <Environment background  >
      <mesh  >
        <sphereGeometry args={[50,100,100]}/>
        <meshBasicMaterial  color={"#3081D0"} side={THREE.BackSide} />
      </mesh>
    </Environment>
    </>
   );
}
 
export default Envirements;