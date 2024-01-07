
import { Environment, GradientTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Rapp_final";
import { forwardRef } from "react";


interface glProps {
  eventSource?: any;
}

const GL = (props: glProps) => {
  return (
    <div className="canvas__wrapper">
      <Canvas camera={{ position: [0, 2, 10] }} dpr={[1, 1.5]} gl={{ antialias: true }} eventSource={props.eventSource}>
        {/* <color attach="background" args={["#EEE8D2"]} /> */}
        <GradientTexture attach="background" colors={["#FFE7D2", "#fff"]} stops={[0, 1]} rotation={-Math.PI / 3} />
        <spotLight intensity={10} color={"red"} />
        <ambientLight intensity={0.5} />
        <Environment preset="lobby" blur={2} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshLambertMaterial color={"#fcf3ea"} />
        </mesh>
      </Canvas>
    </div>
  );
}

const WebGL = forwardRef<any, glProps>((props, ref) => (
  <GL eventSource={props.eventSource}></GL>
));
WebGL.displayName = "WebGL";

export default WebGL;