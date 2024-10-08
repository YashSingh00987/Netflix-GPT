import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  

  const scrollContainerRef = useRef(null);

  // Scroll handler function
  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-6">
      <h1 className="text-2xl py-4 px-2 text-white">{title}</h1>
      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll(-300)} // Adjust the scroll distance
          className="absolute left-0 top-0 bottom-0 z-10  p-2"
        >
          <img
            alt="right-scroll"
            className="w-16 bg-opacity-40"
            src="https://cdn1.iconfinder.com/data/icons/gender-identity-1/2480/Gender-51-512.png"
          />
        </button>
        <div ref={scrollContainerRef} className="flex overflow-x-hidden">
          <div className="flex">
            {movies?.map((mv) => (
              <MovieCard
                key={mv.id}
                posterPath={mv.poster_path}
                org_title={mv.original_title}
              />
            ))}
          </div>
        </div>
        {/* Right scroll button */}
        <button
          onClick={() => scroll(300)} // Adjust the scroll distance
          className="absolute right-0 top-0 bottom-0 z-10 p-2"
        >
           <img
            alt="right-scroll"
            className="w-16 bg-opacity-30"
            src="https://cdn1.iconfinder.com/data/icons/gender-identity-1/2480/Gender-52-512.png"
          />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
