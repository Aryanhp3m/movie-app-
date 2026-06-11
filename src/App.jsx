import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
// import MovieCard from './components/MovieCard';
// import MovieGrid from './components/MovieGrid';
// import MovieSection from './components/MovieSection';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetailPage';
import FavouritesPage from './pages/FavouritesPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import Protectedroute from './components/ProtectedRoute';
import { useContext } from 'react';
import { ThemeContext } from "./contexts/ThemeContext";
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';



// const initialMovies = [
//   {
//       id: 1,
//       title: 'Avatar',
//       rating: 8.5,
//       genre: 'Sci-Fi',
//       posterUrl: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg',
//   },
//   {
//       id: 2,
//       title: 'Avengers',
//       rating: 9,
//       genre: 'Action',
//       posterUrl: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg',
//   },
//   {
//       id: 3,
//       title: 'Iron Man',
//       rating: 8.8,
//       genre: 'Action',
//       posterUrl: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg',
//   },
//   {
//       id: 4,
//       title: 'Inception',
//       rating: 9.5,
//       genre: 'Sci-Fi',
//       posterUrl: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg',
//   },
//   {
//       id: 5,
//       title: 'Batman',
//       rating: 9,
//       genre: 'Action',
//       posterUrl: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg',
//   },
//   {
//       id: 6,
//       title: 'Interstellar',
//       rating: 9.2,
//       genre: 'Sci-Fi',
//       posterUrl: 'https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-1035x780.jpg',
//   },
// ];


function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(movies);
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  // const [favourites, setFavourites] = useState(new Set());


  // const filteredMovies = movies.filter(m =>
  //     m.title.toLowerCase().includes(searchQuery.toLowerCase()))




      function removeFirstMovie() {
        if (movies.length === 0) return;    
        console.log('Deleted movie id:', movies[0].id);
        console.log('Deleted movie title:', movies[0].title);
        setMovies(movies.slice(1));
    }



      // const toggleFavourite = (movieId) => {
      //     const newFavourites = new Set(favourites);
        
      //     if (newFavourites.has(movieId)) {
      //       newFavourites.delete(movieId);
      //     } else {
      //       newFavourites.add(movieId);
      //     }
        
      //     setFavourites(newFavourites);
      //   };


        useEffect(() => {
          const controller = new AbortController();
        
          const timer = setTimeout(async () => {
          const apicall = async() => {
            try {
              setLoading(true);
              setError(null);
        
              const apiKey = '57fafb319673fc13e2880336c840afb2';
        
              const url = searchQuery.trim()
                ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchQuery)}`
                : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
        
              const response = await fetch(url, {
                signal: controller.signal,
              });
        
              if (!response.ok) {
                throw new Error('Failed to fetch movies');
              }
        
              const data = await response.json();
        
              const formattedMovies = data.results.map((movie) => ({
                id: movie.id,
                title: movie.title,
                rating: movie.vote_average,
                genre: movie.release_date,
                posterUrl: movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://via.placeholder.com/500x750?text=No+Poster',
              }));
        
              setMovies(formattedMovies);
            } catch (err) {
              if (err.name !== 'AbortError') {
                setError(err.message);
              }
            } finally {
              setLoading(false);
            }
          }  
          apicall();
          }, 500);
        
          return () => {
            clearTimeout(timer);
            controller.abort();
          };
        }, [searchQuery]);


  
  return (

     <div className={theme}>
      {!isLoginPage && (
        <>
    <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    <button onClick={removeFirstMovie}>Remove First Movie</button>
    </>
  )}

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

  {/* {loading && <div className="spinner">Loading movies...</div>} */}

  {/* {error && <p className="error-message">{error}</p>} */}

  {/* {!loading && !error && (

  // <MovieSection
    
  // />
  
)} */}
     </div>

     <Routes >
      
      {/* <Route path='/movie/:id' element={<MovieDetail/>}></Route> */}
      <Route path="*" element={<NotFoundPage/>} />
      <Route element={<AuthLayout />}>
     <Route path="/login" element={<LoginPage />} />
     </Route>
      <Route element={<Protectedroute/>}>
      <Route element={<MainLayout searchQuery={searchQuery} setSearchQuery={setSearchQuery}></MainLayout>}></Route>
      <Route path='/favourites' element={<FavouritesPage/>}></Route>
      <Route path='/' element={<HomePage movies={movies} error={error} loading={loading}/>}></Route>
      <Route path='/movie/:id' element={<MovieDetail/>}></Route>
     </Route>
    
     </Routes>
  
     </div>
  );
}

export default App;
