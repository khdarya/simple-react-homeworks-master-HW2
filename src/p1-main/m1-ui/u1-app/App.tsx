import React from "react";
import s from "./App.module.css";
import HW1 from "../../../p2-homeworks/h1/HW1";
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW4 from "../../../p2-homeworks/h4/HW4";
import {HashRouter} from "react-router-dom";
import Header from "../../../p2-homeworks/h5/Header";
import Routes from "../../../p2-homeworks/h5/Routes";

function App() {
    return (

        <div className={s.App}>
           <HashRouter>
               <Header />
            <div>react homeworks:</div>
            <Routes />
        {/*    <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>*/}

          </HashRouter>
        </div>
    );
}

export default App;
