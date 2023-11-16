import React from 'react'
import { PersonalInfo } from '../../data/Data'

const Info = () => {
  return (
    <>
      {
        PersonalInfo.map((detail,idx)=>{
            return(
                <p className="infi_item" key={idx}>
                    <span className="info_title">{detail.title}</span>
                    <span className="info_desc">{detail.description}</span>
                </p>
            )
        })
      }
    </>
  )
}

export default Info
