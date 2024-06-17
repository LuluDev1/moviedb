// REACT COMPONENTS
import React from "react";
import { Link } from "react-router-dom";

export default function Poster({ img, movie_id }) {
  // EASIER TO HANDLE THE IMAGE LIKE THIS
  const url = "https://image.tmdb.org/t/p/w500/" + img;

  return (
    <div className="poster">
      <Link to="/explore/movie" state={{ movie_id }}>
        <img src={`${url}`} alt="" />
      </Link>
    </div>
  );
}
