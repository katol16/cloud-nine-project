import React from 'react';
import PropTypes from "prop-types";

const SalonRating = ({ numberOfRating, rating, salonId, isBig }) => {
  return (
    <div className="salonRating">
      {
        rating.map((item, index) => item ?
          <svg key={`${salonId}-${index}`} width={isBig ? '16' : '12'} height={isBig ? '16' : '12'}  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1L9.97496 5.2817L14.6574 5.83688L11.1955 9.0383L12.1145 13.6631L8 11.36L3.8855 13.6631L4.80445 9.0383L1.3426 5.83688L6.02504 5.2817L8 1Z" fill="#B69F58"/>
          </svg> :
          <svg key={`${salonId}-${index}`} width={isBig ? '16' : '12'}  height={isBig ? '16' : '12'}  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2.19376L9.52093 5.49113L9.63816 5.74527L9.91609 5.77822L13.5221 6.20577L10.8561 8.67121L10.6506 8.86123L10.7051 9.13574L11.4128 12.6973L8.24422 10.9237L8 10.787L7.75578 10.9237L4.58718 12.6973L5.29486 9.13574L5.34941 8.86123L5.14393 8.67121L2.47793 6.20577L6.08391 5.77822L6.36184 5.74527L6.47907 5.49113L8 2.19376Z" stroke="#B69F58"/>
          </svg>
        )
      }
      <span className={`salonRating__numberOfRating ${isBig && 'salonRating__numberOfRating--big'}`}>({numberOfRating})</span>
    </div>
  );
};

SalonRating.propTypes = {
  numberOfRating: PropTypes.string,
  rating: PropTypes.arrayOf(PropTypes.bool),
  salonId: PropTypes.number,
  isBig: PropTypes.bool,
};

export default SalonRating;