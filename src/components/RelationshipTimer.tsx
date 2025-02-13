import { useState, useEffect } from "react";
import "../assets/styles/RelationshipTimer.css";
import { useNavigate } from "react-router-dom";

import avator from '../assets/image/avator.avif'
interface TimerProps {
  startDate: Date;
}

export default function RelationshipTimer({ startDate }: TimerProps) {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 365)) /
          (1000 * 60 * 60 * 24 * 30.44)
      );
      const days = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  const handleGalleryClick = () => {
    navigate("/gallery");
  };

  return (
    <div className="timer-container">
      <div className="timer-card">
        <div className="question-container">
          <div className="profile-image">
            <img
              src={avator}
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="question-bubble">How long have been together? 🤍</div>
        </div>

        <div className="years-text">
          {timeElapsed.years} YEARS {timeElapsed.months} MONTHS
        </div>

        <div className="timer-grid">
          <div className="time-unit">
            <div className="time-number">{timeElapsed.days}</div>
            <div className="time-label">Days</div>
          </div>
          <div className="time-unit">
            <div className="time-number">{timeElapsed.hours}</div>
            <div className="time-label">Hrs</div>
          </div>
          <div className="time-unit">
            <div className="time-number">{timeElapsed.minutes}</div>
            <div className="time-label">Mins</div>
          </div>
          <div className="time-unit">
            <div className="time-number">{timeElapsed.seconds}</div>
            <div className="time-label">Secs</div>
          </div>
        </div>

        <div className="names-button" onClick={handleGalleryClick}>
          Thae & Lay
        </div>

        <div className="hearts-paws">💝 💓 💝 💓 💝</div>
      </div>
    </div>
  );
}
