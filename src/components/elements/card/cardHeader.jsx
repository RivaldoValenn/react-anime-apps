// CardHeader.js
import React from "react";

const CardHeader = ({ animeData }) => {
  return (
    <>
      <img
        src={animeData.images.webp.image_url}
        alt={
          animeData.title.length > 25
            ? `${animeData.title.slice(0, 25)}...`
            : animeData.title
        }
        className="w-full lg:h-[50vh] h-[250px] object-cover shadow-2xl brightness-50 rounded-md"
      />
      {animeData.rating && animeData.rating.length > 0 && (
      <div
        className={"absolute top-2 left-2 bg-[#1c1c1c] text-white px-2 py-1  text-sm font-semibold font-montserrat shadow-xl"}
      >
        {animeData.rating.includes("PG-13") ? "PG-13" : "17+"}
      </div>
      )}
      {animeData.score && animeData.score > 0 && (
      <div
        className="flex items-center gap-1 text-sm bg-[#1c1c1c] justify-center absolute right-2 top-2 px-2 py-1"
      >
        <i className="bi bi-star-fill text-yellow-500"></i>
        <p className="font-montserrat font-bold text-white">
          {animeData.score.toFixed(1)}
        </p>
      </div>
      )}
    </>
  );
};

export default CardHeader;
