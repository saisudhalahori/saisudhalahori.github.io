import React, { useState } from 'react'
import './HomeContainer.scss'

const HomeContainer = () => {
  const [show,setShow] = useState(false)
const handleClick = (e) => {
    setShow(prv=>!prv)
}
  return (
    <div className='HomeContainer'>
   <h1 className='home_heading'>Sustainable Options</h1>
   <p className='home_page'>“Environment and Energy Management Group” is a Bhopal based organisation working for promotion of bamboo based technologies for sustainable development, clean energy technologies for renewable energy generation and conservation of environment for over 20 years.
   {show && <span><br/>“Environment and Energy Management Group” is a Bhopal based organisation <br/>working for promotion of bamboo based technologies for sustainable<br/> development , clean energy technologies for renewable energy generation<br/> and conservation of environment for over 20 years.</span>}
   
   </p>
   <button className="btnbtn" onClick={handleClick}>{show ? "Read Less": "Read More"}</button>
        </div>

  )
}

export default HomeContainer
