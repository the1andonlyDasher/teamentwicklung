import {
  ContactShadows,
  Environment,
  GradientTexture,
  Grid,
  RoundedBox,
  SoftShadows
} from "@react-three/drei";
import { Canvas, ReactThreeFiber, extend } from "@react-three/fiber";
import { forwardRef, useEffect, useState } from "react";
import { Vector3 as V3 } from "@react-three/fiber";
import { CubicBezierCurve3 } from "three";
import ServicesGL from "@/gl/curveGL"
import { useAtom } from "jotai";
import { sections } from "@/ts/atoms";
import { useRouter } from "next/router";


declare global {
  namespace JSX {
    interface IntrinsicElements {
      cubicBezierCurve3: ReactThreeFiber.Object3DNode<
        CubicBezierCurve3,
        typeof CubicBezierCurve3
      >;
    }
  }
}

extend(CubicBezierCurve3);

interface glProps {
  eventSource?: any;
}

const GL = (props: glProps) => {
  const router = useRouter()
  const v: V3 = [0, 1, -2];

  return (
    <div className="canvas__wrapper">
      <Canvas
        // camera={{ position: [0, 2, 10], lookAt: () => v }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        eventSource={props.eventSource}
      >
        <fog attach="fog" args={["#fcf3ea", 0, 15]}></fog>
        <GradientTexture
          attach="background"
          colors={["#fcf3ea", "#fff"]}
          stops={[0, 1]}
          rotation={-Math.PI / 3}
        />
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={0.5}
          color={"#fff"}
        />
        <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={10} blur={2} far={0.8} />
        <Environment preset="apartment" blur={2} />
        {/* <RoundedBox
          radius={0.3}
          args={[4, 4, 4]}
          castShadow
          receiveShadow
          position={[5, 4, -4]}
          rotation={[Math.PI / 6, Math.PI / 5, Math.PI / 3]}
        >
          <meshStandardMaterial color={"#fcf3ea"} />
        </RoundedBox> */}
        <ServicesGL eventSource={props.eventSource} />
      </Canvas>
    </div>
  );
};

const WebGL = forwardRef<any, glProps>((props, ref) => (
  <GL eventSource={props.eventSource}></GL>
));
WebGL.displayName = "WebGL";

export default WebGL;
