import React from "react";
import { Routes, Route } from "react-router-dom"; // 추가
import MainPage from './Main/mainpage';
import Introduce from './Introduce/introducePage'
function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/introduce" element={<Introduce />}/>
        </Routes>
    );
}

export default Router;
