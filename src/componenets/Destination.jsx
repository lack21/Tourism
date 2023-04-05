import europaImage from "../assets/destination/image-europa.png";
import marsImage from "../assets/destination/image-mars.png";
import moonImage from "../assets/destination/image-moon.png";
import titanImage from "../assets/destination/image-titan.png";
import data from "../../data.json";
import { useState } from "react";

function Destination() {
  const [name, setName] = useState("Moon");
  const [image, setImage] = useState(moonImage);
  const [text, setText] = useState(
    "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
  );
  const [averageDistance, setAverageDistance] = useState("384,400 KM");
  const [estimatedTravelTime, setEstimatedTravelTime] = useState("3 DAYS");

  function GetFirstData(e) {
    document.querySelectorAll(".destination-btn").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    setName(data.destinations[0].name);
    setImage(moonImage);
    setText(data.destinations[0].description);
    setAverageDistance(data.destinations[0].distance);
    setEstimatedTravelTime(data.destinations[0].travel);
  }

  function GetSecondData(e) {
    document.querySelectorAll(".destination-btn").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    setName(data.destinations[1].name);
    setImage(marsImage);
    setText(data.destinations[1].description);
    setAverageDistance(data.destinations[1].distance);
    setEstimatedTravelTime(data.destinations[1].travel);
  }

  function GetThirdData(e) {
    document.querySelectorAll(".destination-btn").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    setName(data.destinations[2].name);
    setImage(europaImage);
    setText(data.destinations[2].description);
    setAverageDistance(data.destinations[2].distance);
    setEstimatedTravelTime(data.destinations[2].travel);
  }

  function GetFourthData(e) {
    document.querySelectorAll(".destination-btn").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    setName(data.destinations[3].name);
    setImage(titanImage);
    setText(data.destinations[3].description);
    setAverageDistance(data.destinations[3].distance);
    setEstimatedTravelTime(data.destinations[3].travel);
  }

  return (
    <>
      <section className="header second">
        <div className="left-side">
          <h3 className="about-text">
            <span>01</span> PICK YOUR DESTINATON
          </h3>
          <img
            src={image}
            alt="destination-image"
            className="destination-image"
          />
        </div>
        <div className="right-side">
          <div className="buttons">
            <button className="destination-btn active" onClick={GetFirstData}>
              MOON
            </button>
            <button className="destination-btn" onClick={GetSecondData}>
              MARS
            </button>
            <button className="destination-btn" onClick={GetThirdData}>
              EUROPA
            </button>
            <button className="destination-btn" onClick={GetFourthData}>
              TITAN
            </button>
          </div>
          <h1 className="title">{name}</h1>
          <p className="text">{text}</p>

          <div className="bottom-content">
            <div className="item">
              <h4 className="name">AVG. DISTANCE</h4>
              <h3 className="details">{averageDistance}</h3>
            </div>
            <div className="item">
              <h4 className="name">EST. TRAVEL TIME</h4>
              <h3 className="details">{estimatedTravelTime}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Destination;
