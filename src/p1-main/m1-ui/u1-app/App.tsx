import React from "react";
import s from "./App.module.css";
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
          </HashRouter>
        </div>
    );
}

export default App;
