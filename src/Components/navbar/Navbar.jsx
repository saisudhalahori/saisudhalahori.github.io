import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector ,useDispatch } from 'react-redux';
import { collection, getDocs, query, where } from 'firebase/firestore'; // Import Firestore functions
import { db ,auth} from '../../firebase';
import {signOut } from "firebase/auth";
import { authDeclined } from '../../Redux/Authentication';


const Navbar = () => {
  const {currentuser}  = useSelector(state=>state.auth) ; 
  
  const dispatch = useDispatch()

  const [userInfo, setUserInfo] = useState({});
  const [display , setDsplay] = useState(false)

  useEffect(() => {
    async function getUserData() {
      if (currentuser) {
        try {
          const q = query(collection(db, 'admin'), where('Email', '==', currentuser.email));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach(doc => {
            
            setUserInfo({...doc.data()});
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    }
    getUserData();
  }, [currentuser]);
  
  const handlelogout= () =>{
  signOut(auth).then(() => {
    
       dispatch(authDeclined(''));
    }).catch((error) => {
    
    });
  
   }

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search.." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <MenuIcon className="icon" />
           </div>
          <div className="item">
          <div>
            
          </div>
            <img
              src={userInfo.img}
              alt=""
              className="avatar"
              onClick={() => setDsplay(prev => !prev)}
            />
            {display && (
              <div className="userinfo">
                <h3>{userInfo.Email}</h3>
                <h2>{userInfo.Username}</h2>
                <button onClick={handlelogout}>sign-out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
