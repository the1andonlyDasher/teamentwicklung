import {
    CubicBezierLine,
    Float,
    Html,
    Instance,
    Instances,
    MotionPathControls,
    PerspectiveCamera,
    Svg,
    useMotion,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAnimation, useScroll, useSpring } from "framer-motion";
import { motion as motion3d } from "framer-motion-3d"
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { CubicBezierCurve3, Vector3 } from "three";
import { Model } from "@/ts/paper_plane"
import { useAtom } from "jotai";
import { loc, sections } from "@/ts/atoms";
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
    const numObjects = 20;
    const [arr] = useState(Array.from({ length: numObjects }));
    const poi: any = useRef();
    const line: any = useRef();
    const curve = new CubicBezierCurve3(
        controlPoints1[0],
        controlPoints1[1],
        controlPoints1[2],
        controlPoints1[3]
    );
    const positions = curve.getPoints(numObjects);

    useEffect(() => {
        // console.log(arr);
        line.current.segments = 111;
    }, []);

    const { scrollYProgress } = useScroll({
        container: props.eventSource,
        layoutEffect: true,
    });
    const Y: any = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });


    const [app, setApp] = useAtom(loc)
    const [s, setSections]: any = useAtom(sections)
    const [anchors, setAnchors] = useState(s.map((item: any) => item.primary.anchor))
    useEffect(() => {
        console.log(anchors)
    }, [])


    const Movement: FunctionComponent<MovementProps> = (props: MovementProps) => {
        const motion = useMotion();
        return useFrame((state) => {
            motion.current = Y.current;
            poi.current.lookAt(
                motion.next.x - motion.tangent.x,
                motion.next.y - motion.tangent.y,
                motion.next.z - motion.tangent.z
            );
        });
    };


    const [looks, setLooks]: any = useState([]);
    useEffect(() => {
        for (let i = 0; i < positions.length; i++) {
            const point = positions[i];
            const norm = i / (positions.length - 1);
            const tan = curve.getTangent(norm);
            const l = tan.add(point);
            // console.log(l);
            looks.push(l);
        }
    }, []);
    const number: any = 100;

    const paperPlaneVariants = {
        home: { x: 5 },
        content1: { x: -2 },
        content2: { x: -1 },
        kontakt: { x: -5 },
    }

    const planeControls = useAnimation()
    useEffect(() => {
        planeControls.start(`${app}`)
        console.log(app)
    }, [app])

    return (
        <>
            <MotionPathControls object={poi} focusDamping={0.6} damping={0.2}>
                <Movement eventSource={props.eventSource} />
                <mesh ref={poi}>
                    <motion3d.mesh initial="home" variants={paperPlaneVariants} animate={planeControls}>
                        <Float floatIntensity={0.1}>
                            <Model position={[2, 0, -5]} rotation={[Math.PI / 50, Math.PI / 2, Math.PI / 5]} />
                        </Float>
                    </motion3d.mesh>
                    <PerspectiveCamera makeDefault fov={65} />
                </mesh>

                <CubicBezierLine
                    gapSize={1}
                    ref={line}
                    lineWidth={3}
                    dashed
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
            </MotionPathControls>
        </>
    );
};

export default ServicesGL;
