import React from 'react';

const ListItem = (props) => {
  let {name, stars, facilities} = props.hotel;
  const renderFacilities = facilities.map((item, i) => (i > 0 ? ", " : "") + item);
  return (
    <div className="hotel">
      <div className="hotel-stars">
        {stars} <span className="star-icon"></span>
      </div>
      <div className="hotel-info">
        <h4>{name}</h4>
        <p>{renderFacilities}</p>
      </div>
    </div>
  );
}

export default ListItem;
