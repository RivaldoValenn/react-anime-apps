const CardBody = ({ animeData }) => {
  return (
    <div className="px-3 pt-3 pb-7 relative">
      <h1 className="font-bold font-montserrat lg:text-md text-sm mb-2 text-white truncate">
        {animeData.title.replace(/[^a-zA-Z\s]/g, "").length > 35
          ? `${animeData.title.replace(/[^a-zA-Z\s]/g, "").slice(0, 35)}...`
          : animeData.title.replace(/[^a-zA-Z\s]/g, "")}
      </h1>

      {animeData.genres && animeData.genres.length > 0 && (
        <p className="text-white font-montserrat lg:text-md text-sm font-normal tracking-wider truncate">
          {animeData.genres.map((genre, index) => (
            <span
              key={genre.mal_id}
              className="text-white font-montserrat font-light opacity-50 py-2"
            >
              {genre.name}
              {index !== animeData.genres.length - 1 ? "," : ""}
            </span>
          ))}
        </p>
      )}
      {animeData.favorites ? (
        <p className="text-white font-montserrat lg:text-md text-sm font-normal tracking-wider flex gap-1 mt-2">
          <i className="bi bi-heart-fill text-rose-600"></i>
          {animeData.favorites.toLocaleString()}
        </p>
      ) : null}
    </div>
  );
};

export default CardBody;
