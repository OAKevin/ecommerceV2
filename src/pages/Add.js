import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [car, setCar] = useState({
    name: "",
    model: "",
    year:null,
    price: null
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCar((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/cars", car);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Add New Car</h1>
      <input
        type="text"
        placeholder="Car Brand"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Model"
        name="model"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Year"
        name="year"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleChange}
      />
     
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/cars">See all cars</Link>
    </div>
  );
};

export default Add;