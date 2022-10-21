import React from 'react';

const SalonInfoItem = ({data, children}) => {
  return (
    <div className="salonInfo__item">
      {children}
      <p className="salonInfo__item__txt">
        {data}
      </p>
    </div>
  );
};

export default SalonInfoItem;