import { useContext } from "react";
import { FavouritesContext } from "../contexts/FavouritesContext";
import MovieGrid from "../components/MovieGrid";

function FavouritesPage() {
  const { favourites } = useContext(FavouritesContext);

  if (favourites.length === 0) {
    return <h2>No favourite movies yet</h2>;
  }

  return <MovieGrid movies={favourites} />;
}

export default FavouritesPage;