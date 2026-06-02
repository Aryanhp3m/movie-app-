import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';


function App() {
  return (

    <>
    <Header />
    <div className="movie-list">
      <MovieCard
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
      />
       </div>

       </>
  );
}

export default App;
