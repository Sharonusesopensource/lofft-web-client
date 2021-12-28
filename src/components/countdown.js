import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const countDownDate = new Date("Mar 1, 2022 23:59:59").getTime();
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
  const { t } = useTranslation();
  const [dateTarget, setDateTarget] = useState(timer());

  useEffect(() => {
    setInterval(() => {
      setDateTarget((prevDateTarget) => timer());
    }, 1000);
  }, []);

  return (
    <h3 id="countdown">
      {`${dateTarget[0]}${t("countdown.days")} : ${dateTarget[1]}${t(
        "countdown.hours"
      )} : ${dateTarget[2]}${t("countdown.minutes")}`}
      <span>
        {t("countdown.until")}{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </span>
    </h3>
  );
};

export default CountDownToLaunch;
