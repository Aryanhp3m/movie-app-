// import { useState } from 'react';
import MovieCard from './MovieCard';




// function TodoItem() {
//     const [text, setText] = useState("");
//     return <input value={text} onChange={e => setText(e.target.value)} />;
//   }

function MovieGrid({ movies, favourites, onToggleFavourite  }) {



    return (
        <>
    

        <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterUrl={movie.posterUrl}
          rating={movie.rating}
          genre={movie.genre}
          isFavourite={favourites.has(movie.id)}
          onToggleFavourite={() => onToggleFavourite(movie.id)}
        />
      ))}
    </div>
        </>
    );
}

export default MovieGrid;
