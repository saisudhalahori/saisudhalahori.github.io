import React from 'react'
import './AboutUs.scss'
import WebNavbar from '../../Components/webnavbar/WebNavbar'

import WebFooter from '../../Components/webfooter/WebFooter'

import AboutusContainer from '../../Components/AboutusContainer/AboutusContainer'
const AboutUs = () => {
  return (
<>
     
    
       <WebNavbar />
      <AboutusContainer />
       <div className='aboutus-details'>
       
    <h1>Who we are <br/> <img className='service_cntainer_image'  src="./leafimage.png" alt="" /></h1>
    <p>
     Sustainable Options is a Bhopal, Madhya Pradesh, India based organization working for promotion of clean energy

technologies for renewable energy generation, conservation of environment and promotion of bamboo based-
technologies for sustainable development for over 30 years. We provide consultancy services for carbon footprint

mapping , carbon offset projects for climate change mitigation ,facilitation of carbon credits , power generation
from clean and renewable sources of energy such as bamboo gasification & combustion, small hydro power, solar
photo voltaic power systems, wind power , production of green hydrogen and alternative fuels for replacing fossil
fuels.
</p>
<p>
We provide the following services:<br/>
- Carbon footprint assessment , ESG reporting ,nature based solutions and science based targets for net zero
emissions and Climate Change Mitigation Advisory<br/>
- Facilitating establishment of net zero emission targets<br/>
- Development of plantation based biomass supply chain for assured supply of alternate fuel for
replacement of coal<br/>
- Planning & implementation of carbon offset projects for net zero carbon emissions and carbon footprint
reduction<br/>
- Facilitating production and use of Bamboo Biochar for soil amendment and for replacement of pet coke in
steel / cement manufacturing<br/>
- Decarbonisation of manufacturing processes in steel , Cement , chemical and textile sectors<br/>
- Preparation of feasibility reports and detailed project reports for clean power generation from biomass
gasification, solar PV and compressed biogas from waste.<br/>
- Consulting services for production of green hydrogen.<br/><br/>
- Industrial Pollution Control and Environment Monitoring and Management.<br/>
- Environment Impact Assessment and Hazardous waste management.<br/>
- Hydrological and Meteorological studiesfor thermal power plants.<br/>
- Supply of appropriate biomass to replace coal.<br/>
- Facilitation of carbon credits from fuel switch and plantations/nature based solutions.<br/>
- Resettlement and Rehabilitation studies.<br/>
- Energy transition strategies.<br/>
- Energy Audits for energy conservation.<br/>
- Facilitation of bamboo plantation on degraded forest / waste land for biomass fuel.<br/>

With reference to our discussion in your office on 6.02.2024 ,we are pleased to offer our consulting services for
carbon footprint mapping , science based targets for net zero emissions , nature based solutions and other
activities for meeting these targets , ESR reporting and Climate Change Mitigation Advisory for various units of
the Vardhman Group. This would cover all aspects of energy consumption patterns and usage , water consumption
and efficiency of various processes including waste treatment , opportunities of recycling & energy recovery and
any other area which may require intervention from carbon footprint perspective .
We also offer our services for facilitation of carbon credits for your existing and new Solar PV based power plants.
This would involve survey, analysis and the necessary documentation (project concept note ,baseline study report
and the PDD) , submission of these to the appropriate platform for processing and follow-up for ensuring all
process compliance for final issuance of verified carbon credits. Besides this, your existing plantations which have
proper records of time of plantation and species, are also eligible for carbon credits and we offer our services for
facilitation of carbon credits for them as well. All these verified carbon credits that can be accrued to you would be
vital for meeting your net zero carbon emission targets and a better ESG rating..
</p>
      
       </div>
      <WebFooter />
      </>
        
  )
}

export default AboutUs
