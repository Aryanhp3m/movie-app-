import './App.css';
import { useState } from 'react';
import Header from './components/Header';
// import MovieCard from './components/MovieCard';
// import MovieGrid from './components/MovieGrid';
import MovieSection from './components/MovieSection';



const initialMovies = [
  {
      id: 1,
      title: 'Avatar',
      rating: 8.5,
      genre: 'Sci-Fi',
      posterUrl: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg',
  },
  {
      id: 2,
      title: 'Avengers',
      rating: 9,
      genre: 'Action',
      posterUrl: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg',
  },
  {
      id: 3,
      title: 'Iron Man',
      rating: 8.8,
      genre: 'Action',
      posterUrl: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg',
  },
  {
      id: 4,
      title: 'Inception',
      rating: 9.5,
      genre: 'Sci-Fi',
      posterUrl: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg',
  },
  {
      id: 5,
      title: 'Batman',
      rating: 9,
      genre: 'Action',
      posterUrl: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg',
  },
  {
      id: 6,
      title: 'Interstellar',
      rating: 9.2,
      genre: 'Sci-Fi',
      posterUrl: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg',
  },
];


function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState(initialMovies);
  const [favourites, setFavourites] = useState(new Set());
  const filteredMovies = movies.filter(m =>
      m.title.toLowerCase().includes(searchQuery.toLowerCase()))


      function removeFirstMovie() {
        console.log('Deleted movie id:', movies[0].id);
        console.log('Deleted movie title:', movies[0].title);
        setMovies(movies.slice(1));
    }



      const toggleFavourite = (movieId) => {
          const newFavourites = new Set(favourites);
        
          if (newFavourites.has(movieId)) {
            newFavourites.delete(movieId);
          } else {
            newFavourites.add(movieId);
          }
        
          setFavourites(newFavourites);
        };



  
  return (

    <>
    <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    <button onClick={removeFirstMovie}>Remove First Movie</button>

    <div className="movie-list">
      {/* <MovieCard
        title="Avengers"
        posterUrl="https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg"
        rating={8.5}
        genre="Action"
      />
         <MovieCard
        title="Batman"
        posterUrl="https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg"
        rating={9}
        genre="Action"
      />
        <MovieCard
        title="Inception"
        posterUrl="https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg"
        rating={9.5}
        genre="sci-fi"
      /> */}
{/* 
      <MovieGrid searchQuery={searchQuery} 
        movies={filteredMovies}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
      
      /> */}

      <MovieSection 

    movies={filteredMovies}
    favourites={favourites}
    onToggleFavourite={toggleFavourite}
      
      />
    

       </div>

       </>
  );
}

export default App;
