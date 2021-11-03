import React, { useState, useEffect } from "react";

const countDownDate = new Date("Jan 1, 2022 23:59:59").getTime();
let Calculator = (m = 1, s = 1, h = 1) => {
  return 1000 * m * s * h;
};

let timer = () => {
  // Get today date and time
  let now = new Date().getTime();
  // Difference between now and countDownDate
  let difference = countDownDate - now;

  // Countdown Interval
  let days = Math.floor(difference / Calculator(60, 60, 24));
  let hours = Math.floor(
    (difference % Calculator(60, 60, 24)) / Calculator(60, 60)
  );
  let minutes = Math.floor((difference % Calculator(60, 60)) / Calculator(60));

  let seconds = Math.floor((difference % Calculator(60)) / 1000);

  return [days, hours, minutes, seconds, difference];
};

let CountDownToLaunch = () => {
  const [dateTarget, setDateTarget] = useState(timer());

  useEffect(() => {
    setInterval(() => {
      setDateTarget((prevDateTarget) => timer());
    }, 1000);
  }, []);

  return (
    <h3 style={{width: "20rem"}}>
      {`${dateTarget[0]}D - ${dateTarget[1]}H - ${dateTarget[2]}M - ${dateTarget[3]}S until 🚀`}
    </h3>
  );
};

export default CountDownToLaunch;
