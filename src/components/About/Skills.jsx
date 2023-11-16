import React from 'react'
import { skills } from '../../data/Data'
import { CircularProgressbar } from 'react-circular-progressbar';

const Skills = () => {
    return (
        <>
            {
                skills.map((skill, idx) => {
                    return (
                        <div className="progress_box" key={idx}>
                            <div className="progress_circle">
                                <CircularProgressbar
                                    strokeWidth={7.5}
                                    text={`${skill.percentage}%`}
                                    value={skill.percentage} 
                                    />
                            </div>
                            <div className="h3 skills_title">{skill.title}</div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Skills
