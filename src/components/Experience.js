import React, { useEffect, useRef } from "react";
import { Bitter, Rubik } from "next/font/google";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const bitter = Bitter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3500 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const Experience = () => {
  return (
    <div
      className={
        bitter.className +
        " grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3 w-4/5 sm:w-[90%] lg:w-[75%]"
      }
    >
      <div className="text-white max-w-[510px] lg:max-w-full m-auto">
        <h1 className="text-3xl lg:text-6xl font-semibold">
          <span className="text-primary">50 Years</span> of Experience in
          Various Cases
        </h1>
      </div>
      <div className={rubik.className + " grid grid-cols-2"}>
        <div className="grid-cols-2">
          <AnimatedNumbers value={90} />+<h2>Awards</h2>
        </div>
        <div>
          <AnimatedNumbers value={13} />
          K+
          <h2>Awards</h2>
        </div>
        <div>
          <AnimatedNumbers value={12} />
          KZ+
          <h2>Awards</h2>
        </div>
        <div>
          <AnimatedNumbers value={200} />+<h2>Awards</h2>
        </div>
      </div>
    </div>
  );
};

export default Experience;
