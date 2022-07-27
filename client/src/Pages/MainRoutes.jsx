import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePages } from "./HomePages";


export const MainRoutes=()=>{

    return (
        <Routes>
            <Route path='/' element={<HomePages/>}/>
        </Routes>
    )
}