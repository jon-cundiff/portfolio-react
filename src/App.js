import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Articles from "./Components/Articles/Articles";

import "./App.css";

function App() {
    let location = useLocation();
    return (
        <div className="App">
            <Nav />
            <div className="app-wrapper">
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={location.pathname}
                        classNames="page-transition"
                        timeout={400}
                    >
                        <Routes location={location}>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/articles" element={<Articles />} />
                        </Routes>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
    );
}

export default App;
