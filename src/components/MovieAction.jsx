import FavouriteButton from './FavouriteButton';

function MovieActions({ isFavourite, onToggleFavourite }) {
  return (
   
      <FavouriteButton
        isFavourite={isFavourite}
        onToggleFavourite={onToggleFavourite}
      />
  );
}


export default MovieActions;