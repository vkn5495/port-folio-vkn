import React from 'react'
import './Animation.css'

const Animation = () => {
  return (
    <>
      <div className="animation">
        <div className="animation_content">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <div className='ty' style={{position:'relative',
          width:'100%',
          height:'100%'}}>
              <div className='under'></div>
            </div>
          </span>
          <span></span>
        </div>
      </div>
    </>
  )
}

export default Animation
