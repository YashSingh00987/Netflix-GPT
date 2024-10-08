import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store => store.movies?.popularMovies)
  const topRatedMovies = useSelector(store => store.movies?.topRatedMovies)
  const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);

  console.log(upcomingMovies)




  return (
     (
      <div className=" bg-black bg-opacity-90">
        <div className="-mt-[210px] relative z-10">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Top rated "} movies={topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
