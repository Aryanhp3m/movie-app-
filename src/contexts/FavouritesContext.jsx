import { createContext, useEffect, useReducer } from "react";
import useLocalStorage from '../hooks/useLocalStorage';

// Prevents the Vite Fast Refresh lint warning.
// eslint-disable-next-line react-refresh/only-export-components


function favouritesReducer(state, action) {
  switch (action.type) {
    case "ADD_FAVOURITE": {
      const alreadyExists = state.some(
        (movie) => movie.id === action.payload.id
      );

      if (alreadyExists) {
        return state;
      }

      return [...state, action.payload];
    }

    case "REMOVE_FAVOURITE":
      return state.filter(
        (movie) => movie.id !== action.payload
      );

    case "CLEAR_ALL":
      return [];

    default:
      return state;
  }
}


function getInitialFavourites() {
  try {
    const savedFavourites = localStorage.getItem("favourites");

    return savedFavourites
      ? JSON.parse(savedFavourites)
      : [];
  } catch {
    return [];
  }
}


export const FavouritesContext = createContext()

export function FavouritesProvider({ children }) {
  // const [favourites, setFavourites] = useState([])

  // const [x, setX] = useState(0);
  

  // const [favourites, setFavourites] = useLocalStorage(
  //   "favourites",
  //   []
  // );


  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    getInitialFavourites
  );

  
// if (favourites.length > 0) {
//   const [x, setX] = useState(0); 
//   console.log(x, setX);
// }

useEffect(() => {
  localStorage.setItem(
    "favourites",
    JSON.stringify(favourites)
  );
}, [favourites]);

  // function toggleFavourite(movie) {
  //   setFavourites((currentFavourites) => {
  //     const alreadyFavourite = currentFavourites.some(
  //       (favourite) => favourite.id === movie.id
  //     );
  
  //     if (alreadyFavourite) {
  //       return currentFavourites.filter(
  //         (favourite) => favourite.id !== movie.id
  //       );
  //     }
  
  //     return [...currentFavourites, movie];
  //   });
  // }

  function toggleFavourite(movie) {
    const alreadyFavourite = favourites.some(
      (favourite) => favourite.id === movie.id
    );
  
    dispatch({
      type: alreadyFavourite
        ? "REMOVE_FAVOURITE"
        : "ADD_FAVOURITE",
      payload: alreadyFavourite ? movie.id : movie,
    });
  }

  return (
    <FavouritesContext.Provider
  value={{ favourites, toggleFavourite, dispatch }}
>
  {children}
</FavouritesContext.Provider>
  )
}