import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const { asPath } = useRouter();

  return (
    <Link
      href={href}
      className={`${className} relative group transition-all text-[16px] duration-400 ease-in-out ${
        asPath === href ? "text-dark" : "text-gray-500 hover:text-dark"
      }`}
    >
      {title}
      <span
        className={`h-[1.5px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 dark:bg-light ${
          asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-2 md:px-6 pt-4 mb-12 h-8 text-lg font-medium flex justify-between dark:text-light relative">
      <div className="w-3/5 flex h-[100px] -top-8">
        <Link href="/">
          <motion.img
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.297473a4.png&w=256&q=75"
            height={100}
            width={100}
            alt="logo"
            className="h-[50px] md:h-[100px] w-[50px] md:w-[100px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            }}
            viewport={{ once: true }}
            href="/"
          />
          <motion.p
            className="min-w-fit items-start bg-light/15 text-golden  hidden lg:flex select-none rounded-full"
            initial={{ opacity: 0, x: -19, y: -100 }}
            whileInView={{
              opacity: 1,
              x: -19,
              y: -70,
              transition: { duration: 0.6 },
            }}
            viewport={{ once: true }}
          >
            Dr. Juan Castillo
          </motion.p>
        </Link>
      </div>
      <motion.nav
        className="w-2/5 justify-end items-end hidden md:flex h-8"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.4 },
        }}
      >
        <CustomLink href="/" title="Inicio" className="mr-2" />
        <CustomLink href="/services" title="Servicios" className="mx-2" />
        <CustomLink
          href="/about"
          title="Sobre mi"
          className="mx-2 min-w-[66px]"
        />
        <CustomLink href="/contacto" title="Contacto" className="ml-2" />
      </motion.nav>
      <button
        className="flex-col justify-center items-end h-6 flex md:hidden w-full group"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-[3px] w-6 rounded-md  ${
            isOpen ? "rotate-[135deg] translate-y-[3px]" : "-translate-y-0.5"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-[3px] w-6 rounded-md ${
            isOpen
              ? "opacity-0"
              : "opacity-100 group-hover:my-[4px] group-hover:duration-[100ms]"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-[3px] w-6 rounded-md ${
            isOpen ? "-rotate-[135deg] -translate-y-[2px]" : "translate-y-0.5"
          } `}
        ></span>
      </button>
    </header>
  );
};

export default Navbar;
