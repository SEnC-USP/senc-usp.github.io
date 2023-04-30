import React, { useMemo } from "react";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

interface CountdownProps {
  prev: number;
  count: number;
  label: string;
}

const Countdown = (props: CountdownProps) => {
  const padPrev = useMemo(() => {
    return String(props.prev).padStart(2, "0");
  }, [props.prev]);

  const padCount = useMemo(() => {
    return String(props.count).padStart(2, "0");
  }, [props.count]);

  return (
    <div>
      <div className="relative w-16 bg-accent rounded-md overflow-hidden ">
        <div className="relative font-bold text-lg ">
          <div className="w-full h-1/2 origin-bottom overflow-hidden bg-accent">
            {padPrev}
          </div>
          <div className="w-full h-1/2 origin-bottom overflow-hidden bg-accent">
            {padCount}
          </div>
          <div className="w-full h-1/2 origin-top overflow-hidden bg-accent">
            {padPrev}
          </div>
          <div className="w-full h-1/2 origin-top overflow-hidden bg-accent">
            {padCount}
          </div>
          <div className="absolute top-1/2 left-0 w-full h-[1px]"></div>
        </div>
      </div>
      <p className="font-bold text-sm text-center text-white mt-2">
        {props.label}
      </p>
    </div>
  );
};

export default Countdown;
