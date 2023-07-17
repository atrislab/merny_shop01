import React, { useState } from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";

const SpecificTitle = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await axios.get(
      `http://localhost:3000/api/products/title/${searchTerm}`
    );
    setProducts(data);
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar por título"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      {loading ? (
        <Rings color="#00BFFF" height={80} width={80} />
      ) : (
        products.map((product) => (
          <div key={product._id}>
            <h2>{product.title}</h2>
            <p>{product.stars}</p>
            <p>{product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SpecificTitle;

