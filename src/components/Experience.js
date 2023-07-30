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

  return <span ref={ref} className="text-primary"></span>;
};

const Experience = () => {
  return (
    <div
      className={
        bitter.className +
        " grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3 w-3/5 sm:w-[90%] lg:w-[75%] mt-10"
      }
    >
      <div className="text-white w-full">
        <h1 className="text-3xl lg:text-6xl font-semibold max-w-md pl-10 pt-5">
          <span className="text-primary">50 Years</span> of Experience in
          Various Cases
        </h1>
      </div>
      <div
        className={
          rubik.className + " grid grid-cols-2 text-6xl gap-6 xl:text-[78px]"
        }
      >
        <div className="grid-cols-2 text-white">
          <AnimatedNumbers value={90} />+
          <h2 className="text-base font-semibold">Awards</h2>
          <h3 className="text-base text-gray-400 mr-24">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </h3>
        </div>
        <div className="grid-cols-2 text-white">
          <AnimatedNumbers value={13} />
          <span className="text-primary">K</span>+
          <h2 className="text-base font-semibold">Cases Wins</h2>
          <h3 className="text-base text-gray-400 mr-24">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </h3>
        </div>
        <div className="grid-cols-2 text-white">
          <AnimatedNumbers value={12} />
          <span className="text-primary">K</span>+
          <h2 className="text-base font-semibold">Clients</h2>
          <h3 className="text-base text-gray-400 mr-24">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </h3>
        </div>
        <div className="grid-cols-2 text-white">
          <AnimatedNumbers value={200} />+
          <h2 className="text-base font-semibold">Attorneys</h2>
          <h3 className="text-base text-gray-400 mr-24">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Experience;
