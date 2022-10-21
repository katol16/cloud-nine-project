import React from 'react';
import BackBtn from "./Buttons/BackBtn";
import SettingsBtn from "./Buttons/SettingsBtn";

const Navigation = () => {
  return (
    <div className="navigation">
      <BackBtn/>
      <h1>Hår</h1>
      <SettingsBtn/>
    </div>
  );
};

export default Navigation;