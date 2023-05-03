import React, { useState } from "react";
import data from "./data";
import card from "./card";


const LensKart = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default LensKart;