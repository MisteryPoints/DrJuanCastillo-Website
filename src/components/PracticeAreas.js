import React from "react";
import { Bitter, Rubik } from "next/font/google";
import { motion } from "framer-motion";
import { BsBriefcase } from "react-icons/bs";
import { BiSolidBusiness } from "react-icons/bi";
import { IoIosPeople, IoMdArrowRoundForward } from "react-icons/io";
import { GiCherish } from "react-icons/gi";
import { SlBubbles } from "react-icons/sl";
import { MdOutlineRealEstateAgent, MdFamilyRestroom } from "react-icons/md";

const bitter = Bitter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

const CustomLink = ({ href, name, description, icon, num }) => (
  <motion.a
    href={href}
    className={
      rubik.className +
      " flex transition-all duration-500 hover:!opacity-100  group-hover:opacity-70 max-w-[445px]"
    }
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
      <h1 className="mt-2 text-primary">{name}</h1>
      <p className="mt-2 text-tx text-sm">{description}</p>
    </div>
  </motion.a>
);

const PracticeAreas = () => {
  return (
    <div
      className={
        bitter.className +
        " grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-3 sm:w-[90%] lg:w-[85%] w-fit select-none"
      }
    >
      <div className="text-white lg:max-w-full m-auto max-w-[70%] mx-10">
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
          Nuestras <span className="text-primary">Áreas</span>
        </motion.h1>
        <motion.div
          className="sm:pl-6 py-6 grid grid-cols-2 gap-x-5"
          initial={{ opacity: 0.5, x: -150 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
        >
          <p className="text-tx max-w-md">
            Confía en nuestra experiencia notarial para guiar tus transacciones
            legales con precisión y profesionalismo.
            <br />
            <br />
            Con décadas de experiencia en una amplia gama de áreas notariales,
            estamos listos para ser tu socio de confianza en cada paso del
            camino.
          </p>
          <p className="text-tx max-w-md">
            En áreas clave como bienes raíces, planificación patrimonial,
            negocios y más. Tu tranquilidad es nuestra prioridad.
            <br />
            <br />
            Desde transacciones inmobiliarias hasta planificación patrimonial,
            estamos aquí para hacer que cada proceso sea seguro, simple y
            exitoso.
          </p>
          <button className="px-8 py-3 mt-6 w-fit rounded-3xl text-md bg-primary hover:bg-primary/80 text-light font-bold">
            Ver más
          </button>
        </motion.div>
      </div>
      <div className="max-w-[700px] lg:max-w-full m-auto grid gap-x-8 grid-cols-2 mx-5">
        <div className="justify-start items-center lg:items-start group">
          <div className="grid gap-y-4">
            <CustomLink
              href="/services"
              color="bg-[#2952E3]"
              name="Derecho inmobiliario"
              icon={
                <MdOutlineRealEstateAgent
                  fontSize={30}
                  className="text-white"
                />
              }
              description="Ayudamos a individuos y familias a la redacción y revisión de contratos de documentos relacionados con transacciones inmobiliarias."
              num={1}
            />
            <CustomLink
              href="/services"
              color="bg-[#2952E3]"
              name="Derecho empresarial"
              icon={<BiSolidBusiness fontSize={30} className="text-white" />}
              description="Proporcionamos servicios legales a empresas en una variedad de áreas relacionadas con la estructura y operación de empresas."
              num={2}
            />
            <CustomLink
              href="/services"
              color="bg-[#2952E3]"
              name="Derecho familiar"
              icon={<MdFamilyRestroom fontSize={30} className="text-white" />}
              description="Ayudamos en asuntos legales relacionados con el derecho de familia, como adopciones, divorcios, acuerdos prenupciales, etc."
              num={3}
            />
            <CustomLink
              href="/services"
              color="bg-[#2952E3]"
              name="Planificación patrimonial"
              icon={<GiCherish fontSize={30} className="text-white" />}
              description="Ayudamos a individuos y familias a planificar la distribución de sus bienes después de su fallecimiento."
              num={4}
            />
          </div>
        </div>
        <div className="justify-start items-center lg:items-start group">
          <div className="grid gap-y-4">
            <CustomLink
              href="/services"
              color="bg-[#2952E3]"
              name="Derecho inmobiliario"
              icon={<BsBriefcase fontSize={30} className="text-white" />}
              description="Ayudamos a individuos y familias a la redacción y revisión de contratos de compraventa, escrituras de propiedad y otros documentos relacionados con transacciones inmobiliarias."
              num={1}
            />
            <CustomLink
              href="/services"
              color="bg-[#2952E3]"
              name="Derecho empresarial"
              icon={<IoIosPeople fontSize={30} className="text-white" />}
              description="Proporcionamos servicios legales a empresas en una variedad de áreas, como la formación de sociedades, la redacción de contratos comerciales, la modificación de estatutos sociales y otros asuntos relacionados con la estructura y operación de empresas."
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
              icon={<GiCherish fontSize={30} className="text-white" />}
              description="Far far away, behind the word mountains, far from the countries"
              num={4}
            />
          </div>
        </div>
        <div
          className={
            rubik.className +
            " text-primary flex group mt-4 cursor-pointer text-sm justify-start w-fit"
          }
        >
          <p className="duration-500 group-hover:text-white">
            More Practice Areas
          </p>
          <p className="text-white text-base ml-3 p-1 group-hover:bg-primary duration-500 ">
            <IoMdArrowRoundForward />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
