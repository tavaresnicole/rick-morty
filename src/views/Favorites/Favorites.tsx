import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useFavorites } from "../../contexts/FavoritesContext";
import * as styles from "./Favorites.styles.ts";

const Favorites = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className={styles.alignEmpty}>
        <p>No favorites yet. Explore the characters!</p>
        <img className="h-100" src="./empty-image.svg" alt="No favorites" />
      </div>
    );
  }

  return (
    <section className={styles.alignContainer}>
      <div className={styles.alignTitle}>
        <p className={styles.styleTitle}>
          Here you'll find all your favorite characters!
        </p>
        <div className={styles.alignCard}>
          {favorites.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
