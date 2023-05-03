import React, { useState } from "react";
import list from "../data";
import Cards from "./card";


const LensKart = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default LensKart;