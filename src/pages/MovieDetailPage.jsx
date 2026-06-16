// import { useEffect, useState } from 'react'
import {  useNavigate ,useParams } from 'react-router-dom'
import { useReducer } from 'react';
import useFetch from '../hooks/useFetch'



const initialReviewState = {
  rating: 0,
  body: "",
  error: "",
  reviews: [],
};

function validateReview(rating, body) {
  if (rating === 0) {
    return "Please select a rating.";
  }

  if (!body.trim()) {
    return "Please write a review.";
  }

  return "";
}

function reviewReducer(state, action) {
  switch (action.type) {
    case "SET_RATING":
      return {
        ...state,
        rating: action.payload,
        error: "",
      };

    case "SET_BODY":
      return {
        ...state,
        body: action.payload,
        error: "",
      };

    case "SUBMIT": {
      const error = validateReview(state.rating, state.body);

      if (error) {
        return {
          ...state,
          error,
        };
      }

      const newReview = {
        rating: state.rating,
        body: state.body.trim(),
      };

      return {
        ...state,
        reviews: [...state.reviews, newReview],
        error: "",
      };
    }

    case "RESET":
      return {
        ...state,
        rating: 0,
        body: "",
        error: "",
      };

    default:
      return state;
  }
}




function MovieDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()


  const [reviewState, dispatch] = useReducer(
    reviewReducer,
    initialReviewState
  );
  // const [movie, setMovie] = useState(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   async function fetchMovie() {


  //     try {
  //       setLoading(true)

  //       const apiKey = '57fafb319673fc13e2880336c840afb2'

  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  //       )

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch movie')
  //       }

  //       const data = await response.json()
  //       setMovie(data)
  //     } catch (error) {
  //       setError(error.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchMovie()
  // }, [id])


  function handleReviewSubmit(event) {
    event.preventDefault();
  
    const error = validateReview(
      reviewState.rating,
      reviewState.body
    );
  
    dispatch({ type: "SUBMIT" });
  
    if (!error) {
      dispatch({ type: "RESET" });
    }
  }


  const apiKey = "57fafb319673fc13e2880336c840afb2";
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;


  const {
    data: movie,
    loading,
    error,
  } = useFetch(url);

  if (loading) {
    return <p>Loading movie...</p>
  }

  if (error) {
    return <p>{error}</p>
  }


if (!movie) {
  return <p>Movie not found.</p>;
}

  return (
    <main>
      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "250px", height: "auto" }}
      />

        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate('/')}>Home</button>

      <p>{movie.overview}</p>

      <section>
  <h2>Write a Review</h2>

  <form onSubmit={handleReviewSubmit}>
    <div>
      <p>Rating</p>

      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() =>
            dispatch({
              type: "SET_RATING",
              payload: star,
            })
          }
        >
          {star <= reviewState.rating ? "★" : "☆"}
        </button>
      ))}
    </div>

    <textarea
      value={reviewState.body}
      onChange={(event) =>
        dispatch({
          type: "SET_BODY",
          payload: event.target.value,
        })
      }
      placeholder="Write your review..."
      rows="5"
    />

    {reviewState.error && (
      <p>{reviewState.error}</p>
    )}

    <button type="submit">Submit Review</button>
  </form>

  {reviewState.reviews.map((review, index) => (
    <article key={index}>
      <p>{"★".repeat(review.rating)}</p>
      <p>{review.body}</p>
    </article>
  ))}
</section>
    </main>

    

  )
}

export default MovieDetailPage