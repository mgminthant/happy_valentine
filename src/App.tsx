import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import KeyPad from "./components/KeyPad";
import RelationshipTimer from "./components/RelationshipTimer";
import Gallery from "./components/Gallery";
import Message from "./components/Message";
import Preloader from "./components/Preloader";

function App() {
  const [preload, setPreload] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setPreload(false);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, []);
  const startDate = new Date("2022-09-01");

  if (preload) {
    return <Preloader />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KeyPad />} />
        <Route
          path="/time"
          element={<RelationshipTimer startDate={startDate} />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
