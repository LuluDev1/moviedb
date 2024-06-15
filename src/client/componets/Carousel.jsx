import React, { useRef, useState, useEffect } from "react";

// Icons
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

export default function Carousel() {
    // State for the data
    const [data, setData] = useState(null);
    const [isMoving, setIsMoving] = useState(false);

    // Ref for Dom manipulation
    const carouselRef = useRef(null);

    // Scroll Right
    const scrollRight = () => {
        const carousel = carouselRef.current;
        const carouselWidth = carousel.clientWidth;
        if (isMoving === false) {
            carousel.scrollBy({ left: carouselWidth, behavior: "smooth" });
            setIsMoving(true);
            setTimeout(() => {
                setIsMoving(false);
            }, 700);
        }
    };

    // Scroll Left
    const scrollLeft = () => {
        const carousel = carouselRef.current;
        const carouselWidth = carousel.clientWidth;
        if (isMoving === false) {
            carousel.scrollBy({ left: -carouselWidth, behavior: "smooth" });
            setIsMoving(true);
            setTimeout(() => {
                setIsMoving(false);
            }, 700);
        }
    };

    let backdropurl = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        fetch("/nowplaying")
            .then((response) => response.json())
            .then((response) => setData(response.results))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="carouselContainer">
            <div className="carousel" ref={carouselRef}>
                {data ? (
                    data.map((movie, index) => (
                        <div
                            key={index}
                            className="carouselItem"
                            style={{
                                backgroundImage: `url(${
                                    backdropurl + movie.backdrop_path
                                })`,
                            }}>
                            <div className="shade">
                                <img
                                    className="poster"
                                    src={backdropurl + movie.poster_path}
                                    alt=""
                                />
                                <div className="movieinfo">
                                    <h1 className="title">
                                        {movie.original_title}
                                    </h1>
                                    <p>
                                        {Math.floor(movie.vote_average * 10)}%
                                    </p>
                                    <p>{movie.overview}</p>
                                </div>
                                <div className="trailers">
                                    <iframe
                                        loading="lazy"
                                        className="trailer"
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                    <iframe
                                        loading="lazy"
                                        className="trailer"
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="errorBox">Error Displaying message</div>
                )}
            </div>
            <div className="btnCtn">
                <ArrowLeftOutlined onClick={scrollLeft} />
                <ArrowRightOutlined onClick={scrollRight} />
            </div>
        </div>
    );
}
