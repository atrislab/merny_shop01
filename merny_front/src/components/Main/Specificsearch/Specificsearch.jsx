import React from "react";

const Specificsearch = ({ searchResults }) => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <div key={result.id}>
            <h3>{result.title}</h3>
            <p>{result.price}</p>
            <p>{result.star}</p>
            <p>{result.id}</p>
          </div>
        ))
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
};

export default Specificsearch;
