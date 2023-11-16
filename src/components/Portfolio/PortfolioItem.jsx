import React, { useState } from 'react'
import close from '../../img/close.svg'

const PortfolioItem = ({item}) => {
  const details = item.details
  const [modal,setModal] = useState(false)
  const toggle = ( ) =>{
    setModal(!modal)
  }
  return (
    <>
      <div className="portfolio_item">
        <img src={item.img} alt="" className="portfolio_img" />
        <div className="portfolio_hover" onClick={toggle}>
            <h3 className="portfolio_title">{item.title}</h3>
        </div>
        {
          modal &&
          <div className="portfolio_modal">
            <div className="portfolio_modal_content">
                <img src={close} alt="" className="modal_close" onClick={toggle}/>
                <h3 className="model_title">{item.title}</h3>
                <ul className="modal_list grid">
                  {
                    details.map((detail,id)=>{
                      return(
                        <li className="modal_item" key={id}>
                          <span className="item_icon">{detail.icon}</span>
                          <div>
                            <span className="item_title">{detail.title}</span>
                            <span className="item_details">
                              <a href={detail.link}>{detail.desc}</a>
                            </span>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
                <img src={item.img} alt="" className="modal_img" />
            </div>
        </div>
        }
      </div>
    </>
  )
}

export default PortfolioItem
