"use client";

import { RocketLaunchIcon, HandIcon } from "@phosphor-icons/react";
import { DotIcon, SparkleIcon } from "lucide-react";

export function HomePageClient() {
  return (
    <div className="flex justify-start mt-56 ml-72">
      <div className="relative z-10 text-left">
        <div className="font-satoshi font-semibold flex gap-2 my-4">
          <HandIcon size={20} color="#B5FF6D" className="my-auto" />
          Hi my name is <span className="font-bold">Uday,</span>
        </div>
        <div className="font-satoshi sm:text-5xl">
          Building{" "}
          <span className="text-[#B5FF6D] relative text-6xl">
            <SparkleIcon className="absolute right-0 top-0 left-48" />
            elegant
          </span>{" "}
          & <span className="text-[#B5FF6D] text-6xl">
            performant
          </span> <br /> web solutions from concept to{" "}
          <span className="relative inline-block text-6xl">
            launch.
            <RocketLaunchIcon
              size={32}
              className="absolute right-0 top-0 left-40 -translate-x-1 -translate-y-1/3 text-[#B5FF6D]"
            />
          </span>
        </div>
        <div className="mt-16 flex justify-between">
          <div className="flex items-center gap-4 w-max">
            <div className="bg-gray-500 h-0.5 w-[37rem]"></div>
            <div className="flex items-center gap-2">
              <span className="font-clash font-bold">Code</span> <DotIcon color="#B5FF6D" size={30}/> <span className="font-clash font-bold">Design</span> <DotIcon color="#B5FF6D" size={30}/><span className="font-clash font-bold">Impact</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
