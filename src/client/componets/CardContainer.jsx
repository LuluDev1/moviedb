import React, { useState, useEffect } from "react";
import Poster from "./Poster";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

export default function CardContainer({ id }) {
    const onPressLeft = () => {
        const cont1 = document.getElementById(id);
        cont1.scrollBy({ left: -705, behavior: "smooth" });
    };

    const onPressRight = () => {
        const cont1 = document.getElementById(id);
        cont1.scrollBy({ left: 705, behavior: "smooth" });
    };

    const [data, setData] = useState([]);

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
