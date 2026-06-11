import { useContext} from 'react';
import './MovieCard.css';
import PropTypes from "prop-types";
import Badge from './Badge';
import MovieActions from './MovieAction';
import { Link } from 'react-router-dom';
import { FavouritesContext } from '../contexts/FavouritesContext';

// import FavouriteButton from './FavouriteButton';


function MovieCard({ title, posterUrl, rating, genre, movie}) {
    // const [liked, setLiked] = useState(false);

    const { favourites, toggleFavourite } = useContext(FavouritesContext)
    const isFavourite = favourites.some(
        (favourite) => favourite.id === movie.id
      );

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

                {/* <button onClick={() => setLiked((value) => !value)}>
                    {liked ? "Liked" : "Like"}
                </button> */}

               {/* <FavouriteButton 
               isFavourite={isFavourite}
               onToggleFavourite={onToggleFavourite}
               /> */}

               <Link to={`/movie/${movie.id}`}>
               
                <article>
                <h2>{movie.title}</h2>
                </article>
               
               </Link>
                



                <MovieActions 
                isFavourite={isFavourite}
                onToggleFavourite={() => toggleFavourite(movie)}
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