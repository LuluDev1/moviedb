import React from "react";
import "../styles/Explore.css";
import CardContainer from "../componets/CardContainer";

export default function Explore() {
    return (
        <div className="exploreScreen">
            <CardContainer id="trending" />
            <CardContainer id="lewis" />
        </div>
    );
}
