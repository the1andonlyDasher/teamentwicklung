"use client"

import { cursor, cursorText } from "@/ts/atoms"
import { motion, useAnimation, useAnimationControls, useMotionValue, useSpring } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect, SVGProps, useState } from "react";

export function Cursor({ param }: any) {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    useEffect(() => {
        const moveCursor = (e: any) => {
            console.log("mobing")
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 6)
        };
        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor)
        }
    }, [])

    return (
        <motion.div
            className="cursor"
            style={{
                translateX: cursorX,
                translateY: cursorY,
            }}
        />
    );
}
