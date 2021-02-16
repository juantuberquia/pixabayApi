import React from "react";

const Image = ({ tags, url, preview, likes }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4  ">
      <div className="card">
        <p> {tags} </p>
        <img src={preview} alt="img" className="card-img-top"></img>
        <div className="card-body">
          <p className="card-text"> {likes} Me gustas</p>
        </div>
        <div className="card-footer">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
          >
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Image;
