// TrendingAnime.js
import { useEffect, useState } from "react";
import { fetchData } from "../services/data";
import Card from "../components/fragments/card";
import "../../src/fonts.css";
import SectionComp from "../components/elements/section/section";

const TrendingAnime = () => {
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    const fetchTopAnime = async () => {
      const config = {
        path: "top/anime",
        params: { limit: 12 }
      };
      try {
        const response = await fetchData(config);
        console.log(response.data);
        setTopAnime(response.data);
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };

    fetchTopAnime();
  }, []);

  return (
    <>
      <SectionComp title="Top Anime">
        {topAnime.map((anime) => (
          <Card key={anime.rank} animeData={anime} />
        ))}
      </SectionComp>
    </>
  );
};

export default TrendingAnime;
