import React from 'react'
import parse from 'html-react-parser'

const Resume = ({val}) => {
  return (
    <>
      <div className="resume_item">
        <div className="resume_icon">{val.icon}</div>
        <span className="resume_date">{val.year}</span>
        <h3 className="resume_subtitle">{parse(val.title)}</h3>
        <p className="resume_desc">{val.desc}</p>
      </div>
    </>
  )
}

export default Resume
