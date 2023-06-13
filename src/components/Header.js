import React from "react";
import { Bitter } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const bitter = Bitter({ subsets: ["latin"] });

const Header = () => {
  return (
    <header
      className={bitter.className + " md:w-1/3 w-4/5 top-96 right-4 absolute"}
    >
      <motion.h1
        className="text-6xl font-semibold"
        initial={{ opacity: 0.5, x: 150 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.4 },
        }}
        viewport={{ once: true }}
      >
        <span className="text-primary">We Fight</span> For Your Right
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
        Another cool free template by the fine folks at{" "}
        <Link
          href="https://devpoint.vercel.app"
          className="text-primary underline"
          target="_blank"
        >
          Devpoint.
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
        Free Consultation
      </motion.button>
    </header>
  );
};

export default Header;
