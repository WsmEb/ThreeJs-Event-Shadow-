import { useEffect, useRef } from "react";
import { useFrame } from "react-three-fiber";
import Point from "./PointsChild";

const Sphere = () => {

  const sphere = useRef()

  useEffect(() => {
    if(sphere.current) {
      sphere.current.position.y = 0.5
      sphere.current.position.z = 0
      sphere.current.position.x = 0.5
    }
    
  },[])

  const refDirection = useRef(1)



  useFrame(() => {
    if(sphere.current) {
      if(sphere.current.position.y <= 1 && refDirection.current == 1 ) {
        sphere.current.position.y += 0.007
      }
      else{
        refDirection.current = -1
      }

      if (sphere.current.position.y >= 0.5 && refDirection.current === -1) {
        sphere.current.position.y -= 0.007;
      } else {
        refDirection.current = 1; 
      }
    }
  })

  


  
  return ( 

<mesh ref={sphere} castShadow >
  <sphereGeometry args={[0.4]}  />
  <meshStandardMaterial  metalness={1} roughness={0.4} />
  
</mesh>

);
}
 
export default Sphere;