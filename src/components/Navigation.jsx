import React, { useEffect } from "react";
import logo from "../assets/greenLogoo.png";
import "../style/navigation.css";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";

function Navigation() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  const { scrollY } = useScroll();
  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => console.log(latest));
    // console.log(scrolly);
    return () => unsub;
  }, [scrollY]);
  return (
    <>
      <header>
        <motion.div
          className="social"
          initial={{ y: -1000 }}
          animate={{ y: 1 }}
          transition={{
            type: "spring",
            stiffness: 75,
            damping: 20,
            delay: 0.5,
          }}
        ></motion.div>
        <motion.a
          href="/"
          className="logo"
          initial={{ scale: 0, y: -1000 }}
          animate={{ rotate: 360, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 75,
            damping: 20,
          }}
        >
          {/* <img className="logoImage" src={logo} alt="Logo" /> */}
        </motion.a>
        <motion.div
          className="links"
          initial={{ scale: 0, x: -1000 }}
          animate={{ scale: 1, x: 1 }}
          transition={{
            type: "spring",
            stiffness: 75,
            damping: 20,
            delay: 0.5,
          }}
          style={{
            scale,
          }}
        >
          <a href="#a-propos">À propos</a>
          <a href="#notre-equipe">Notre équipe</a>
          <a href="#nos-services">Nos services</a>
          {/* <a href="/">Blog</a> */}
          <a href="/">Nous joindre</a>
        </motion.div>
      </header>
    </>
  );
}

export default Navigation;
