import { useState, useEffect } from "react";
import Poster from "./Poster";

export default function MovieSlide({ endpoint }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="slideContainer">
      {data ? (
        data.map((movie, index) => {
          return (
            <>
              <Poster
                index={index}
                img={movie.poster_path}
                movie_id={movie.id}
              />
              
            </>
          );
        })
      ) : (
        <p>Error</p>
      )}
    </div>
  );
}
