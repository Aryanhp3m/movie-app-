import { useState } from 'react';
import './MovieCard.css';
import PropTypes from "prop-types";
import Badge from './Badge';
import MovieActions from './MovieAction';
// import FavouriteButton from './FavouriteButton';


function MovieCard({ title, posterUrl, rating, genre, isFavourite, onToggleFavourite}) {
    const [liked, setLiked] = useState(false);

    // console.log(typeof rating, rating);

    return (
        <div className="movie-card">
            <img className="movie-poster" src={posterUrl} alt={title} />

            <div className="movie-info">
                <h2 className="movie-title">{title}</h2>
                {/* <p className="movie-rating"> Rating:{rating}</p>
                <p className="movie-genre">Action:{genre}</p> */}
                <div>
                    <Badge>{genre}</Badge>
                    <Badge>{rating}★</Badge>
                </div>

                <button onClick={() => setLiked((value) => !value)}>
                    {liked ? "Liked" : "Like"}
                </button>

               {/* <FavouriteButton 
               isFavourite={isFavourite}
               onToggleFavourite={onToggleFavourite}
               /> */}




                <MovieActions 
                isFavourite={isFavourite}
                onToggleFavourite={onToggleFavourite}
                />


                {/* <button onClick={onToggleFavourite}>
          {isFavourite ? '❤️ Remove Favourite' : '♡ Add Favourite'}
        </button> */}

        
            </div>

        </div>

    )
};



MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    rating: PropTypes.number,
    genre: PropTypes.string.isRequired,
};

export default MovieCard;