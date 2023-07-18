import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cars.scss';

const Cars = () => {
  const [car, setCar] = useState([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

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

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFilterChange = (category) => {
    setFilter(category.toLowerCase());
  };

  const filteredCars = car.filter((car) => {
    const nameMatches = car.name.toLowerCase().includes(query.toLowerCase());
    const hasCategory =
      filter === '' || (car.categories && car.categories.includes(filter));
    return nameMatches && hasCategory;
  });

  return (
    <div>
      <h1 className="white">CARS</h1>
      <input
        type="text"
        placeholder="Search For Car..."
        className="search"
        value={query}
        onChange={handleInputChange}
      />
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('turbo')}>Turbo</button>
        <button onClick={() => handleFilterChange('awd')}>AWD</button>
        <button onClick={() => handleFilterChange('rwd')}>RWD</button>
        <button onClick={() => handleFilterChange('naturally')}>Naturally</button>
      </div>
      <div className="car">
        {filteredCars.map((car) => (
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
          <Link to="./add">Add new car</Link>
        </button>
      </div>
      <hr />
      <hr />
    </div>
  );
};

export default Cars;
