import React from "react";
import Image from "./Image";

const ShowData = ({ dataPhotos }) => {
  if (Object.keys(dataPhotos).length === 0) return null;

  return (
    <div className="col-12 p-5 row">
      {dataPhotos.map((photo) => (
        <Image
          key={photo.id}
          url={photo.largeImageURL}
          tags={photo.tags}
          preview={photo.previewURL}
          likes={photo.likes}
        />
      ))}
    </div>
  );
};

export default ShowData;
