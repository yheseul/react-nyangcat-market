import { useState } from "react";
import useInterval from "./useInterval";
import { MdOutlineWatchLater } from "react-icons/md";


export default function DayCountDownTimer() {
  const getSecondsUntilMidnight = () => {
    const now = new Date();
    const midnight = new Date().setHours(24, 0, 0, 0);
    return (midnight - now) / 1000;
  }

  const [time, setTime] = useState(getSecondsUntilMidnight());

  useInterval(() => {
    setTime(getSecondsUntilMidnight());
  }, 1000)

  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(Math.floor(time % 60)).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  return(
    <div className="timer_warp">
      <MdOutlineWatchLater 
        className="timer_img"
      />
      <div className="timer">
        {formatTime(time)}
      </div>
    </div>
  )
}