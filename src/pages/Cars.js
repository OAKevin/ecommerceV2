import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cars.scss';

const Cars = () => {
  const [car, setCar] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchAllCar = async () => {
      try {
        const res = await axios.get('http://localhost:5000/cars');
        setCar(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCar();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="white">INVENTORY</h1>
      <input
        type="text"
        placeholder='Search For Car...'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className='white'>
          {car
            .filter((car) => car.name.toLowerCase().includes(query.toLowerCase()))
            .map((car) => (
              <li key={car._id}>{car.name}</li>
            ))}
        </ul>
        <div className="car">
  {car.map((car) => (
    <div className="car" key={car.id}>
      <img className="carimg" src={car.image} alt="car" />
      <h2>{car.name}</h2>
      <p>{car.description}</p>
      <span>{car.price}</span>
      <button className="delete" onClick={() => handleDelete(car.id)}>
        Delete
      </button>
      <button className="update">
        <Link to={`/update/${car.id}`}>Update</Link>
      </button>
    </div>
  ))}
  <button id="newCar">
    <Link to="/add">Add new car</Link>
  </button>
</div>
      <hr />  <hr />

    </div>
  );
};

export default Cars;