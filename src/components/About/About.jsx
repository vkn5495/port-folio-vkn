import React from 'react'
import Info from './Info'
import { FaDownload } from 'react-icons/fa'
import CV from '../../img/vivek-naik-cv.pdf'
import Stats from './Stats'
import './About.css'
import Skills from './Skills'
import { resume } from '../../data/Data'
import Resume from './Resume'
import Animation from '../Animation/Animation'

const About = () => {
    return (
        <>
            <main className="section container">
                <Animation />
                <section className="about">
                    <h2 className="section_title">
                        about <span>me</span>
                    </h2>
                    <div className="about_container grid">
                        <div className="about_info">
                            <h3 className="secion_subtitle">personal infos</h3>
                            <ul className="info_list grid">
                                <Info />
                            </ul>
                            <a href={CV} download='' className="button">download CV {''}
                                <span className="button_icon"><FaDownload /></span></a>
                        </div>
                        <div className="stats grid">
                            <Stats />
                        </div>
                    </div>
                </section>
                <div className="seperator"></div>
                
                <section className="skills">
                    <h3 className="section_subtitle subtitle_center">my skills</h3>
                    <div className="skills_container grid">
                        <Skills />
                    </div>
                </section>
                <Animation />
                <div className="seperator"></div>
                <div className="resume">
                    <h3 className="section_subtitle subtitle_center">
                        experince & education
                    </h3>
                    <div className="resume_container grid">
                        <div className="resume_data">
                            {
                                resume.map((val, idx) => {
                                    if (val.category === 'experience') {
                                        return <Resume key={idx} val={val} />
                                    }
                                })
                            }
                        </div>
                        <div className="resume_data">
                            {
                                resume.map((val, idx) => {
                                    if (val.category === 'education') {
                                        return <Resume key={idx} val={val} />
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About
