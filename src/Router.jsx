import React from "react";
import { Routes, Route } from "react-router-dom"; // 추가
import MainPage from './Main/mainpage';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
}

export default Router;
