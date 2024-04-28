import React from "react";
import { Bitter } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const bitter = Bitter({ subsets: ["latin"] });

const Header = () => {
  return (
    <header
      className={bitter.className + " md:w-1/3 w-4/5 top-40 right-4 absolute"}
    >
      <motion.h1
        className="text-6xl font-semibold"
        initial={{ opacity: 0.5, x: 120 }}
        whileInView={{
          opacity: 1,
          x: 10,
          transition: { duration: 0.4 },
        }}
        viewport={{ once: true }}
      >
        <span className="text-primary font-bold">Nos Preocupamos</span> Por tus
        Derechos
      </motion.h1>
      <motion.p
        className="my-8 mx-5 text-gray-600 text-lg"
        initial={{ opacity: 0.5, x: 150 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.6 },
        }}
        viewport={{ once: true }}
      >
        <span className="font-bold">
          Trabajamos para apoyarte a defender tus derechos.{" "}
        </span>{" "}
        Diseñado por{" "}
        <Link
          href="https://devpoint.vercel.app"
          className="text-primary underline"
          target="_blank"
        >
          Víctor Tejada.
        </Link>
      </motion.p>
      <motion.button
        className="px-8 py-3 mx-5 rounded-3xl bg-primary text-light font-bold"
        initial={{ opacity: 0.5, x: 150 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8 },
        }}
        viewport={{ once: true }}
      >
        Consulta Gratis
      </motion.button>
    </header>
  );
};

export default Header;
