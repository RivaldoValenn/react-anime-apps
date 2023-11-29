// Card.js
import React from "react";
import CardHeader from "../elements/card/cardHeader";
import CardBody from "../elements/card/cardBody";


const Card = ({ animeData }) => {
  return (
    <div className="container">
      <div className="min-w-full overflow-hidden lg:max-w-lg mx-auto hover:scale-105 transition-all duration-200 relative">
        <CardHeader animeData={animeData} />
        <CardBody animeData={animeData} />
      </div>
    </div>
  );
};

export default Card;
