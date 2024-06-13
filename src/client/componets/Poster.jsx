// REACT COMPONENTS
import React from "react";

export default function Poster({ img }) {
    // EASIER TO HANDLE THE IMAGE LIKE THIS
    const url = "https://image.tmdb.org/t/p/w500/" + img;

    return (
        <div className="poster">
            <img src={`${url}`} alt="" />
        </div>
    );
}
