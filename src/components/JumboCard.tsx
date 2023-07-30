import React from "react"
import Header from "./Header"
import headerPic from '../assets/images/header-bg.png'


const JumboCard = () => {

  return (
    <div className=" bg-cover bg-center " style={{
      backgroundImage:
        `url(${headerPic})`,
      height: '49.5625rem'
    }}>
      <Header />
      <div className="flex flex-col justify-center items-center pt-36">
        <h1 className="jumbo-card__title">Hello World</h1>
        <p className="jumbo-card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>
        <button className="jumbo-card__button">Learn More</button>
      </div>
    </div>
  )
}

export default JumboCard