
import React, { useState } from 'react'
import './Biocharcontainer.scss'


const BiocharContainer = () => {
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [forth, setForth] = useState(false)


  const handleClick = (section) => {
    switch (section) {
      case 'first':
        setFirst(prevState => !prevState);
        break;
      case 'second':
        setSecond(prevState => !prevState);
        break;
      case 'third':
        setThird(prevState => !prevState);
        break;
        case 'forth':
          setForth(prevState => !prevState);
          break;
      default:
        break;
    }
  };

  return (
    <>
    <div className='biochar_main'>
    <div className='biochar_container'>
    <div className="container_part1">
     <h1 className="heading"><span>Organic Green Carbon</span><h4> (Biochar)</h4><img src="\leafimage.png" alt="image" /></h1>
    <p className="paragraph">1.ORGANIC GREEN CARBON IS A CARBON-RICH PRODUCT MADE FROM RENEWABLE AGRICULTURAL/WOODY BIOMASS WASTE RESIDUE. WE PRODUCE IT THROUGH GASIFICATION OF BAMBOO WASTE (HEATING IN THE ABSENCE OF OXYGEN) .IT CAN BE USED EITHER ALONE OR MIXED WITH ORGANIC ADDITIVES IN SUITABLE RATIO .IT ACTS AS A SUSTAINABLE AND PERMANENT SOIL AMENDMENT AGENT AND ALSO AS GROWING MEDIA FOR PLANTS. ORGANIC GREEN CARBON HAS TREMENDOUS POTENTIAL FOR WATER CONSERVATION IN AGRICULTURE AND HORTICULTURE ,SPECIALLY IN POLY HOUSES/GREEN HOUSES AND NEW PLANTATIONS . IT IS VERY USEFUL IN AREAS WHERE WATER IS SCARCE AND SOIL IS DEGRADED.IT IS A SOIL AMENDMENT THAT IS PLOWED-IN ONLY ONCE AND HAS A LASTING EFFECT FOR CENTURIES. ORGANIC GREEN CARBON ENHANCES SOIL FERTILITY BY STIMULATING BIOLOGICAL ACTIVITY, IMPROVING SOIL NUTRIENT AND WATER RETENTION, AND ALSO INCREASING SOIL ORGANIC MATTER.IT IS COMPLETELY SUSTAINABLE AS IT COMES FROM READILY AVAILABLE AND SUSTAINABLE BIOMASS WASTE. FURTHERMORE, THE CARBON IN THE ORGANIC GREEN CARBON BECOMES LOCKED UP IN THE SOIL, REMOVING CARBON FROM THE ATMOSPHERE AND FACILITATES CLIMATE CHANGE MITIGATION.
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
ANOTHER VERY IMPORTANT APPLICATION OF BIOCHAR IS AS AN AGENT FOR CLIMATE CHANGE MITIGATION.LARGE AMOUNTS OF FORESTRY AND AGRICULTURAL RESIDUES AND OTHER BIOMASS ARE CURRENTLY BURNED OR LEFT TO DECOMPOSE THEREBY RELEASING CARBON DIOXIDE (CO2) AND/OR METHANE (CH4)—TWO MAIN GREENHOUSE GASES (GHGS)—INTO THE ATMOSPHERE. UNDER BIOCHAR CONVERSION SCENARIOS, EASILY MINERALIZED CARBON COMPOUNDS IN BIOMASS ARE CONVERTED INTO FUSED CARBON RING STRUCTURES IN BIOCHAR AND PLACED IN SOILS WHERE THEY PERSIST FOR HUNDREDS OR THOUSANDS OF YEARS. WHEN DEPLOYED ON A GLOBAL SCALE THROUGH THE CONVERSION OF GIGATONNES OF BIOMASS INTO BIOCHAR, STUDIES HAVE SHOWN THAT BIOCHAR HAS THE POTENTIAL TO MITIGATE GLOBAL CLIMATE CHANGE BY DRAWING DOWN ATMOSPHERIC GHG CONCENTRATIONS . BIO CHAR ALSO IDENTIFIES AS CLIMATE CHANGE MITIGATION AGENT BY IPCC (INTERGOVERNMENTAL PANEL ON CLIMATE CHANGE). //EFFECT OF BIOCHAR ON DIFFERENT SOIL PROPERTIES</p>
{first && <div><br/>
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
   
   <button className='btnbtn newbtn' onClick={() => handleClick('first')}>{first ? "Read Less": "Read More"}</button>
    </div>

    <div className="container_part2">
    <img className='bio_container_img bio_container_img1 ' src="\biochar4.jpg"  alt="image" /><br/>
    <img className='bio_container_img bio_container_img2' src="\biocharimg3.jpg"  alt="image" />
    </div>
    </div>
{/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
    
<div className='biochar_container'>

<div className="container_part2">
<img className='bio_container_img bio_container_img1 ' src="\biocharimg2.jpg"  alt="image" /><br/>
{/* <img className='bio_container_img bio_container_img2' src="\biocharimg3.jpg"  alt="image" /> */}
</div>
<div className="container_part1">
 <h1 className="heading"><span>Activated Charcoal </span><br/><img src="\leafimage.png" alt="image" /></h1>
<p className="paragraph">IT IS BASICALLY USED AS AN ABSORBANT AND DEODORIZER<br/>
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
 {second && <div>
  <p className='bio_para'>
  
• Powdered Activated Carbon<br/>
• Granular Activated Carbon<br/>
• Other Activated Carbon<br/>
</p>
<br/>
<h2>End Use</h2>
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
<button className='btnbtn newbtn' onClick={() => handleClick('second')}>{second ? "Read Less": "Read More"}</button>
</div>

</div>
{/* ////////////////////////////////////////////////////////////////////////////////// */}
<div className='biochar_container'>
    <div className="container_part1">
     <h1 className="heading"><span>Bamboo  Biochar  Obtained from Gasification of Bamboo Process Waste</span>
     <br/><img src="\leafimage.png" alt="image" /></h1>
    <p className="paragraph">Biochar is a carbon-rich, fine-grained residue which can be produced either by ancient techniques (such as covering burning biomass with soil and allowing it to smoulder) or state-of-the-art modern biomass gasification/ pyrolysis processes. 
Combustion and decomposition of woody biomass and agricultural residues results in the emission of a large amount of carbon dioxide, where as Gasification / pyrolysis of such biomass would convert it to Biochar which when applied to soil can store this CO2 in the soil leading to reduction in GHGs emission and enhancement of soil fertility. 
Biochar holds the promise to tackle chronic human development issues like hunger and food insecurity, low agricultural productivity and soil depletion, deforestation and biodiversity loss, energy poverty, water pollution, air pollution and climate change.
</p>
{third && <div><br/>

Biochar is a carbon-rich product made from renewable agricultural/woody biomass  waste residue.We  produce it  through  gasification of bamboo waste  (heating in the absence of oxygen) .
It can be used either alone or  mixed with organic additives in suitable ratio .
It acts as a sustainable and permanent soil amendment agent and also as growing media for plants.  
Biochar has tremendous potential for water conservation in plantations ,agriculture and  horticulture ,specially  in poly houses/green houses  and new plantations . 
It is very useful in areas where water is scarce and soil is degraded. It is a soil amendment that is plowed-in only once and has a lasting effect for centuries. 
Biochar enhances soil fertility by stimulating biological activity, improving soil nutrient and water retention, and also increasing  soil organic matter. It is completely sustainable as it comes from readily available and sustainable biomass waste. Furthermore, the carbon in the biochar becomes locked up in the soil, removing carbon from the atmosphere and facilitates climate change mitigation. 
This biochar can also be blended with organic manure to make bio fertilizer which has huge demand within  India. Sufficient demand from horticulture, forest department, private nurseries for soil improvement, organic farming and potting soil etc.


    

  </div>
  
  }
   
   <button className='btnbtn newbtn' onClick={() => handleClick('third')}>{third ? "Read Less": "Read More"}</button>
    </div>

    <div className="container_part2">
    <img className='bio_container_img bio_container_img1 ' src="\biochar4.jpg"  alt="image" /><br/>
    <img className='bio_container_img bio_container_img2' src="\biocharimg3.jpg"  alt="image" />
    </div>
    </div>
    
{/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className='biochar_container'>

<div className="container_part2">
<img className='bio_container_img bio_container_img1 ' src="/biochar-application.png"  alt="image" /><br/>
{/* <img className='bio_container_img bio_container_img2' src="\biocharimg3.jpg"  alt="image" /> */}
</div>
<div className="container_part1">
 <h1 className="heading"><span>Applications of Biochar </span><br/><img src="\leafimage.png" alt="image" /></h1>
<p className="paragraph">Electrochemical,Catalysis, and Environmental Remediation. In additionto carbon sequestration, energy storage, gas puriﬁcation, watertreatment, and delivery of drugs, biochar has appeared as apractical resource for producing numerous innovative specialtymaterials such as carbon nanotubes, graphene’s, super-capacitors, as well as coloring vehicles and ﬁllers forcomposites. Carbon materials created at elevated temperatures(greater than 1200 °C) are likely to have encouraging electrochemicalproperties;70the advanced uses of activated carbon has beendemonstrated as electrode materials in electrochemical energyand fuel cell catalytic applications.The exceptional physiochemical properties of C-basedmaterials71have been exploited for use as an electrode asshown recently where corncob material was used to generateporous carbon via a thermal process;72higher surface area of1210 m2/g, with a vastly stabilized mesoporous conﬁguration,the ensuing carbon electrode displayed an excellent capaci-tance of 120 F/g in a symmetrical cell which endured 100 000cycles. In addition to their inexpensive nature and favorableecological inﬂuence, these C-based electrodes exhibited asuperior electrochemical function when compared to tradi-tional synthetic polymer-based carbonaceous materials.The gasiﬁcation of biochar is relatively slower than that ofbiomass as there is a rapid loss of mass from the later dueexpelled volatile constituents in addition to CO2and CO[92].73Some metal catalysts do increase the more active siteson the biochar surface via the adsorption of gasifying entitie
</p>
 {forth && <div>
  <p className='bio_para'><br/>
  thus enhancing the potential of biochar to replace coal inpower generating stations. The cogasiﬁcation of biocharproduced, from empty fruit bunches, increased the yield forhydrogen from 5.5 to 28% along with the carbon conversionfrom 76 to 84%.74As biochar holds substantially greater quantities of stablecarbon in the soil relative to other organic materials, itfunctions as a promising carbon sequestering vehicle; biocharcan reside stably in soil for a much extended periods of timeindependent of mineralization and temperature ﬂuctuations.Plant growth is increased by biochar as a consequence ofexpanding bioavailability of required nutrients and water thuscreating microenvironments for the growth of essential soilmicroorganisms.75Additionally, its amendment serves as a soilconditioner by enhancing water retaining capacity of soil andhelps assist in the sequestration of hazardous heavy metals; itoptimizes the ensuing pH, upsurges the total phosphorus andnitrogen, stimulates plant root growth, and provides home tobeneﬁcial bacteria and soil fungi
</p>
{/* <h2>End Use</h2><br/> */}
<p className='bio_para'>
Heterogeneous catalysts play a crucial rssole in chemicalsynthesis and transformations especially when the supportingmaterials have a desired porosity and high surface area foraccelerating the reactions. Although charcoal has been used asa support for metals since ancient times, hydrochars have someof these attributes that have been exploited in the form ofcarbonaceous nanoﬁbers.76As reuse and recovery of precious nanocatalysts77isbecoming signiﬁcant for ecological reasons and pressingenvironmental awareness, tremendous eﬀorts have beenmade wherein imparting magnetic character to such supportsachieves most of the desired objectives;78the active part of thecatalyst resides on the sites over the porous supports.Additionally, the cumbersome activities associated withcentrifugation and tedious ﬁltration have been circumventedvia a magnetic carbon supported Pd catalyst as exempliﬁed forthe hydrogenation reactions 
</p>

</div>

} 
<button className='btnbtn newbtn' onClick={() => handleClick('forth')}>{forth ? "Read Less": "Read More"}</button>
</div>

</div>
</div>
<br/>
<br/>

</>
  )
}

export default BiocharContainer

