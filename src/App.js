import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Articles from "./Components/Articles/Articles";

import "./App.css";
import Bars from "./Components/Common/Bars";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

function App() {
    let location = useLocation();
    return (
        <div className="App">
            <Nav />
            <div className="app-wrapper">
                <Bars />
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
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </CSSTransition>
                </SwitchTransition>
                <Bars bottom />
            </div>
        </div>
    );
}

export default App;
