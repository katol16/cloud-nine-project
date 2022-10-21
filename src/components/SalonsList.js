import React, { useState } from 'react';
import Navigation from "./Navigation";
import PriceSelection from "./PriceSelection";
import SalonItem from "./SalonItem";
import data from '../salonsData/data.json';

const SalonsList = () => {
  const [priceRange, setPriceRange] = useState([
    {
      text:  "$25 - $35",
      minRange: 25,
      maxRange: 35,
      isActive: true
    },
    {
      text:  "$35 - $45",
      minRange: 35,
      maxRange: 45,
      isActive: false
    },
    {
      text:  "$45 - $55",
      minRange: 45,
      maxRange: 55,
      isActive: false
    }
  ])
  const salonsData = JSON.parse(JSON.stringify(data));
  const {salonData, currency} = salonsData;

  const getActiveMaxRange = priceRange.find(price => price.isActive === true).maxRange;
  const getActiveMinRange = priceRange.find(price => price.isActive === true).minRange;

  const salonDataFilteredByPriceRange = salonData.filter(({price}) => price <= getActiveMaxRange && price >= getActiveMinRange);

  return (
    <div>
      <Navigation />
      <PriceSelection priceRange={priceRange} setPriceRange={setPriceRange}/>
      <SalonItem salonData={salonDataFilteredByPriceRange} currency={currency} />
    </div>
  );
};

export default SalonsList;