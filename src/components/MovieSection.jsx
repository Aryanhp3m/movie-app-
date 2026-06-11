import MovieGrid from "./MovieGrid";

function MovieSection({ movies}) {
    return (
        <section>

            <h2>Movies</h2>

            <MovieGrid  
            movies={movies}
             />

        </section>
    );
}

export default MovieSection;