import { useEffect, useState } from "react";
import SectionComp from "../components/elements/section/section"
import { fetchData } from "../services/data";
import Card from "../components/fragments/card";

const RecommendedAnime = () => {
    const [recommendedAnime, setRecommendedAnime] = useState([]);

    useEffect(() => {
      const fetchRecommendedAnime = async () => {
        const config = {
            path: "recommendations/anime",
        };
        try {
          const response = await fetchData(config);
          console.log(response.data);
          setRecommendedAnime(response.data);
        } catch (error) {
          console.error("Terjadi kesalahan:", error);
        }
      };
  
      fetchRecommendedAnime();
    }, []);
  
    return (
        <>
        <SectionComp title="Recommended Anime">
            {recommendedAnime.slice(0,4).map(item => item.entry.map((anime) => (
                <Card key={anime.mal_id} animeData={anime} />
            )))}
        </SectionComp>
        </>
    )
}

export default RecommendedAnime;