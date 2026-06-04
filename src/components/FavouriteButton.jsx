function FavouriteButton ({isFavourite, onToggleFavourite}) {

    return (
        <button onClick={onToggleFavourite}>
              {isFavourite ? '❤️ Remove Favourite' : '♡ Add Favourite'}
        </button>
    )

}

export default FavouriteButton;