import { ArrowRight } from "lucide-react";
import * as styles from "./Home.styles";
import { useNavigate } from "react-router-dom";
import { getCharacters, getEpisodes, getLocations } from "../../service/querys";
import { useQuery } from "@tanstack/react-query";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

const Home = () => {
  const navigate = useNavigate();

  [].map;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getCharacters(),
  });

  const {
    data: dataLocations,
    isLoading: isLoadingLocations,
    isError: isErrorLocations,
  } = useQuery({
    queryKey: ["locations"],
    queryFn: () => getLocations(),
  });

  const {
    data: dataEpisodes,
    isLoading: isLoadingEpisodes,
    isError: isErrorEpisodes,
  } = useQuery({
    queryKey: ["episodes"],
    queryFn: () => getEpisodes(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching characters.</div>;
  if (isLoadingLocations) return <div>Loading...</div>;
  if (isErrorLocations)
    return <div>Error occurred while fetching locations.</div>;
  if (isLoadingEpisodes) return <div>Loading...</div>;
  if (isErrorEpisodes)
    return <div>Error occurred while fetching episodes.</div>;

  return (
    <>
      <div className={styles.containerHome}>
        <section className={styles.homeIntroduction}>
          <p className={styles.title}>
            Explore the Rick and Morty
            <span className="text-[var(--color-green)]"> multiverse</span>.
          </p>
          <p className="opacity-70">
            Meet the characters from the C-137 universe and beyond.
          </p>
          <button
            className={styles.button}
            onClick={() => navigate("/characters")}
          >
            Explore characters <ArrowRight />
          </button>
        </section>

        <section className={styles.sectionInfo}>
          <div className={styles.containerInfo}>
            <p className={styles.infoNumber}>{data.info.count}</p>
            <p className={styles.infoLabel}>characters</p>
          </div>
          <div className={styles.containerInfo}>
            <p className={styles.infoNumber}>{dataEpisodes.info.count}</p>
            <p className={styles.infoLabel}>episodes</p>
          </div>
          <div className={styles.containerInfo}>
            <p className={styles.infoNumber}>{dataLocations.info.count}</p>
            <p className={styles.infoLabel}>locations</p>
          </div>
        </section>

        <section>
          <div className={styles.charactersSection}>
            <p className={styles.titleCharactersSection}>Featured characters</p>
            <button
              className={styles.buttonSeeAll}
              onClick={() => navigate("/characters")}
            >
              See all <ArrowRight />
            </button>
          </div>
        </section>

        <section className={styles.alignCardCharacters}>
          {data.results.slice(0, 6).map((character: any) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Home;
