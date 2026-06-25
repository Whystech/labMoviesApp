import React, {useState, useEffect}  from "react"; // replace existing react import
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import { MovieDetailsProps} from "../types/interfaces";
import { getMovie} from "../api/tmdb-api";
import PageTemplate from "../components/templateMoviePage";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';



const MovieDetailsPage: React.FC= () => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery<MovieDetailsProps, Error>(
    ["movie", id],
    ()=> getMovie(id||"")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
        <PageTemplate movie={movie}>
          <MovieDetails {...movie} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
    </>
  );
};

export default MovieDetailsPage;
