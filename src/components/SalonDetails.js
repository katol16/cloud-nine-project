import React from 'react';
import SalonNavigation from "./SalonNavigation";
import SalonInfo from "./SalonInfo";
import { useParams } from 'react-router-dom';
import data from "../salonsData/data.json";

const SalonDetails = () => {
  const { id } = useParams();
  const salonsData = JSON.parse(JSON.stringify(data));
  const {salonData, currency} = salonsData;
  const selectedSalon = salonData.find(({salonId}) => salonId === parseInt(id));
  const { rating, numberOfRating, salonName } = selectedSalon

  return (
    <div className="salonDetails">
      <SalonNavigation rating={rating} salonName={salonName} numberOfRating={numberOfRating}/>
      <SalonInfo selectedSalon={selectedSalon}/>
    </div>
  );
};

export default SalonDetails;