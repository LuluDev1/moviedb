// REACT COMPONENTS
import React, { useState, useEffect } from "react";

//
import Poster from "./Poster";

// GETTING ANTD ICONS
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

// PASSING A CERTAIN ID PROP SO ONLY THE CONTAINER WITH THE CERTAIN ID WILL SCROLL
export default function CardContainer({ id }) {
    // When you press left
    const onPressLeft = () => {
        const cont1 = document.getElementById(id);
        cont1.scrollBy({ left: -705, behavior: "smooth" });
    };

    // When you press right
    const onPressRight = () => {
        const cont1 = document.getElementById(id);
        cont1.scrollBy({ left: 705, behavior: "smooth" });
    };

    // Data state for when we get it and store foe cache
    const [data, setData] = useState([]);

    // Get image/api movie data based on the id
    useEffect(() => {
        fetch(`/${id}`)
            .then((response) => response.json())
            .then((response) => setData(response.results || [])) // Ensure data is an array
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="cardContainer">
            <LeftCircleFilled className="scrollBtn" onClick={onPressLeft} />
            <div className="scrollContainer" id={id}>
                {data.map((movie, index) => (
                    <Poster key={index} img={movie.poster_path} />
                ))}
            </div>
            <RightCircleFilled className="scrollBtn" onClick={onPressRight} />
        </div>
    );
}
