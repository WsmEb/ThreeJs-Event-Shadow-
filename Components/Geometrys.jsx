
import React, { useEffect } from "react";
import { useFrame } from "react-three-fiber";




const Cube = () => {

    const groupRef = React.useRef();
    

    useEffect(() => {


      if(groupRef.current)  {
        groupRef.current.position.z = -1
        groupRef.current.position.y = 1
        groupRef.current.position.x = 0.3
      }
    },[])


    // Animation logic
    useFrame(() => {
      if (groupRef.current) {
        groupRef.current.rotation.z += 0.005;
      }
    });

  return (
    <>

    <mesh ref={groupRef} castShadow >
      <boxGeometry args={[0.5,0.5,0.5]} />
      <meshStandardMaterial  />
    </mesh>
    </>
  )
}
 
export default Cube; 