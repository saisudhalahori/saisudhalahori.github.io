import React from 'react'
import './Client.scss'
import WebNavbar from '../../Components/webnavbar/WebNavbar'
import WebFooter from '../../Components/webfooter/WebFooter'
const Client = () => {
  return (
 
  
    <div className='client'>
      <WebNavbar />
        <div className="client_main_container">

            <h1 className='client_heading'>Our <span className='client_span'>Clients</span><br/><img src="\public\leafimage.png" alt="" /></h1>
            </div>
            <div className='client_main_imgdiv'>
                <div>
            <img className='client_image' src="\walmi.png" alt="image" />
            <img className='client_image' src="\FES.jpg" alt="image" />
            <img className='client_image' src="\adityabirla_grasim.jpg" alt="image" />
            <img className='client_image' src="\adityabirla_HIndalco.jpg" alt="image" />
            </div>
            <br/>
            <div>
            <img className='client_image' src="\IIT Roorkee.jpg" alt="image" />
            <img className='client_image' src="\JREDA.jpg" alt="image" />
            <img className='client_image' src="\Ministry of Forest and Farmerwalfare.jpg" alt="image" />
            <img className='client_image' src="\MP Forest Department.jpg" alt="image" />
            </div>
            <div>
            <img className='client_image' src="\MPSTDC.jpg" alt="image" />
            <img className='client_image' src="\MPUVN.jpg" alt="image" />
            <img className='client_image' src="\PWC.png" alt="image" />
            <img className='client_image' src="\GTZ international.jpg" alt="image" />
            </div>
            <div>
            <img className='client_image' src="\NTPC.jpg" alt="image" />
            <img className='client_image' src="\UPNEDA.jpg" alt="image" />
            <img className='client_image' src="\AMPRI BHOPAL.png" alt="image" />
            <img className='client_image' src="\inseda.jpg" alt="image" />
            </div>
            </div>

      
        <WebFooter />
        </div>
       
  )
}

export default Client
