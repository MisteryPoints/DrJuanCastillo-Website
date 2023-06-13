import React from "react";
import { Bitter } from "next/font/google";
import { motion } from "framer-motion";
import { BsBriefcase } from "react-icons//bs";
import { IoIosPeople } from "react-icons/io";
import { GiHumanTarget } from "react-icons/gi";
import { SlBubbles } from "react-icons/sl";

const bitter = Bitter({ subsets: ["latin"] });

const CustomLink = ({ href, name, description, icon, num }) => (
  <motion.a
    href={href}
    className="flex transition-all duration-500 hover:!opacity-100  group-hover:opacity-70"
    initial={{ x: 70 }}
    whileInView={{
      x: 0,
      transition: { duration: num * 0.15 + 0.3 },
    }}
    viewport={{ once: true }}
  >
    <div
      className={`p-5 m-auto max-h-[70px] rounded-full flex justify-center items-center bg-[#5F5F65]`}
    >
      {icon}
    </div>
    <div className="ml-5 text-sm">
      <h1 className="mt-2 text-white">{name}</h1>
      <p className="mt-2 text-white text-xs">{description}</p>
    </div>
  </motion.a>
);

const PracticeAreas = () => {
  return (
    <div
      className={
        bitter.className +
        " grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3 w-4/5 sm:w-[90%] lg:w-[75%]"
      }
    >
      <div className="text-white max-w-[510px] lg:max-w-full m-auto">
        <motion.h1
          className="text-3xl lg:text-6xl font-semibold"
          initial={{ opacity: 0.5, x: -150 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
          }}
          viewport={{ once: true }}
        >
          Our <span className="text-primary">Practice Areas</span>
        </motion.h1>
        <motion.div
          className="sm:pl-6 py-6"
          initial={{ opacity: 0.5, x: -150 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
        >
          <p className="text-tx">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in.
            <br />
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <button className="px-8 py-3 mt-6 rounded-3xl text-md bg-primary text-light font-bold">
            Learn More
          </button>
        </motion.div>
      </div>
      <div className="max-w-[510px] lg:max-w-full m-auto grid grid-cols-1">
        <div className="justify-start items-center lg:items-start group">
          <div className="grid gap-y-4">
            <CustomLink
              href="/services"
              color="bg-[#2952E3]"
              name="Banking and Finance Law"
              icon={<BsBriefcase fontSize={30} className="text-white" />}
              description="Far far away, behind the word mountains, far from the countries"
              num={1}
            />
            <CustomLink
              href="/services"
              color="bg-[#2952E3]"
              name="Commercial Law"
              icon={<IoIosPeople fontSize={30} className="text-white" />}
              description="Far far away, behind the word mountains, far from the countries"
              num={2}
            />
            <CustomLink
              href="/services"
              color="bg-[#2952E3]"
              name="Corporate Law"
              icon={<SlBubbles fontSize={30} className="text-white" />}
              description="Far far away, behind the word mountains, far from the countries"
              num={3}
            />
            <CustomLink
              href="/services"
              color="bg-[#2952E3]"
              name="Criminal Law"
              icon={<GiHumanTarget fontSize={30} className="text-white" />}
              description="Far far away, behind the word mountains, far from the countries"
              num={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
