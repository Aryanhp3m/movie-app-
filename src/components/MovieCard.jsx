import './MovieCard.css';
import PropTypes from "prop-types";

function MovieCard ({title, posterUrl, rating, genre}) {

    // console.log(typeof rating, rating);

    return (
        <div className="movie-card">
            <img  className="movie-poster"  src={posterUrl} alt={title} />

            <div className="movie-info">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-rating"> Rating:{rating}</p>
                <p className="movie-genre">Action:{genre}</p>
            </div>
         </div>
         
    )
};





MovieCard.propTypes= {
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    rating: PropTypes.number,
    genre:PropTypes.string.isRequired,
};




export default MovieCard;