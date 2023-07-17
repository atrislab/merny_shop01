import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";

const Price = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:3000/api/products/price/asc");
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <Rings color="#00BFFF" height={80} width={80} />
      ) : (
        products.map((product, i) => (
          <div key={i}>
            <h2>{product.price}</h2>
            <p>{product.title}</p>
            <p>{product.stars}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Price;