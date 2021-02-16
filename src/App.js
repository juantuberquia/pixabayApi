import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ShowData from "./components/ShowData";

function App() {
  const [search, setSearch] = useState("");
  const [getdata, setGetdata] = useState(false);
  // save info of getdata
  const [dataPhotos, setDataPhotos] = useState([]);

  // state pages
  const [pageCurretly, setPageCurretly] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // consulting  api
  useEffect(() => {
    if (getdata === true) {
      const dataApi = async () => {
        const imgsForPage = 30;
        const key = "14166181-a93322c4f13390a817f56b032";
        const response = await fetch(
          `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgsForPage}&page=${pageCurretly}`
        );
        let res = await response.json();
        console.log(res);
        setDataPhotos(res.hits);
        setTotalPages(Math.ceil(res.totalHits / imgsForPage));
      };

      dataApi();
    }
  }, [getdata, search, setDataPhotos, pageCurretly]);

  const increasePage = () => {
    setPageCurretly(pageCurretly + 1);
    setGetdata(true);
  };

  const decreasePage = () => {
    setPageCurretly(pageCurretly - 1);
    setGetdata(true);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center"> Buscador de imagenes </p>
        <Form setSearch={setSearch} setGetdata={setGetdata} />
      </div>
      <div className="row justify-content-center">
        <ShowData dataPhotos={dataPhotos} />
        <div className="mb-4">
          {pageCurretly === 1 ? null : (
            <button onClick={decreasePage} class="bbtn btn-dark btn-lg mr-3">
              &laquo; Anterior
            </button>
          )}
          {pageCurretly >= totalPages ? null : (
            <button onClick={increasePage} class="bbtn btn-dark btn-lg ">
              Siguiente &raquo;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
