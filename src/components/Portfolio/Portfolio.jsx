import React from 'react'
import './Portfolio.css'
import { portfolio } from '../../data/Data'
import PortfolioItem from './PortfolioItem'
import Animation from '../Animation/Animation'

const Portfolio = () => {
  return (
    <>
      <section className="portfolio section">
      <Animation />
        <h2 className="section_title">my <span>portfolio</span></h2>
        <div className="portfolio_container container grid">
          {
            portfolio.map((item,idx)=>{
              return <PortfolioItem key={idx} item={item}/>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Portfolio
