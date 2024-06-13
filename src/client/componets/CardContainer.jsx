import React from "react";
import Poster from "./Poster";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

export default function CardContainer({ id }) {
    const onPressLeft = () => {
        const cont1 = document.getElementById(id);
        cont1.scrollBy({ left: -420, behavior: "smooth" });
    };

    const onPressRight = () => {
        const cont1 = document.getElementById(id);
        cont1.scrollBy({ left: 420, behavior: "smooth" });
    };
    return (
        <div className="cardContainer">
            <LeftCircleFilled className="scrollBtn" onClick={onPressLeft} />
            <div className="scrollContainer" id={id}>
                <Poster img="https://images.desenio.com/zoom/17469_1.jpg" />
                <Poster img="https://images.desenio.com/zoom/17469_1.jpg" />
                <Poster img="https://images.desenio.com/zoom/17469_1.jpg" />
                <Poster img="https://images.desenio.com/zoom/17469_1.jpg" />
                <Poster img="https://images.desenio.com/zoom/17469_1.jpg" />
                <Poster img="https://images.desenio.com/zoom/17469_1.jpg" />
                <Poster img="https://images.desenio.com/zoom/17469_1.jpg" />
                <Poster img="https://images.desenio.com/zoom/17469_1.jpg" />
                <Poster img="https://images.desenio.com/zoom/17469_1.jpg" />
            </div>
            <RightCircleFilled className="scrollBtn" onClick={onPressRight} />
        </div>
    );
}
