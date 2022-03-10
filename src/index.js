//import React, { useState } from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import TitleH1 from "./components/Title";
import HeaderAnimation from "./components/HeaderAnimation";
import "./index.scss";

const Home = () => {
    return (
        <>
            <Nav />
            <div className="myHeader" >
                <HeaderAnimation />
                <TitleH1 />
            </div>
        </>
    );
}

ReactDOM.render(
    <Home />,
    document.getElementById("root")
)