const Genres = () => {
    const allGenres = ['Adventure','Dark Fantasy','Martial Arts']
    return(
        <>
        <div className="flex justify-center lg:gap-4 gap-2 flex-wrap">
           {allGenres.map((genre) => (
             <span className="bg-[#101820] lg:px-4 px-2 py-2 rounded-xl">{genre}</span>
           ))}
        </div>
        </>
    )
}

export default Genres;