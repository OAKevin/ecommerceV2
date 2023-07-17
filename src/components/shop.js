import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Shop = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching car data:', error);
    }
  };

  const handleAddToCart = (carId) => {
    // Implement your "Add to Cart" functionality here
    console.log(`Added car with ID ${carId} to cart`);
  };

  return (
    <div className="shop">
      {cars.map((car) => (
        <div key={car._id} className="shop-item">
          <img src={car.image} alt={car.name} />
          <h3>{car.name}</h3>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
          <p>Price: ${car.price}</p>
          <p>Description: {car.description.join(', ')}</p>
          <button onClick={() => handleAddToCart(car._id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Shop;