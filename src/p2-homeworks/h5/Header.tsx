import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <div className={style.mainNav}>
               <div className={style.list}>
                        <div >
                            <NavLink activeClassName={style.active} to="/pre-junior">PreJunior</NavLink>
                        </div>
                        <div>
                            <NavLink activeClassName={style.active} to="/junior">Junior</NavLink>
                        </div>
                        <div>
                            <NavLink activeClassName={style.active} to="/junior-plus">JuniorPlus</NavLink>
                        </div>
                    </div>
                hover

            </div>

        </div>
    );
}

export default Header;
