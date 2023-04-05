import launchImage from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceImage from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportImage from "../assets/technology/image-spaceport-portrait.jpg";
import data from "../../data.json";
import { useState } from "react";

function Technology() {
  const [name, setName] = useState("LAUNCH VEHICLE");
  const [image, setImage] = useState(launchImage);
  const [text, setText] = useState(
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  );

  function GetFirstData(e) {
    document.querySelectorAll(".techno-btn").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    setName(data.technology[0].name);
    setImage(launchImage);
    setText(data.technology[0].description);
  }

  function GetSecondData(e) {
    document.querySelectorAll(".techno-btn").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    setName(data.technology[1].name);
    setImage(spaceportImage);
    setText(data.technology[1].description);
  }

  function GetThirdData(e) {
    document.querySelectorAll(".techno-btn").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    setName(data.technology[2].name);
    setImage(spaceImage);
    setText(data.technology[2].description);
  }

  return (
    <>
      <section className="header fourth">
        <h3 className="about-text">
          <span>03</span> SPACE LAUNCH 101
        </h3>
        <div className="left-side">
          <div className="buttons">
            <button className="techno-btn active" onClick={GetFirstData}>
              1
            </button>
            <button className="techno-btn" onClick={GetSecondData}>
              2
            </button>
            <button className="techno-btn" onClick={GetThirdData}>
              3
            </button>
          </div>
          <div className="content">
            <h4 className="small-text">THE TERMINOLOGY ...</h4>
            <h1 className="title">{name}</h1>
            <p className="text">{text}</p>
          </div>
        </div>

        <img src={image} alt="technology-image" className="technology-image" />
      </section>
    </>
  );
}

export default Technology;
