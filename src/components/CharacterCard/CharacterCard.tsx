import { HeartIcon } from "lucide-react";
import { useFavorites, type character } from "../../contexts/FavoritesContext";
import * as styles from "./CharacterCard.styles.ts";
import { Link } from "react-router-dom";

interface CharacterCardProps {
  character: character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { toggleFavorite, isFavorited } = useFavorites();
  const favorited = isFavorited(character.id);

  return (
    <Link to={`/character/${character.id}`}>
      <section className={styles.cardCharacters}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.cardCharactersImage}
        />
        <div className={styles.cardCharactersBody}>
          <div className={styles.alignTextCard}>
            <p className="font-semibold">{character.name}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite(character);
              }}
              aria-label={
                favorited ? "Remove from favorites" : "Add to favorites"
              }
              className="cursor-pointer"
            >
              <HeartIcon
                className={
                  favorited
                    ? "fill-red-500 text-red-500"
                    : "text-gray-400 hover:text-red-500 transition-colors duration-300"
                }
              />
            </button>
          </div>

          <div className="flex text-xs gap-1">
            <p>{character.species}</p>-<p>{character.status}</p>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default CharacterCard;
