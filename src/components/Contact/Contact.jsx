import React from 'react'
import './Contact.css'
import { FaDribbble, FaEnvelopeOpen, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import Animation from '../Animation/Animation'

const Contact = () => {
    return (
        <>
            <section className="contact section">
            <Animation />
                <h2 className="section_title">get in <span>touch</span></h2>
                <div className="contact_container container grid">
                    <div className="contact_data">
                        <h3 className="contact_title">don't be shy !</h3>
                        <p className="contact_desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed at itaque doloremque. Numquam natus quisquam doloremque, temporibus culpa veniam, atque, pariatur ratione soluta rem nulla consectetur odio praesentium voluptatibus itaque!
                        </p>
                        <div className="contact_info">
                            <div className="info_item">
                                <FaEnvelopeOpen className='info_icon' />
                                <div>
                                    <span className="info_title">mail me</span>
                                    <h4 className="info_desc">vkn5495@gmail.com</h4>
                                </div>
                            </div>
                            <div className="info_item">
                                <FaEnvelopeOpen className='info_icon' />
                                <div>
                                    <span className="info_title">call me</span>
                                    <h4 className="info_desc">+91 8880881814</h4>
                                </div>
                            </div>
                            <div className="contact_socails">
                                <a href="https://facebook.com" className="contact_social_link">
                                    <FaFacebook />
                                </a>
                                <a href="https://twitter.com" className="contact_social_link">
                                    <FaTwitter />
                                </a>
                                <a href="https://youube.com" className="contact_social_link">
                                    <FaYoutube />
                                </a>
                                <a href="https://dribble.com" className="contact_social_link">
                                    <FaDribbble />
                                </a>
                            </div>
                        </div>
                    </div>
                    <form className="contact_form">
                        <div className="form_input_group">
                            <div className="from_input_div">
                                <input type="text" placeholder='your name' className="form_control" />
                            </div>
                            <div className="from_input_div">
                                <input type="email" placeholder='your email' className="form_control" />
                            </div>
                        </div>
                        <div className="from_input_div">
                            <textarea placeholder='your message' className='form_control textarea'></textarea>
                        </div>
                        <button className="button">
                            send message
                            <span className="button_icon contact_button_icon">
                                <FiSend />
                            </span>
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
