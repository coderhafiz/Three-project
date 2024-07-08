import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Box from "./components/Box";
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import ThreeD from "./components/ThreeD";



function App() {

  console.log(Canvas)

  return (

    <div className="w-screen h-screen ">

      <Header/>

      <div className="w-full relative">
       
          <div className="w-full h-[100vw] sm:w-96 sm:h-96 absolute top-10 sm:left-10">
            <Canvas className=" bg-lime-400 rounded-full" camera={{ position: [10, 10, 10], zoom: 3 }} >
              <Suspense fallback={null} >
                  <OrbitControls
                  enablePan={false}/>
                  {/* <Box/> */}
                  <ambientLight intensity={100} castShadow={false} />
                  <pointLight position={[1, 10, 1]} intensity={100}/>
                  <ThreeD position={[1,1,1]}/>
                  {/* <Environment preset="city"/> */}
                </Suspense>
            </Canvas>
          </div>
      
      </div>

      <Body/>
      
      <Footer/>

    </div>
  )
}

export default App

