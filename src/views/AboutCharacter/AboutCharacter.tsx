import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacters } from "../../service/querys";
import * as styles from "./AboutCharacter.styles.ts";
import { ArrowLeft } from "lucide-react";

const AboutCharacter = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters", id],
    queryFn: () => getCharacters(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div className={styles.alignEmpty}>
        <p>Error searching for character.</p>
        <img className="h-100" src="./empty-image.svg" alt="No favorites" />
      </div>
    );

  return (
    <>
      <section className={styles.alignContainer}>
        <button
          className={styles.buttonBack}
          onClick={() => navigate("/characters")}
        >
          <ArrowLeft />
          Back to characters
        </button>

        <div className={styles.characterContainer}>
          <img
            src={data.image}
            alt={data.name}
            className={styles.imageCharacter}
          />
          <div className={styles.alignInfoCharacter}>
            <div className="flex justify-between items-center">
              <p className={styles.nameCharacter}>{data.name}</p>
            </div>

            <div>
              <p className="font-semibold text-[var(--color-off-white)]">
                {data.species} - {data.status}
              </p>
            </div>

            <div className={styles.alignTextCharacter}>
              <p className={styles.styleInfoCharacter}>{data.gender}</p>
              <p className={styles.styleInfoCharacter}>{data.origin.name}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCharacter;
