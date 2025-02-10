import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import portfolio from "./portfolio"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<portfolio />} />
            <Route path="/" element={<Home />} />

        </Routes>
    );
};

export default App;
