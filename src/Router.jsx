import React from "react";
import { Routes, Route } from "react-router-dom"; // 추가
import MainPage from './pages/Main/mainpage';
import Member from "./pages/Member/member";
import Ideal from "./pages/ideal/ideal";
import Achievement from "./pages/achievements/achievements";
import RecruitPage from "./pages/Member/recruit";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/member" element={<Member />} />
            <Route path="/ideal" element={<Ideal />}/>
            <Route path="/achievement" element={<Achievement />}/>
            <Route path="/recruit" element={<RecruitPage />}/>
        </Routes>
    );
}

export default Router;
