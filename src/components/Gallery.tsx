import { images } from "../assets/data/data";
import "../assets/styles/Gallery.css";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/message");
  };
  
  return (
    <div className="gallery-container">
      <p>You & Me 💘</p>
      <div className="gallery">
        {images.map((item) => (
          <img src={item.src} key={item.id} />
        ))}
      </div>
      <button className="names-button" onClick={handleClick}>
        Message For You
      </button>
    </div>
  );
}
