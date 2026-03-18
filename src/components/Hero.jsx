import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // make sure path is correct

function Hero() {
  return (
    <section
      className="gradient-bg"
      style={{
        padding: "120px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {/* Animated Logo */}
      <motion.img
        src={logo}
        alt="Raghunandan Logo"
        style={{ width: "180px", height: "180px", borderRadius: "50%" }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ fontSize: "40px", color: "white" }}
      >
        Raghunandan Tiwari Library & Club
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{ fontSize: "20px", color: "white" }}
      >
        Read • Learn • Create
      </motion.p>
    </section>
  );
}

export default Hero;