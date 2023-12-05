import { Points,Point as Pnt, PointMaterial } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three"


const Point = () => {

  const point = useRef()




  const Counter = [];
    for (let index = 0; index < 100; index++) {
     Counter.push(index)
    }


  useFrame(() => {
    point.current.rotation.z += 1 * 10
  })
  
  return (
  <>
  {Counter.map((count,index) => (
      <points ref={point} castShadow key={index} position={[(Math.random()-0.5),(Math.random()-0.5),(Math.random()-0.5) * 2.5]} >
      <boxGeometry />
      <pointsMaterial color={"white"} size={0.01}/>
    </points>
  ))}
  </> );
}
 
export default Point;