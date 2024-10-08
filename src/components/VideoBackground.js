import React from "react";

import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="">
      <iframe
        className=" aspect-video w-screen"
        src={`https://www.youtube.com/embed/${trailerId?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="autoplay"
        autoPlay="1"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
