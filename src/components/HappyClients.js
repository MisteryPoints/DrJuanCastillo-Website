import { Bitter } from "next/font/google";
import React from "react";

const bitter = Bitter({ subsets: ["latin"] });

const HappyClients = () => {
  return (
    <div className={bitter.className + "  sm:w-[90%] lg:w-[75%] mt-10"}>
      <div className="text-white w-full">
        <h1 className="text-3xl lg:text-6xl font-semibold max-w-md pl-10 pt-5">
          <span className="text-primary">Happy</span> Clients
        </h1>
      </div>
    </div>
  );
};

export default HappyClients;
