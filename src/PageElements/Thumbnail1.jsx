import React, { useEffect, useState, useRef } from 'react';
import './Thumbnail1.css';

function Thumbnail1() {
  const [products, setProducts] = useState([]);
  const hasFetchedData = useRef(false);  // Ref to track if data has been fetched

  useEffect(() => {
    if (hasFetchedData.current) return; // Prevent fetching if already done

    const fetchProducts = async () => {
      try {
        const response = await fetch('/product_data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        hasFetchedData.current = true; // Mark as fetched
      } catch (error) {
        console.error('Error fetching the product data:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="card-container">
      {products.map(product => (
        <div className="card" key={product.id}>
          <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
            <div className="thumbnail">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="product-image"
              />
            </div>
          </a>
          <div className="card-content">
            <h3 className="card-title">{product.name}</h3>
            <div className="card-date">Price: ${product.price}</div>
            <p className="card-text">{product.description}</p>
            <a href={product.productUrl} target="_blank" rel="noopener noreferrer" className="card-link">
              Buy this item
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Thumbnail1;
