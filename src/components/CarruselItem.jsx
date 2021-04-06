import React from "react";
import PropTypes from "prop-types";
import play from "../assets/images/play-icon.png";
import plus from "../assets/images/plus-icon.png";
import "../assets/styles/components/CarruselItem.scss";

const CarruselItem = ({ year, title, contentRating, cover }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src={play}
          alt="Play Icon"
        />
        <img
          className="carousel-item__details--img"
          src={plus}
          alt="Plus Icon"
        />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">{`${year} ${contentRating} `}</p>
    </div>
  </div>
);

CarruselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
};
export default CarruselItem;
