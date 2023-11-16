import React from 'react'
import { Status } from '../../data/Data'
import parse from 'html-react-parser'

const Stats = () => {
  return (
    <>
      {
        Status.map((detail,idx)=>{
            return(
                <div className="stats_box" key={idx}>
                    <h3 className="stats_no">{detail.no}</h3>
                    <p className="stats_title">{parse(detail.title)}</p>
                </div>
            )
        })
      }
    </>
  )
}

export default Stats
