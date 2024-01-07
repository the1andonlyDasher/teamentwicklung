import { motion } from "framer-motion";
import { FunctionComponent } from "react";

interface HeroGridProps {

}

const HeroGrid: FunctionComponent<HeroGridProps> = () => {
    return (<>
        <motion.div className="hero__grid">
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
            <motion.div></motion.div>
        </motion.div>
    </>);
}

export default HeroGrid;