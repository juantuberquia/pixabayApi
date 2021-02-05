import React, { useState } from "react";
import Error from "./Error";

const Form = ({ setSearch, setGetdata }) => {
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);

  // asignar variable
  const setData = (event) => {
    setWord(event.target.value);
  };

  // asignar valor ingresado al state principal
  const handleSubmit = (e) => {
    e.preventDefault();

    if (word.trim() === "" || !isNaN(word)) {
      setError(true);
      setGetdata(false);
    } else {
      setSearch(word);
      setError(false);
      setGetdata(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="Ingresar Busqueda" /> : null}
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="busca una imagen"
            onChange={setData}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            value="Buscar"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
