import { createContext, useState } from 'react'

// Prevents the Vite Fast Refresh lint warning.
// eslint-disable-next-line react-refresh/only-export-components
export const FavouritesContext = createContext()

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([])

  function toggleFavourite(movie) {
    setFavourites((currentFavourites) => {
      const alreadyFavourite = currentFavourites.some(
        (favourite) => favourite.id === movie.id
      );
  
      if (alreadyFavourite) {
        return currentFavourites.filter(
          (favourite) => favourite.id !== movie.id
        );
      }
  
      return [...currentFavourites, movie];
    });
  }

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  )
}