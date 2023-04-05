import douglasHurleyImage from "../assets/crew/image-douglas-hurley.png";
import markShuttleworthImage from "../assets/crew/image-mark-shuttleworth.png";
import victorGloverImage from "../assets/crew/image-victor-glover.png";
import anoushehAnsariImage from "../assets/crew/image-anousheh-ansari.png";
import data from "../../data.json";
import { useState } from "react";

function Crew() {
  const [name, setName] = useState("DOUGLAS HURLEY");
  const [grayText, setGrayText] = useState("COMMANDER");
  const [image, setImage] = useState(douglasHurleyImage);
  const [text, setText] = useState(
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  );

  function GetFirstData(e) {
    document.querySelectorAll(".crew-btn").forEach((item) => {
      item.classList.remove("active");
      e.target.classList.add("active");
      setName(data.crew[0].name);
      setGrayText(data.crew[0].role);
      setImage(douglasHurleyImage);
      setText(data.crew[0].bio);
    });
  }

  function GetSecondData(e) {
    document.querySelectorAll(".crew-btn").forEach((item) => {
      item.classList.remove("active");
      e.target.classList.add("active");
      setName(data.crew[1].name);
      setGrayText(data.crew[1].role);
      setImage(markShuttleworthImage);
      setText(data.crew[1].bio);
    });
  }

  function GetThirdData(e) {
    document.querySelectorAll(".crew-btn").forEach((item) => {
      item.classList.remove("active");
      e.target.classList.add("active");
      setName(data.crew[2].name);
      setGrayText(data.crew[2].role);
      setImage(victorGloverImage);
      setText(data.crew[2].bio);
    });
  }

  function GetFourthData(e) {
    document.querySelectorAll(".crew-btn").forEach((item) => {
      item.classList.remove("active");
      e.target.classList.add("active");
      setName(data.crew[3].name);
      setGrayText(data.crew[3].role);
      setImage(anoushehAnsariImage);
      setText(data.crew[3].bio);
    });
  }

  return (
    <>
      <section className="header third">
        <div className="left-content">
          <h3 className="about-text">
            <span>02</span> MEET YOUR CREW
          </h3>
          <h2 className="gray-text">{grayText}</h2>
          <h1 className="title">{name}</h1>
          <p className="text">{text}</p>
          <div className="buttons">
            <button className="crew-btn active" onClick={GetFirstData}></button>
            <button className="crew-btn" onClick={GetSecondData}></button>
            <button className="crew-btn" onClick={GetThirdData}></button>
            <button className="crew-btn" onClick={GetFourthData}></button>
          </div>
        </div>
        <img src={image} alt="crew-image" className="crew-image" />
      </section>
    </>
  );
}

export default Crew;
