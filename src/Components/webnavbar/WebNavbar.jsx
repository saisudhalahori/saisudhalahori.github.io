import React, { useState } from 'react';
import './WebNavbar.scss';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';

export default function WebNavbar() {
  let [openMenu, setOpenMenu] = useState(false);
  let [dropdown, setDropdown] = useState(false);
  let navigate = useNavigate();

  function handleClick() {
    setOpenMenu(!openMenu);
  }

  function handleDropdownClick() {
    setDropdown(!dropdown);
  }

  return (
    <>
    
    <nav>
    <img
    className='name'
    src="./images/logoimage.jpeg" alt="" 
    />

        <div>

          <ul className={openMenu ? "navbar active" : "navbar"} >
            <li><Link to='/'>Home</Link></li>

            <li onClick={handleDropdownClick}>
              <Link to='/about'>
                AboutUs {<AddBoxSharpIcon className="plus-icon" style={{ fontSize: '18px' }} />}
              </Link>
              <ul className={dropdown ? 'dropdown_link' : 'dropdown_hide'}>
                <li onClick={() => navigate('/about/team')}>Team</li>
                <li onClick={() => navigate('/about/client')}>Client</li>
              </ul>
            </li>
       
          <li><Link to='/service'>Services</Link></li>
          <li><Link to='/biochar'>BioCharProject</Link></li>
          <li><Link to='/career'>Career</Link></li>
          <li><Link to='/contact'>ContactUs</Link></li>


          </ul>
        </div>

        <div className='mobile' onClick={handleClick}>
          {openMenu ? <CloseIcon color='white' /> : <MenuIcon color='white' />}
        </div>

      </nav>

    </>
  );
}
