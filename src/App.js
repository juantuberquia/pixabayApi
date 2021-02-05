import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ShowData from "./components/ShowData";

function App() {
  const [search, setSearch] = useState("");
  const [getdata, setGetdata] = useState(false);
  // save info of getdata
  const [dataPhotos, setDataPhotos] = useState([]);

  // consulta la api
  useEffect(() => {
    if (getdata === true) {
      const dataApi = async () => {
        const imgsForPage = 30;
        const key = "14166181-a93322c4f13390a817f56b032";
        const response = await fetch(
          `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgsForPage}`
        );
        let res = await response.json();

        setDataPhotos(res.hits);
      };

      dataApi();
    }

    setGetdata(false);
  }, [getdata, search, setDataPhotos]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center"> Buscador de imagenes </p>
        <Form setSearch={setSearch} setGetdata={setGetdata} />
        <ShowData dataPhotos={dataPhotos} />
      </div>
    </div>
  );
}

export default App;
