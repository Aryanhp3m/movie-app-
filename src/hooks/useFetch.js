import { useEffect, useReducer } from "react";





function reducer(state, action) {
    switch (action.type) {
      case "FETCH_START":
        return { ...state, loading: true, error: null };
  
      case "FETCH_SUCCESS":
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
  
      case "FETCH_ERROR":
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  }

function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

const [state, dispatch] = useReducer(reducer, {
    data: null,
    loading: true,
    error: null,
  });

    useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        // setLoading(true);
        // setError(null);

        dispatch({ type: "FETCH_START" });

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        // setData(result);

        dispatch({
            type: "FETCH_SUCCESS",
            payload: result,
          });
      } catch (err) {
        if (err.name !== "AbortError") {
        //   setError(err.message);


        dispatch({
            type: "FETCH_ERROR",
            payload: err.message,
          });
        }
      } finally {
        if (!controller.signal.aborted) {
        //   setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

//   return { data, loading, error };
return state;
}

export default useFetch;