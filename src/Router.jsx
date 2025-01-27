import React from "react";
import { Routes, Route } from "react-router-dom"; // 추가
import MainPage from './Main/mainpage';
import Introduce from './Introduce/introducePage'
import Member from "./Member/member";
import Ideal from "./ideal/ideal";
import Achievement from "./achievements/achievements";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/introduce" element={<Introduce />}/>
            <Route path="/member" element={<Member />} />
            <Route path="/ideal" element={<Ideal />}/>
            <Route path="/achievement" element={<Achievement />}/>
        </Routes>
    );
}

export default Router;
