import React from "react";
import { useLocation } from "react-router-dom";

export default function Movie() {
  const location = useLocation();
  const { movie_id } = location.state;

  return <div>{movie_id}</div>;
}
