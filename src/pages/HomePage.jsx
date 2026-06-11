// import MovieActions from "../components/MovieAction"
// import MovieCard from "../components/MovieCard"
import MovieGrid from "../components/MovieGrid"

function HomePage({movies, error, loading})  {
    return (

    <>
    <div className ="movie-list">

    {loading && <div className="spinner">Loading movies...</div>}

    {error && <p className="error-message">{error}</p>}
    {!loading && !error &&

    <MovieGrid
     movies={movies}
    />
    }    

</div>
        
</> 

)  
};

export default HomePage