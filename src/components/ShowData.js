import React from "react";

const ShowData = ({ dataPhotos }) => {
  // console.log(dataPhotos[0].tags);

  console.log(dataPhotos);
  console.log(dataPhotos[0].id);

  return <div>{dataPhotos.id}</div>;
};

export default ShowData;
