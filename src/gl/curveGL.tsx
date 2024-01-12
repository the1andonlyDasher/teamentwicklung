import {
    CubicBezierLine,
    Float,
    Html,
    Instance,
    Instances,
    MotionPathControls,
    PerspectiveCamera,
    Svg,
    useAspect,
    useMotion,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useAnimation, useScroll, useSpring } from "framer-motion";
import { motion as motion3d } from "framer-motion-3d"
import { FunctionComponent, useEffect, useLayoutEffect, useRef, useState } from "react";
import { CubicBezierCurve3, LineDashedMaterial, MeshStandardMaterial, Vector3 } from "three";
import { Model } from "@/ts/paper_plane"
import { useAtom } from "jotai";
import { loc, sections } from "@/ts/atoms";
import { useRouter } from "next/router";
import { Flex, Box } from "@react-three/flex"
interface ServicesGLProps {
    eventSource: any;
}

const controlPoints1 = [
    new Vector3(0, 1, 1),
    new Vector3(5, 1, -10),
    new Vector3(-15, 1, -20),
    new Vector3(0, 1, -30),
].map((point) => point.multiplyScalar(2));

interface MovementProps {
    eventSource: any;
}
const ServicesGL: FunctionComponent<ServicesGLProps> = (
    props: ServicesGLProps
) => {
    const router = useRouter()
    const poi: any = useRef();
    const line: any = useRef();

    const [s, setSections]: any = useAtom(sections)
    const [late, setLate] = useState<any>(0);
    const [target, setTarget] = useState<any>(0);
    const [anchors, setAnchors] = useState(s.map((item: any) => item.slice_type ? item.primary.anchor : item.type === "page" ? item.uid : item.type))
    const [app, setApp] = useAtom(loc)
    const [targets,]: any = useState({})

    useEffect(() => {
        anchors.map((anchor: any, index: number) => {
            targets[`${anchor}`] = 1 / (anchors.length) * (index + 1) - 0.1
        })
        console.log(targets)
    }, [, router.pathname]);

    useEffect(() => {
        if (app === undefined || null) {
            setTarget(0);
        } else {
            setTarget(targets[`${app}`]);
        }
    }, [app]);

    useEffect(() => {
        animate(late, target, {
            type: "spring",
            stiffness: 100,
            restDelta: 0.001,
            damping: 50,
            onUpdate: (latest) => setLate(latest),
        });
    }, [target]);

    const { scrollYProgress } = useScroll({
        container: props.eventSource,
        layoutEffect: true,
    });
    const Y: any = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const { size } = useThree();
    const [w, h] = useAspect(size.width, size.height);
    const [disposed, setDisposed] = useState(false);



    const Movement: FunctionComponent<MovementProps> = (props: MovementProps) => {
        const motion = useMotion();
        return useFrame((state) => {
            motion.current = late
            poi.current.lookAt(
                motion.next.x - motion.tangent.x,
                motion.next.y - motion.tangent.y,
                motion.next.z - motion.tangent.z
            );
        });
    };

    const number: any = 100;

    return (
        <>

            <MotionPathControls object={poi} focusDamping={0.6} damping={0.2}>
                <Movement eventSource={props.eventSource} />
                <mesh ref={poi}>
                    <Flex
                        visible={!disposed}
                        flexDirection={"row"}
                        justifyContent="center"
                        alignItems="center"
                        position={[-w, h, -3]}
                        flexWrap="wrap"
                        size={[w * 2, h, 0]}
                    ></Flex>
                    <Float floatIntensity={0.01}>
                        <Model position={[2, 0, -5]} rotation={[Math.PI / 50, Math.PI / 2, Math.PI / 5]} />
                    </Float>

                    <PerspectiveCamera makeDefault fov={65} />
                </mesh>
                <CubicBezierLine
                    needsUpdate
                    gapSize={1}
                    ref={line}
                    lineWidth={3}
                    dashed
                    visible={app === "undefined" ? false : true}
                    segments={number}
                    isLineSegments2
                    isLine2
                    color={"beige"}
                    start={[
                        controlPoints1[0].x,
                        controlPoints1[0].y - 1,
                        controlPoints1[0].z,
                    ]}
                    midA={[
                        controlPoints1[1].x,
                        controlPoints1[1].y - 1,
                        controlPoints1[1].z,
                    ]}
                    midB={[
                        controlPoints1[2].x,
                        controlPoints1[2].y - 1,
                        controlPoints1[2].z,
                    ]}
                    end={[
                        controlPoints1[3].x,
                        controlPoints1[3].y - 1,
                        controlPoints1[3].z,
                    ]}
                />
                <cubicBezierCurve3
                    v0={controlPoints1[0]}
                    v1={controlPoints1[1]}
                    v2={controlPoints1[2]}
                    v3={controlPoints1[3]}
                />

            </MotionPathControls >

        </>
    );
};

export default ServicesGL;
