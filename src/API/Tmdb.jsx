import React, { useEffect, useState } from 'react'

// https://api.themoviedb.org/3/movie/popular?api_key=661d803937222864ed1d73599670bf1b&language=en-US
const baseLink = 'https://api.themoviedb.org/3';
const apiKey = '661d803937222864ed1d73599670bf1b';

export const useAllMoviesData = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

//   console.log(movies);
  useEffect(() => {
    const fetchAllMoviesData = async () => {
      try {
        let allMovies = [];
        let page = 1;
        let totalPages = 1;

        while (page <= totalPages && page <= 500) {
            
          const apiLink = `${baseLink}/trending/movie/day?api_key=${apiKey}&page=${page}`;

          // https://api.themoviedb.org/3/trending/movie/day?api_key=661d803937222864ed1d73599670bf1b&page=1
          console.log(apiLink);

          const res = await fetch(apiLink);
          if (!res.ok) throw new Error("Error fetching data");

          const data = await res.json();

          allMovies = [...allMovies, ...data.results];
          totalPages = data.total_pages;
          page++;
        }

        setMovies(allMovies);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMoviesData();
  }, []);
  console.log(movies)
  return { movies, loading, error };
};


export const usePersonDetails = ({type, personId}) => {
    const [person, setPerson] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiLink = `${baseLink}/${type}/${personId}?api_key=` + apiKey;
    // console.log(apiLink)
    // https://api.themoviedb.org/3/person/2049314?api_key=661d803937222864ed1d73599670bf1b
    // console.log(apiLink)
    useEffect(() => {
        const fetchPersonDetails = async () => {
            try{
                const response = await fetch(apiLink);
                if(!response.ok){
                    console.log("Error in Fetching Data");
                }
                const data = await response.json();
                if(type==='person'){
                    setPerson([data]);
                }
                else{
                    setPerson(data);
                }
                
            }
            catch(err){
                setError(err);
            }
            finally{
                setLoading(false);
            }
        }
        fetchPersonDetails();
    }, [apiLink]);
    // console.log(person);
    return { person, loading, error };
}

export const useMovieDetails = ({type, movieId, credits, page=1}) => {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const apiLink = `${baseLink}/${type}/${movieId}${credits}?api_key=`+apiKey;

    useEffect(() => {
        const fetchCompleteData = async () => {
            try {
                const response = await fetch(apiLink);
                if (!response.ok) {
                    throw new Error("Error in fetching data...");
                }
                const data = await response.json();
                if(credits==="/credits"){
                    setMovie(data.cast); // Use data directly, not data.results
                }
                else{
                    setMovie([data]);
                }
                
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCompleteData();
    }, [apiLink]); // Run once on mount

    return { movie, loading, error };
};



export const useTopRatedMovies = ({type, category, page=1}) => {
    const [topRated, setTopRated] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const apiLink = `${baseLink}/${type}/${category}?api_key=`+apiKey + `&page=${page}`;
    // console.log(apiLink);
    // https://api.themoviedb.org/3/movie/top_rated?api_key=661d803937222864ed1d73599670bf1b
    useEffect(() => {
        const fetchCompleteData = async () => {
            try{
                const response = await fetch(apiLink);
                if(!response.ok){
                    throw new Error("Error in Fetching Data...");
                }
                const data = await response.json();
                setTopRated(data.results);
            }
            catch(err){
                setError(err);
            }
            finally{
                setLoading(false);
            }
        }
        fetchCompleteData();
    }, [apiLink]);

    return {topRated, loading, error};
}

export const usePopularMovies = ({page=1}) => {
    console.log("hai");
    const [popular, setPopular] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const apiLink = `${baseLink}/movie/popular?api_key=${apiKey}&page=${page}`;

    console.log(apiLink);

    // https://api.themoviedb.org/3/movie/popular?api_key=661d803937222864ed1d73599670bf1b&page=2

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try{
                const response = await fetch(apiLink);
                if(!response.ok){
                    throw new Error("Error in Data Loading");
                }
                const data = await response.json();
                setPopular(data.results);
            }
            catch(err){
                setError("Error in Fetching Data...."+err);
            }
            finally{
                setLoading(false);
            }
        }
        fetchPopularMovies();
    }, [apiLink]);

    return { popular, error, loading };
}


export const useTrendingMovies = ({time, type, page}) => {
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // https://api.themoviedb.org/3/trending/movie/day?api_key=661d803937222864ed1d73599670bf1b

    // https://api.themoviedb.org/3/trending/movie/day?api_key=661d803937222864ed1d73599670bf1b&page=1

    const apiLink = `${baseLink}/trending/${type}/${time}?api_key=${apiKey}&page=${page}`;

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try{
                const response = await fetch(apiLink);
                if(!response.ok){
                    console.log("Error in Fetching data...");
                }
                const data = await response.json();
                setTrending(data.results);
            }
            catch(err){
                setError(err);
            }
            finally{
                setLoading(false);
            }
        }
        fetchTrendingMovies();
    }, [apiLink])
  return { trending, loading, error };
}


const Tmdb = () => {
    const {popular, loading, error } = usePopularMovies();

    
  return (
    <div>Tmdb</div>
  )
}


export default Tmdb
