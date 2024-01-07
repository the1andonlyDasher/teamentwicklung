import { FunctionComponent, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useAtom } from "jotai";
import { load } from "@/ts/atoms";
import Image from "next/image";

interface LoaderProps {

}

const loaderVariants = {
    initial: { opacity: 1, display: "flex" },
    exit: { opacity: 0, display: "none", transition: { display: { delay: 1 } } },
}

const Loader: FunctionComponent<LoaderProps> = () => {
    const [loaded, setLoaded] = useAtom(load)
    const controls = useAnimation()
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 1000)

    }, [setLoaded]);
    useEffect(() => {
        controls.start(loaded ? "exit" : "initial")

    }, [loaded]);
    return (<>
        <motion.div initial="initial" animate={controls} variants={loaderVariants} className="fixed w-full h-full top-0 flex-col left-0 flex justify-center items-center bg-[#fff1e4] z-50">
            <div className="spinner">
                <motion.div />
                <motion.div />
                <motion.div />
                <Image className="absolute z-20 top-[50px] left-[50px]" src={"/TELogo.svg"} height={100} width={100} alt={"Logo"} />
            </div>
        </motion.div>
    </>);
}

export default Loader;