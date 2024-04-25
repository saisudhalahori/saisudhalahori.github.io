import React, { useEffect, useState } from 'react'
import './Adminnew.scss'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { addDoc, collection, doc, serverTimestamp, setDoc ,} from "firebase/firestore"; 
import {createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {auth, db ,storage} from '../../firebase';

import { useNavigate } from 'react-router-dom';
const userInputs = [
    {
      id: "Username",
      label: "Username",
      type: "text",
      placeholder: "john_doe",
    },
    {
      id: "displayname",
      label: "Name and surname",
      type: "text",
      placeholder: "John Doe",
    },
    {
      id: "Email",
      label: "Email",
      type: "mail",
      placeholder: "john_doe@gmail.com",
    },
    {
      id: "Phone",
      label: "Phone",
      type: "number",
      placeholder: "+1 234 567 89",
    },
    {
      id: "Password",
      label: "Password",
      type: "password",
    },
    {
      id: "Role",
      label: "Role",
      type: "text",
      placeholder: "Designation",
    },
    {
      id: "Country",
      label: "Country",
      type: "text",
      placeholder: "USA",
    },
  ];


function Adminnew() {
  const [file, setFile] = useState("")
  const [data,setData] = useState({})
  const [perc,setPerc] = useState(null)
  const navigate = useNavigate()

     useEffect(()=>{
       const uploadFile = ()=>{
        const name = new Date().getTime() + file.name
        
        const storageRef = ref(storage, file.name); 

        
        const uploadTask = uploadBytesResumable(storageRef, file);

       uploadTask.on('state_changed', 
        (snapshot) => {
     
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           console.log('Upload is ' + progress + '% done');
           setPerc(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;

        default :
          break ;
    }
  }, 
  (error) => {
      console.log(error)
  }, 
  () => {
   
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setData((prv) =>({...prv,img:downloadURL}))
    });
  }
     )}

       file && uploadFile()
     },[file])

  const handelInpute = (e)=>{
    const id = e.target.id ; 
    const value = e.target.value ;

    setData({...data,[id]:value })
  }
console.log(data)
  const addData = async(e) =>{
       e.preventDefault()

       try{
       const userRes = createUserWithEmailAndPassword(auth, data.Email, data.Password) ;

        const res =  await addDoc(collection(db, "admin"), {
          ...data,
          timeStamp:serverTimestamp()
        });
        navigate(-1)
        console.log(res.id)
       }catch{
        console.log("error")
       }

  
  }
 
  return (
    <div className='newAdmin'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>Register New Admin</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={ file ? URL.createObjectURL(file) :
               'https://www.shutterstock.com/image-vector/photo-camera-vector-icon-600nw-1345025204.jpg'}
            alt='' 
            />
          </div>
          <div className="right">
            <form onSubmit={addData} className='adminform'>
            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon  className='icon'/>
                </label>
                <input type='file' id='file' 
                style={{display:"none"}}
                onChange={(e)=>setFile(e.target.files[0]) }
                />
                
              </div>

              {userInputs.map(input=>{
                  
              return (
              <div className="formInput" key={input.id}>
                <label >{input.label}</label>
                <input type={input.type}
                 placeholder={input.placeholder} 
                 id={input.id}
                 onChange={handelInpute}
                 />
              </div>)
              })}
              
              <button type='submit'
                disabled={perc !==null && perc < 100}
              >Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminnew ;
