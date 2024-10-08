import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({posterPath, org_title}) => {
  return (
    <div className="w-52 p-2">
      <img alt={org_title} src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
