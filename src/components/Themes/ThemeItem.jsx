import React from 'react'

const ThemeItem = ({theme,changeColor}) => {
  return (
    <>
    <img src={theme.img} alt="" className="theme_img"
     onClick={()=> changeColor(theme.color)}/>
    </>
  )
}

export default ThemeItem
