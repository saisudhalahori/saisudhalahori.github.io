import React, { useState } from 'react'
import './Servicecontainer.scss'
import { Link } from 'react-router-dom'


const Servicecontainer = () => {
  const [open, setOpen] = useState(false)
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const handleClick = (section) => {
    switch (section) {
      case 'first':
        setShowFirst(prevState => !prevState);
        break;
      case 'second':
        setShowSecond(prevState => !prevState);
        break;
      case 'third':
        setShowThird(prevState => !prevState);
        break;
      default:
        break;
    }
  };

  return (
    <>
 
    <div className='service_main_comtainer'>
      <div className='left'>
        <img src='\Screenshot_20240423_011142.jpg' />
        </div>
   
    <div className='right'>    
      <h1>
Offering a comprehensive strategy to combat climate change from all angles!</h1>
<p>
Explore the full spectrum of services we offer for a comprehensive <br/> experience.</p>

<button className='btnbtn'><Link to="http://localhost:5173/#/">Reach us</Link></button>
</div>
</div>

{/* //////////////////////////////////////////////////////////////////////// */}
<div className='services-container'>
  <div className='content-data'>
  <h1 className='service_heading1'><span>Our services</span><br/> <img className='service_cntainer_image'  src="\leafimage.png" alt="" /></h1>
  <h2 className='service_heading2'>services for carbon footprint mapping, science based net zero carbon emission
targets and development of nature based carbon offset projects for meeting them through facilitation of carbon
credits.
</h2>
  <p className='service_para'>Sustainable Options is a Bhopal, Madhya Pradesh, India based organization working for promotion of clean energy
technologies for renewable energy generation, conservation of environment and promotion of bamboo basedtechnologies for sustainable development for over 30 years. We provide consultancy services for carbon footprint
mapping , carbon offset projects for climate change mitigation ,facilitation of carbon credits , power generation
from clean and renewable sources of energy such as bamboo gasification & combustion, small hydro power, solar
photo voltaic power systems, wind power , production of green hydrogen and alternative fuels for replacing fossil
fuels.</p>
{showFirst && <div>
<h2 className='service_heading2'>We provide the following services:</h2>
<p className='service_para'>- Carbon footprint assessment , ESG reporting ,nature based solutions and science based targets for net zero
emissions and Climate Change Mitigation Advisory.<br/>
- Facilitating establishment of net zero emission targets.<br/>
- Development of plantation based biomass supply chain for assured supply of alternate fuel for
replacement of coal.<br/>

- Planning & implementation of carbon offset projects for net zero carbon emissions and carbon footprint
reduction.<br/>
- Facilitating production and use of Bamboo Biochar for soil amendment and for replacement of pet coke in
steel / cement manufacturing.<br/>
- Decarbonisation of manufacturing processes in steel , Cement , chemical and textile sectors.<br/>
- Preparation of feasibility reports and detailed project reports for clean power generation from biomass
gasification, solar PV and compressed biogas from waste.<br/>
- Consulting services for production of green hydrogen.<br/>
- Industrial Pollution Control and Environment Monitoring and Management.<br/>
- Environment Impact Assessment and Hazardous waste management.<br/>
- Hydrological and Meteorological studiesfor thermal power plants.<br/>
- Supply of appropriate biomass to replace coal.<br/>
- Facilitation of carbon credits from fuel switch and plantations/nature based solutions.<br/>
- Resettlement and Rehabilitation studies.<br/>
- Energy transition strategies.<br/>
- Energy Audits for energy conservation.<br/>
- Facilitation of bamboo plantation on degraded forest / waste land for biomass fuel.</p>

<p className='service_para'>With reference to our discussion in your office on 6.02.2024 ,we are pleased to offer our consulting services for
carbon footprint mapping , science based targets for net zero emissions , nature based solutions and other
activities for meeting these targets , ESR reporting and Climate Change Mitigation Advisory for various units of
the Vardhman Group. This would cover all aspects of energy consumption patterns and usage , water consumption
and efficiency of various processes including waste treatment , opportunities of recycling & energy recovery and
any other area which may require intervention from carbon footprint perspective .</p>

<p className='service_para'>We also offer our services for facilitation of carbon credits for your existing and new Solar PV based power plants.
This would involve survey, analysis and the necessary documentation (project concept note ,baseline study report
and the PDD) , submission of these to the appropriate platform for processing and follow-up for ensuring all
process compliance for final issuance of verified carbon credits. Besides this, your existing plantations which have
proper records of time of plantation and species, are also eligible for carbon credits and we offer our services for
facilitation of carbon credits for them as well. All these verified carbon credits that can be accrued to you would be
vital for meeting your net zero carbon emission targets and a better ESG rating..
</p>
</div>
}
<button className='btnbtn newbtn' onClick={() => handleClick('first')}>{showFirst ? "Read Less": "Read More"}</button>
  </div>


  <div className='content-image'>
<img src="\form.jpg" className="img1" alt="" />
<img src="\biocharimg3.jpg"  className="img2"  alt="" />
<img src="\biochar4.jpg"  className="img3" alt="" />
  </div>

</div>

    {/* //////////second para////////////// */}
    <div className='services-container'>
    <div className='content-image'>
<img src="\form.jpg" className="img1" alt="" />
<img src="\biocharimg3.jpg"  className="img2"  alt="" />
<img src="\biochar4.jpg"  className="img3" alt="" />
  </div>
  <div className='content-data'>
  <h1 className='service_heading1'><span>Our services</span><br/> <img className='service_cntainer_image'  src="\leafimage.png" alt="" /></h1>
  <h2 className='service_heading2'>services for carbon footprint mapping, science based net zero carbon emission
targets and development of nature based carbon offset projects for meeting them through facilitation of carbon
credits.
</h2>
  <p className='service_para'>Sustainable Options is a Bhopal, Madhya Pradesh, India based organization working for promotion of clean energy
technologies for renewable energy generation, conservation of environment and promotion of bamboo basedtechnologies for sustainable development for over 30 years. We provide consultancy services for carbon footprint
mapping , carbon offset projects for climate change mitigation ,facilitation of carbon credits , power generation
from clean and renewable sources of energy such as bamboo gasification & combustion, small hydro power, solar
photo voltaic power systems, wind power , production of green hydrogen and alternative fuels for replacing fossil
fuels.</p>
{showSecond && <div>
<h2 className='service_heading2'>We provide the following services:</h2>
<p className='service_para'>- Carbon footprint assessment , ESG reporting ,nature based solutions and science based targets for net zero
emissions and Climate Change Mitigation Advisory.<br/>
- Facilitating establishment of net zero emission targets.<br/>
- Development of plantation based biomass supply chain for assured supply of alternate fuel for
replacement of coal.<br/>

- Planning & implementation of carbon offset projects for net zero carbon emissions and carbon footprint
reduction.<br/>
- Facilitating production and use of Bamboo Biochar for soil amendment and for replacement of pet coke in
steel / cement manufacturing.<br/>
- Decarbonisation of manufacturing processes in steel , Cement , chemical and textile sectors.<br/>
- Preparation of feasibility reports and detailed project reports for clean power generation from biomass
gasification, solar PV and compressed biogas from waste.<br/>
- Consulting services for production of green hydrogen.<br/>
- Industrial Pollution Control and Environment Monitoring and Management.<br/>
- Environment Impact Assessment and Hazardous waste management.<br/>
- Hydrological and Meteorological studiesfor thermal power plants.<br/>
- Supply of appropriate biomass to replace coal.<br/>
- Facilitation of carbon credits from fuel switch and plantations/nature based solutions.<br/>
- Resettlement and Rehabilitation studies.<br/>
- Energy transition strategies.<br/>
- Energy Audits for energy conservation.<br/>
- Facilitation of bamboo plantation on degraded forest / waste land for biomass fuel.</p>

<p className='service_para'>With reference to our discussion in your office on 6.02.2024 ,we are pleased to offer our consulting services for
carbon footprint mapping , science based targets for net zero emissions , nature based solutions and other
activities for meeting these targets , ESR reporting and Climate Change Mitigation Advisory for various units of
the Vardhman Group. This would cover all aspects of energy consumption patterns and usage , water consumption
and efficiency of various processes including waste treatment , opportunities of recycling & energy recovery and
any other area which may require intervention from carbon footprint perspective .</p>

<p className='service_para'>We also offer our services for facilitation of carbon credits for your existing and new Solar PV based power plants.
This would involve survey, analysis and the necessary documentation (project concept note ,baseline study report
and the PDD) , submission of these to the appropriate platform for processing and follow-up for ensuring all
process compliance for final issuance of verified carbon credits. Besides this, your existing plantations which have
proper records of time of plantation and species, are also eligible for carbon credits and we offer our services for
facilitation of carbon credits for them as well. All these verified carbon credits that can be accrued to you would be
vital for meeting your net zero carbon emission targets and a better ESG rating..
</p>
</div>
}
<button className='btnbtn newbtn' onClick={() => handleClick('second')}>{showSecond ? "Read Less": "Read More"}</button>
  </div>


</div>
{/* ///////////////////////third para///////////////// */}

<div className='services-container'>
  <div className='content-data'>
  <h1 className='service_heading1'><span>Our services</span><br/> <img className='service_cntainer_image'  src="\leafimage.png" alt="" /></h1>
  <h2 className='service_heading2'>services for carbon footprint mapping, science based net zero carbon emission
targets and development of nature based carbon offset projects for meeting them through facilitation of carbon
credits.
</h2>
  <p className='service_para'>Sustainable Options is a Bhopal, Madhya Pradesh, India based organization working for promotion of clean energy
technologies for renewable energy generation, conservation of environment and promotion of bamboo basedtechnologies for sustainable development for over 30 years. We provide consultancy services for carbon footprint
mapping , carbon offset projects for climate change mitigation ,facilitation of carbon credits , power generation
from clean and renewable sources of energy such as bamboo gasification & combustion, small hydro power, solar
photo voltaic power systems, wind power , production of green hydrogen and alternative fuels for replacing fossil
fuels.</p>
{showThird && <div>
<h2 className='service_heading2'>We provide the following services:</h2>
<p className='service_para'>- Carbon footprint assessment , ESG reporting ,nature based solutions and science based targets for net zero
emissions and Climate Change Mitigation Advisory.<br/>
- Facilitating establishment of net zero emission targets.<br/>
- Development of plantation based biomass supply chain for assured supply of alternate fuel for
replacement of coal.<br/>

- Planning & implementation of carbon offset projects for net zero carbon emissions and carbon footprint
reduction.<br/>
- Facilitating production and use of Bamboo Biochar for soil amendment and for replacement of pet coke in
steel / cement manufacturing.<br/>
- Decarbonisation of manufacturing processes in steel , Cement , chemical and textile sectors.<br/>
- Preparation of feasibility reports and detailed project reports for clean power generation from biomass
gasification, solar PV and compressed biogas from waste.<br/>
- Consulting services for production of green hydrogen.<br/>
- Industrial Pollution Control and Environment Monitoring and Management.<br/>
- Environment Impact Assessment and Hazardous waste management.<br/>
- Hydrological and Meteorological studiesfor thermal power plants.<br/>
- Supply of appropriate biomass to replace coal.<br/>
- Facilitation of carbon credits from fuel switch and plantations/nature based solutions.<br/>
- Resettlement and Rehabilitation studies.<br/>
- Energy transition strategies.<br/>
- Energy Audits for energy conservation.<br/>
- Facilitation of bamboo plantation on degraded forest / waste land for biomass fuel.</p>

<p className='service_para'>With reference to our discussion in your office on 6.02.2024 ,we are pleased to offer our consulting services for
carbon footprint mapping , science based targets for net zero emissions , nature based solutions and other
activities for meeting these targets , ESR reporting and Climate Change Mitigation Advisory for various units of
the Vardhman Group. This would cover all aspects of energy consumption patterns and usage , water consumption
and efficiency of various processes including waste treatment , opportunities of recycling & energy recovery and
any other area which may require intervention from carbon footprint perspective .</p>

<p className='service_para'>We also offer our services for facilitation of carbon credits for your existing and new Solar PV based power plants.
This would involve survey, analysis and the necessary documentation (project concept note ,baseline study report
and the PDD) , submission of these to the appropriate platform for processing and follow-up for ensuring all
process compliance for final issuance of verified carbon credits. Besides this, your existing plantations which have
proper records of time of plantation and species, are also eligible for carbon credits and we offer our services for
facilitation of carbon credits for them as well. All these verified carbon credits that can be accrued to you would be
vital for meeting your net zero carbon emission targets and a better ESG rating..
</p>
</div>
}
<button className='btnbtn newbtn' onClick={() => handleClick('third')}>{showThird ? "Read Less": "Read More"}</button>
  </div>


  
 

  <div className='content-image'>
<img src="\form.jpg" className="img1" alt="" />
<img src="\biocharimg3.jpg"  className="img2"  alt="" />
<img src="\biochar4.jpg"  className="img3" alt="" />
  </div>

</div>
   
   </>
  )
}

export default Servicecontainer

