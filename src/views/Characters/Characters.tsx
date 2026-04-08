import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../service/querys";
import * as styles from "./Characters.styles";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { type character } from "../../contexts/FavoritesContext";
import { useState } from "react";

interface ApiInfo {
  pages: number;
  next: string | null;
  prev: string | null;
}

interface CharactersResponse {
  info: ApiInfo;
  results: character[];
}

const Characters = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, isFetching } = useQuery<CharactersResponse>(
    {
      queryKey: ["characters", page],
      queryFn: () => getCharacters(undefined, page),
      placeholderData: (prev) => prev,
    },
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div className={styles.alignEmpty}>
        <p>Error occurred while fetching characters.</p>
        <img className="h-100" src="./empty-image.svg" alt="No favorites" />
      </div>
    );
  if (!data) return null;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <section className={styles.alignContainer}>
      <section className={styles.alignPagination}>
        <div className={styles.alignTitle}>
          <p className={styles.styleTitle}>
            Here you can find all the characters from the series!
          </p>
          <section className={styles.alignCharacters}>
            {data.results.map((character: character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </section>
        </div>

        <div className={styles.pagination}>
          {isFetching && (
            <div className={styles.fetchingIndicator}>Loading...</div>
          )}
          <div className={styles.paginationContainer}>
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={!data.info.prev || isFetching}
              className={styles.paginationButton}
            >
              Back
            </button>

            <span className={styles.pageInfo}>
              {page} / {data.info.pages}
            </span>

            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={!data.info.next || isFetching}
              className={styles.paginationButton}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Characters;
