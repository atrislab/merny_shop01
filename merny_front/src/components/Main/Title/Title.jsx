import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";

const Title = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:3000/api/products/title/asc");
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
          <article className="cardSmall" key={i}>
            <p>{product.title}</p>
            <p>price:{product.price}</p>
            <p>stars:{product.stars}</p>
          </article>
        ))
      )}
    </div>
  );
};

export default Title;