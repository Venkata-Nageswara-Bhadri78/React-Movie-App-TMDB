import React from 'react'

import { useMovieDetails } from '../API/Tmdb';
import CastingDetails from './CastingDetails';
import { ClassNames } from '@emotion/react';
import RoundProgress from '../ui/RoundProgress';
import MovieOverview from './MovieOverview';
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
const MovieDetails = () => {
    const {movie_id} = useParams();
    console.log(movie_id)
    // const { movieDetails, error, loading } = useMovieDetails({type: 'movie', movieId: '755898', credits: ""});

    return (
        <div>
            <div><BackButton /></div>
            <div>
                <MovieOverview type={'movie'} movieId={movie_id} credits={""}/>
                <div className=''>
                    
                    <CastingDetails type={'movie'} movieId={movie_id} />
                </div>
            </div>
        </div>
    )
}

export default MovieDetails