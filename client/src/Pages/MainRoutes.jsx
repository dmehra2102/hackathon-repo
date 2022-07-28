import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Components/Home/About";
import Overview from "../Components/Home/Overview";
import { HomePages } from "./HomePages";
import Login from "./Login";
import Signup from "./Signup";


export const MainRoutes=()=>{

    return (
        <Routes>
            <Route path='/' element={<HomePages/>}>
                <Route path="/about"  element={<About/>}/>
                <Route path="/overview"  element={<Overview/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    )
}