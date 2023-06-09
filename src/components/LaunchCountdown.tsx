import React, { useEffect, useMemo, useState } from "react";
import Countdown from "@/components/ui/Countdown";

interface LaunchCountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LaunchCountdown = (props: LaunchCountdownProps) => {
  const [time, setTime] = useState(
    props.days * 24 * 3600 +
      props.hours * 3600 +
      props.minutes * 60 +
      props.seconds
  );

  const remainTime = useMemo(() => {
    const days = Math.floor(time / 24 / 3600);
    const hours = Math.floor((time - days * 24 * 3600) / 3600);
    const minutes = Math.floor((time - days * 24 * 3600 - hours * 3600) / 60);
    const seconds = (time - days * 24 * 3600 - hours * 3600) % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => (time !== 0 ? time - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Countdown prev={0} count={remainTime.days} label={"days"} />
      <Countdown prev={0} count={remainTime.hours} label={"hours"} />
      <Countdown prev={0} count={remainTime.minutes} label={"minutes"} />
      <Countdown prev={0} count={remainTime.seconds} label={"seconds"} />
    </>
  );
};

export default LaunchCountdown;
