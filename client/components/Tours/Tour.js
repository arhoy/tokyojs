import React from 'react';

const Tour = ({ name, imageCover }) => {
  return (
    <div className="Tour">
      <img src={`/static/img/tours/${imageCover}`} alt={`${name}`} />
      <h2>{name}</h2>
      <p>{imageCover}</p>
    </div>
  );
};

export default Tour;
