import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import cv from "../assets/image/cover.jpg";

export default function KeyPad() {
  const [password, setPassword] = useState("");
  const [isGliding, setIsGliding] = useState(false);
  const navigate = useNavigate();

  if (password === "12345") {
    navigate("/time");
  }

  const handleKeyPress = (value: string | number) => {
    setIsGliding(true);
    setTimeout(() => setIsGliding(false), 500);
    if (value === "x") {
      setPassword((prev) => prev.slice(0, -1));
    } else {
      setPassword((prev) => prev + value);
    }
  };

  return (
    <div className="container">
      <img
        src={cv}
        alt="cover"
        className={`cover-image ${isGliding ? "glide-effect" : ""}`}
      />
      <div className="password-ui">
        <div className="password-input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              color="#fff"
            >
              <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" />
              <path d="M12 13a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 0v3" />
            </g>
          </svg>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            readOnly
          />
        </div>
        <div className="keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "x", 0].map((key) => (
            <button
              key={key}
              className="key"
              onClick={() => handleKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
