import { createContext, useContext, useEffect, useState } from "react";

export interface character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

interface FavoritesContextType {
  favorites: character[];
  toggleFavorite: (character: character) => void;
  isFavorited: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<character[]>(() => {
    const saved = localStorage.getItem("rick-morty-favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("rick-morty-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character: character) => {
    setFavorites((prev) =>
      prev.some((c) => c.id === character.id)
        ? prev.filter((c) => c.id !== character.id)
        : [...prev, character],
    );
  };

  const isFavorited = (id: number) => favorites.some((c) => c.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorited }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error("useFavorites must be used within the FavoritesProvider.");
  return context;
}
