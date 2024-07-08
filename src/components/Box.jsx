import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';



function Box() {
    const mesh = useRef();
  
    // Rotate the mesh every frame
    useFrame(() => {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    });
    return (
      <mesh ref={mesh}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>
    );
  }
  export default Box