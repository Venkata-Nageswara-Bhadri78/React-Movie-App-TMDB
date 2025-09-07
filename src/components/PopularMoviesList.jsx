// https://api.themoviedb.org/3/movie/popular?api_key=661d803937222864ed1d73599670bf1b&language=en-US

const baseLink = 'https://api.themoviedb.org/3';
const apiKey = '661d803937222864ed1d73599670bf1b';
const extrasInURL = '&language=en-US';


import React from 'react';
import {usePopularMovies} from '../API/Tmdb';
import RoundProgress from '../ui/RoundProgress';
import MovieCard from './MovieCard';

const PopularMoviesList = ({pageStyle, page=1}) => {
  console.log("Hai: " + page);
    const {popular, error, loading } = usePopularMovies({page});

    const baseLink = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <div className='p-4 bg-gray-300 text-xl'>Popular Movies</div>
      <div 
      className={`${'flex flex-row overflow-x-auto'}  px-4 gap-3 bg-gray-300`}
      >
          {popular.map(movie => {
              return(
                  <MovieCard key={movie.id} movie={movie} />
              )
          })}
      </div>
    </div>
  )
}

export default PopularMoviesList
