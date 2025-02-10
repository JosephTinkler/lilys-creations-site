import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Portfolio from "./portfolio"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact/>} />

        </Routes>
    );
};

export default App;
