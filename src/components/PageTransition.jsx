"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
    const pathName = usePathname();
  return <AnimatePresence>
    <div key={pathName}>
<div></div>
{children}
    </div>
    </AnimatePresence>;
};

export default PageTransition;
