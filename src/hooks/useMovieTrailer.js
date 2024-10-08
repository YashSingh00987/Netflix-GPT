import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter((movie) => {
      return movie.type === "Trailer";
    });
    const opt = Math.floor(Math.random() * filteredData.length)

    const trailer = filteredData.length ? filteredData[opt] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    movieVideos();
  }, []);

  return;
};

export default useMovieTrailer;
