import React from "react";

export default function Poster({ img }) {
    const url = "https://image.tmdb.org/t/p/w500/" + img;

    return (
        <div className="poster">
            <img src={`${url}`} alt="" />
        </div>
    );
}
