import React from 'react';
import PropTypes from "prop-types";

const SalonItemPriceAndDuration = ({currency, price, duration}) => {
  return (
    <div className="salonItem__rightElem">
      <p className="salonItem__rightElem__price">{price}{currency}</p>
      <p className="salonItem__rightElem__duration">{duration}</p>
    </div>
  );
};

SalonItemPriceAndDuration.propTypes = {
  currency: PropTypes.string,
  price: PropTypes.number,
  duration: PropTypes.string,
};

export default SalonItemPriceAndDuration;