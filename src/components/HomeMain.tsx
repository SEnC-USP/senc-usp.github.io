import { FC } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import LaunchCountdown from "./LaunchCountdown";

interface HomeMainProps {}

const HomeMain: FC<HomeMainProps> = ({}) => {
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-400 via-slate-200 via-70% to-primary">
      <p className="text-5xl font-semibold font-mono text-center shadow-sm">
        VII SEMANA DA <br />
        ENGENHARIA DE COMPUTAÇÃO
      </p>
      {/*<LaunchCountdown days={8} hours={23} minutes={55} seconds={41} />*/}
    </div>
  );
};

export default HomeMain;
