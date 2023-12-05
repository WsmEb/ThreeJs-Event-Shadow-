import { useEffect, useRef } from "react";


const Plane = () => {

  const Plan = useRef()

  useEffect(() => {
    if(Plan.current) {
      Plan.current.rotation.x = - 190
    }
  },[])



  return ( 
    <>
      <mesh ref={Plan} receiveShadow >
         <planeGeometry args={[80,80]}/>
         <meshStandardMaterial  color={"#87C4FF"} />
    </mesh>
    </>
   );
}
 
export default Plane;