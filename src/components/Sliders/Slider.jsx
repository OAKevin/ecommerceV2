import React from "react";

const Slider = ({ cars }) => {
  return (
    <div className="slider">
      {cars.map((car) => (
        <div key={car.id} className="slide">
          <img src={car.image} alt={car.name} />
          <h3>{car.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Slider;