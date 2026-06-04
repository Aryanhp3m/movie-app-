import MovieGrid from "./MovieGrid";

function MovieSection({ movies, favourites, onToggleFavourite }) {
    return (
        <section>

            <h2>Movies</h2>

            <MovieGrid  
            movies={movies}
            favourites={favourites}
            onToggleFavourite={onToggleFavourite}
             />

        </section>
    );
}

export default MovieSection;