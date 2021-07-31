import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./Home.scss";
import homeimage1 from "./homeimage1.jpg";
import homeimage2 from "./homeimage2.jpg";
import homeimage3 from "./homeimage3.jpg";
import homeimage4 from "./homeimage4.jpg";
import homeimage5 from "./homeimage5.jpg";
import homeimage6 from "./homeimage6.jpg";
import commitment from "./commitment.png";

const Home = () => {
  const [value, setValue] = useState(0);

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div className="body">
      <div className="left-container">
        <h1 className="page-quote">
          “She was sitting in a garden more beautiful than even her <br></br>
          rampaging imagination could ever have conjured up, <br></br> and she
          was being serenaded by nature.” <br></br> <br></br> ― Lynn Kurland,
          Spellweaver{" "}
        </h1>

        <div className="home-carousel">
          <Carousel plugins={["arrows"]} value={value} onChange={onChange}>
            <img
              className="home-image"
              src={homeimage1}
              style={{ height: "400px", width: "350px" }}
            />
            <img
              className="home-image"
              src={homeimage2}
              style={{ height: "400px", width: "350px" }}
            />
            <img
              className="home-image"
              src={homeimage3}
              style={{ height: "400px", width: "350px" }}
            />
            <img
              className="home-image"
              src={homeimage4}
              style={{ height: "300px", width: "420px" }}
            />
            <img
              className="home-image"
              src={homeimage5}
              style={{ height: "400px", width: "350px" }}
            />
            <img
              className="home-image"
              src={homeimage6}
              style={{ height: "400px", width: "350px" }}
            />
          </Carousel>
          <Dots
            value={value}
            onChange={onChange}
            thumbnails={[
              <img key={1} className="img-small" src={homeimage1} />,
              <img key={2} className="img-small" src={homeimage2} />,
              <img key={3} className="img-small" src={homeimage3} />,
              <img key={4} className="img-small" src={homeimage4} />,
              <img key={5} className="img-small" src={homeimage5} />,
              <img key={6} className="img-small" src={homeimage6} />,
            ]}
          />
        </div>
      </div>

      <div className="right-container">
        <img
          className="commitment"
          src={commitment}
          style={{ height: "560px", width: "420px" }}
        />
      </div>
    </div>
  );
};

export default Home;
