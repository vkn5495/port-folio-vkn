import React, { useEffect, useState } from 'react'
import './Theme.css'
import { FaCog } from 'react-icons/fa'
import {BsMoon, BsSun} from 'react-icons/bs'
import { themes } from '../../data/Data'
import ThemeItem from './ThemeItem'

const getStorageColor = () =>{
    let color = '#4169e1';
    if(localStorage.getItem('color')){
        color = localStorage.getItem('color')
    }
    return color
}

const getStorageTheme = () =>{
    let theme = 'light-theme';
    if(localStorage.getItem('theme')){
        theme = localStorage.getItem('theme')
    }
    return theme
}

const Theme = () => {
    const [showSwitch,seyShowSwitch] = useState(false)
    const [color,setColor] = useState(getStorageColor())
    const [theme,setTheme] = useState(getStorageTheme())

    const changeColor = (color) =>{
        setColor(color)
    }

    const toggleTheme = () =>{
        if(theme === 'light-theme'){
            setTheme('dark_theme')
        }
        else{
            setTheme('light-theme')
        }}

    useEffect(()=>{
        document.documentElement.style.setProperty('--first-color',color);
        document.documentElement.classList = theme;
        localStorage.setItem('color',color)
    },[color]);

    useEffect(()=>{
        document.documentElement.classList = theme;
        localStorage.setItem('theme',theme)
    },[theme]);

    return (
        <>
            <div>
                <div className={showSwitch ?'style_switcher show_switcher' : "style_switcher"}>
                    <div className="style_switcher_toggler" onClick={()=> seyShowSwitch(!showSwitch)}>
                        <FaCog />
                    </div>
                    <div className="theme_toggler" onClick={toggleTheme}>
                        {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                    </div>
                    <h3 className="style_switcher_title">style switcher</h3>
                    <div className="style_switcher_item">
                        {
                            themes.map((theme,ix)=>{
                                return <ThemeItem key={ix} theme={theme} changeColor={changeColor}/>
                            })
                        }
                    </div>
                    <div className="style_switcher_close"
                    onClick={()=> seyShowSwitch(!showSwitch)}>&times;</div>
                </div>
            </div>
        </>
    )
}

export default Theme
