import React, { useState } from 'react'
import './Biocharcontainer.scss'


const BiocharContainer = () => {
  const [show,setShow] = useState(false)
  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    setShow(prv=>!prv)
}
const secondhandleClick = (e) => {
  setOpen(prv=>!prv)
}
  return (
    <div className='biochar_container'>
<div className='biochar_div1'>
  <div className='parent'>
  <div className='bio_subdiv1'>
   <h1 className='bio_heading'><span>Organic Green Carbon</span><p> (Biochar)</p><br/><img src="\leafimage.png" alt="image" /></h1>
   <p className='bio_para'>1.ORGANIC GREEN CARBON IS A CARBON-RICH PRODUCT MADE FROM RENEWABLE AGRICULTURAL/WOODY BIOMASS WASTE RESIDUE. WE PRODUCE IT THROUGH GASIFICATION OF BAMBOO WASTE (HEATING IN THE ABSENCE OF OXYGEN) .IT CAN BE USED EITHER ALONE OR MIXED WITH ORGANIC ADDITIVES IN SUITABLE RATIO .IT ACTS AS A SUSTAINABLE AND PERMANENT SOIL AMENDMENT AGENT AND ALSO AS GROWING MEDIA FOR PLANTS. ORGANIC GREEN CARBON HAS TREMENDOUS POTENTIAL FOR WATER CONSERVATION IN AGRICULTURE AND HORTICULTURE ,SPECIALLY IN POLY HOUSES/GREEN HOUSES AND NEW PLANTATIONS . IT IS VERY USEFUL IN AREAS WHERE WATER IS SCARCE AND SOIL IS DEGRADED.IT IS A SOIL AMENDMENT THAT IS PLOWED-IN ONLY ONCE AND HAS A LASTING EFFECT FOR CENTURIES. ORGANIC GREEN CARBON ENHANCES SOIL FERTILITY BY STIMULATING BIOLOGICAL ACTIVITY, IMPROVING SOIL NUTRIENT AND WATER RETENTION, AND ALSO INCREASING SOIL ORGANIC MATTER.IT IS COMPLETELY SUSTAINABLE AS IT COMES FROM READILY AVAILABLE AND SUSTAINABLE BIOMASS WASTE. FURTHERMORE, THE CARBON IN THE ORGANIC GREEN CARBON BECOMES LOCKED UP IN THE SOIL, REMOVING CARBON FROM THE ATMOSPHERE AND FACILITATES CLIMATE CHANGE MITIGATION.
THE MAIN SCIENTIFICALLY APPROVED REASONS THAT ORGANIC CARBON AMENDMENTS HAVE RESULTED IN MEASURABLE IMPROVEMENTS IN SOIL PRODUCTIVITY ARE THAT IT: <br/>• REPAIRS DEGRADED SOILS ,RESISTS SOIL EROSION<br/>
• INCREASES YIELD BY 5 - 40%<br/>
• ENHANCES SOIL BIOLOGY (40% INCREASE IN MYCORRHIZAL FUNGI)<br/>
• IMPROVES NUTRIENT RETENTION IN SOILS (50% INCREASE IN CATION EXCHANGE CAPACITY)<br/>
• IMPROVES THE WATER RETENTION CAPACITY OF SOILS (UP TO 20 % INCREASE),THUS EFFECTIVELY REDUCES WATER REQUIRED FOR IRRIGATING THE SOIL FOR
CROP PRODUCTION <br/>• INCREASES SOIL ORGANIC MATTER<br/>
• FACILITATES REDUCTION OF NEED FOR CHEMICAL FERTILIZER ,THUS FURTHER REDUCING WATER REQUIRED FOR IRRIGATION<br/>
• IMPROVES SOIL DRAINAGE,FACILITATES MORE NEUTRAL PH<br/>
• REDUCED SOIL COMPACTION ,INCREASED NUTRIENT CYCLING<br/>
• GREATER RETENTION OF WATER IN DRY SOILS.<br/>
•  IMPROVES GERMINATION.<br/>
• IMPROVES PLANT RESISTANCE TO FUNGAL DISEASE, ROOT FEEDING NEMATODES AND INSECT INFESTATIONS
ANOTHER VERY IMPORTANT APPLICATION OF BIOCHAR IS AS AN AGENT FOR CLIMATE CHANGE MITIGATION.LARGE AMOUNTS OF FORESTRY AND AGRICULTURAL RESIDUES AND OTHER BIOMASS ARE CURRENTLY BURNED OR LEFT TO DECOMPOSE THEREBY RELEASING CARBON DIOXIDE (CO2) AND/OR METHANE (CH4)—TWO MAIN GREENHOUSE GASES (GHGS)—INTO THE ATMOSPHERE. UNDER BIOCHAR CONVERSION SCENARIOS, EASILY MINERALIZED CARBON COMPOUNDS IN BIOMASS ARE CONVERTED INTO FUSED CARBON RING STRUCTURES IN BIOCHAR AND PLACED IN SOILS WHERE THEY PERSIST FOR HUNDREDS OR THOUSANDS OF YEARS. WHEN DEPLOYED ON A GLOBAL SCALE THROUGH THE CONVERSION OF GIGATONNES OF BIOMASS INTO BIOCHAR, STUDIES HAVE SHOWN THAT BIOCHAR HAS THE POTENTIAL TO MITIGATE GLOBAL CLIMATE CHANGE BY DRAWING DOWN ATMOSPHERIC GHG CONCENTRATIONS . BIO CHAR ALSO IDENTIFIES AS CLIMATE CHANGE MITIGATION AGENT BY IPCC (INTERGOVERNMENTAL PANEL ON CLIMATE CHANGE). //EFFECT OF BIOCHAR ON DIFFERENT SOIL PROPERTIES.</p>
{show && <div><br/>
<table>
<tr>
    <th>Factore</th>
    <th>Impact</th>
    <th>Source</th>
  </tr>
  <tbody>
  <tr>
    <td>Cation exchange capacity</td>
    <td>50% increase</td>
    <td>(Glaser et al., 2002)</td>
  </tr>
  <tr>
    <td>Fertilizer use efficiency</td>
    <td>10-30 % increase</td>
    <td>(Gaunt and Cowie, 2009)</td>
  </tr>
  <tr>
    <td>Liming agent</td>
    <td>1 point pH increase</td>
    <td>(Lehman and Rondon, 2006)</td>
  </tr>
  <tr>
    <td>Soil moisture retention Up to 18 % increase (Tryon, 1948)</td>
    <td>Up to 18 % increase</td>
    <td>(Tryon, 1948)</td>
  </tr>
  <tr>
    <td>Productivity</td>
    <td>20-120% increase</td>
    <td>(Lehman and Rondon, 2006)</td>
  </tr>
  <tr>
    <td>Methane emission</td>
    <td>100% decrease (Rondon et al, 2005)</td>
    <td>(Rondon et al, 2005)</td>
  </tr>
  <tr>
    <td>Nitrous oxide emissions</td>
    <td>50 % decrease</td>
    <td>(Yanai et al., 2007)</td>
  </tr>
  <tr>
    <td>Bulk density Soil dependent</td>
    <td>Soil dependenttd</td>
    <td>(Laird, 2008)</td>
  </tr>
  <tr>
    <td>Mycorrhizal fungi</td>
    <td>40 % increase</td>
    <td>(Warnock et al., 2007)</td>
  </tr>
  <tr>
    <td>Biological nitrogen fixation</td>
    <td>50-72% increase</td>
    <td>(Lehman and Rondon, 2006)</td>
  </tr>

  </tbody>
  </table>
  </div>
  }
<button className='btnbtn newbtn' onClick={handleClick}>{show ? "Read Less": "Read More"}</button>
</div>

<div className='bio_subdiv2'>
<img className='bio_container_img bio_container_img1 ' src="\biochar4.jpg"  alt="image" /><br/>
<img className='bio_container_img bio_container_img2' src="\biocharimg3.jpg"  alt="image" />

</div>

  </div>
  
  {/* <button className='btnbtn newbtn' onClick={handleClick}>{show ? "Read Less": "Read More"}</button> */}
    

</div>
<div className='biochar_div1'>
  <div className='parent'>
  <div className='bio_subdiv1'>
  <h2 className='bio_heading'><span>Activated Charcoal </span><br/><img src="\leafimage.png" alt="image" /></h2>
   <p className='bio_para'>IT IS BASICALLY USED AS AN ABSORBANT AND DEODORIZER<br/>
• PHARMACEUTICALS & BULK DRUG INDUSTRIES.<br/>
• FERTILIZER UNITS & PETROLEUM REFINERIES AS A CATALYST CARRIER.<br/>
• PURIFICATION & DE-COLORIZATION OF PLASTICIZERS, GLYCERIN, PARAFFIN,WAXES, FINE<br/>
• CHEMICALS, DYES & INTERMEDIATES, ORGANIC ACID, GLUCOSE AND LACTOSE SOLUTIONS,<br/>
• DEODORIZATION OF GELATIN AND LIQUEFIED PETROLEUM JELLY.<br/>
• BLEACHING DEODORIZING OF VEGETABLE OIL, EDIBLE OIL & FATS.<br/>
• SUGAR INDUSTRIES & THERMAL AND NUCLEAR POWER STATION.<br/>
• BREWERIES AND WINE MAKING INDUSTRIES.<br/>
• POLLUTION CONTROL EQUIPMENT & ELECTRO PLATING CHEMICALS.<br/>
• FACE MASKS FOR AIR POLLUTION MITIGATION<br/>
• USE IN BEAUTY PRODUCTS<br/>
• USE IN FOOD PRODUCTS<br/>
• USE FOR INCREASING SHELF LIFE OF FRUITS AND VEGETABLES<br/>
• FOR REMOVING UNDESIRABLE COMPONENTS & COLOR CORRECTION IN ALL TYPES OF INDUSTRIES.
</p>
 {open && <div>
  <p className='bio_para'>
• Powdered Activated Carbon<br/>
• Granular Activated Carbon<br/>
• Other Activated Carbon<br/>
</p>
<h2>End Use</h2><br/>
<p className='bio_para'>
• Water Treatment<br/>
• Food & Beverage Processing<br/>
• Pharmaceutical & Medical<br/>
• Automotive<br/>
• Air purification<br/>
• Other End-Uses<br/>
</p>
</div>
} 
</div>

<div className='bio_subdiv2'>
{/* <button className='btnbtn newbtn' onClick={secondhandleClick}>{open ? "Read Less": "Read More"}</button> */}
<img className='bio_container_img' src="\biocharimg2.jpg" alt="" />

</div>

  </div>
  {/* <button className='btnbtn newbtn' onClick={handleClick}>{show ? "Read Less": "Read More"}</button> */}
    

</div>

<button className='btnbtn newbtn' onClick={secondhandleClick}>{open ? "Read Less": "Read More"}</button>
<div className='biochar_div1'>
  <div className='parent'>
  <div className='bio_subdiv1'>
  
<h1 className='bio_heading'><p id='product'>PRODUCT</p><span>Bamboo Charcoal</span> (Briquette)<br/><img src="\leafimage.png" alt="image" /></h1>
<p className='bio_para'>USED IN BIOMASS GASSIFIERS AS FUEL FOR THERMAL USE OR FOR ELECTRICITY PRODUCTION, BAMBOO CHARCOAL HAS A VERY HIGH CALORIFIC VALUE AND LOW ASH CONTENT AS COMPARED TO WOOD COAL.</p>

</div>

<div className='bio_subdiv2'>
<img className='bio_container_img bio_container_img3' src="\biocharproduct.jpg" alt="" />

</div>

</div>
  {/* <button className='btnbtn newbtn'>Read More</button> */}
    

</div>
  



        </div>
  )
}

export default BiocharContainer
