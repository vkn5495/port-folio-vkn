import React, { useState } from 'react'
import { Links } from '../../data/Data'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {IoClose} from 'react-icons/io5'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <div className="nav">
                <div className={showMenu ? 'show_menu' : "nav_menu"}>
                    <ul className="nav_list">
                        {
                            Links.map((link, index) => {
                                return (
                                    <li className="nav_item" key={index}>
                                        <NavLink to={link.path} className={({ isActive }) => isActive ?
                                            'nav_link active_nav' : 'nav_link'}>
                                            <span className="nav_icon">{link.icon}</span>
                                            <h3 className="nav_name">{link.name}</h3>
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="nav_toggle"
                    onClick={() => setShowMenu(!showMenu)}>{showMenu ?
                        <IoClose/> : <AiOutlineMenuUnfold />}</div>
            </div>
        </>
    )
}

export default Navbar
