// Composant de gestion de la navigation avec menu lateral
import React, {useEffect, useState} from 'react';
import "./Sidebar.css"
import LogoEdit from "./ImgsSidebar/edit.svg"
import FolderIcon from "./ImgsSidebar/folder.svg"
import Tools from "./ImgsSidebar/settings.svg"
import Menu from "./ImgsSidebar/menu.svg"
import {Link} from "react-router-dom";
import SideNotes from "../SideNotes/SideNotes";

function Sidebar(props) {
    // state de gestion de la largeur de l'ecran
    const [checkWidth, setCheckWidth] = useState(window.innerWidth);
    // Fonction d'ajustement de la valeur du state lors de la modification de la largeur de l'ecran
    const checkWidthFunc = () => {
        setCheckWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', checkWidthFunc)

        return () => {
            window.removeEventListener('resize', checkWidthFunc)
        }
    }, []);
    // state de gestion de l'apparition du boutton de navigation
    const [toggleNav, setToggleNav] = useState(false)

    const toggleNavFunc = () => {
        setToggleNav(!toggleNav)
    }

    return (
        <>
            {checkWidth < 900 && (
                <button onClick={toggleNavFunc} className="toggle-nav-btn">
                    <img src={Menu} alt="menu icon"/>
                </button>
            )}

            <nav className={toggleNav ? "container-sidebar visible-nav" : "container-sidebar"}>
                <div className="sidebar">
                    <div className="three-dots">
                        <div className="dot-nav d-red"></div>
                        <div className="dot-nav d-yellow"></div>
                        <div className="dot-nav d-green"></div>
                    </div>

                    <ul>
                        <Link to="/">
                            <li>
                                <img src={FolderIcon} alt="logo folder"/>
                            </li>
                        </Link>
                        <Link to="/edit">
                            <li>
                                <img src={LogoEdit} alt="logo edit"/>
                            </li>
                        </Link>
                        <li>
                            <img src={Tools} alt="logo tools"/>
                        </li>
                    </ul>
                </div>

                <SideNotes />
            </nav>
        </>
    );
}

export default Sidebar;