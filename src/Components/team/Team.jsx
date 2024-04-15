import React from 'react'
import './Team.scss'
import Webnavbar from '../webnavbar/WebNavbar'
import WebFooter from '../webfooter/WebFooter'

const Team = () => {
  return (<>
    <Webnavbar />
    <div className='team'>
    <h1 className='heading1'>Our<span id='main_span'>Team</span><br/><img src="\leafimage.png" alt="" /></h1>

    <h2 className='heading2'>MR. Rahul Saksena, <span>(Chief Executive)</span></h2>
    <p>Bachelor Degree in Civil Engineering from SGSITS Indore,
working for promotion of clean energy technologies for renewable energy generation ,conservation of environment and promotion of bamboo based technologies for sustainable development for over 25 years.</p>
<h2 className='heading2'>MR. Dev Raghav Handa,<span>(Chief Operating Officer)</span></h2>
<p>Bachelor Degree in Chemical Engineering from Birla Institute of Technology and Science , Dubai Campus.
Worked with Total Solar for Three years.</p>
<h2 className='heading2'>MR. Bhavesh lahori,<span>(Project Manager)</span></h2>
<p>Bachelor Degree in Electronics Engineering from RGTU Bhopal,
About 12 years Professional Experience in Carbon Offset/Removal Projects, Energy Audit, Renewable Energy based projects Including biomass gasification, waste to energy, Solar energy, distributed generation, power plant operation & maintenance, preparation of detailed project report(DPR) for village electrification under DDG program of Govt of India.</p>
    </div>
     <WebFooter />
    </>
  )
}

export default Team
