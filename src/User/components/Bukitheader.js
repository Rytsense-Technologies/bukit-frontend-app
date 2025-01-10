import React, { useState,  useContext }  from 'react'
import {Link,useLocation } from 'react-router-dom' 

import { LabelContext } from "./LabelContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

// import './styles/home.css'
import './styles/header.css'


import detect from '../images/detect.png'
import videoplayer from '../images/video-player.png'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

import india from '../images/header/india.png'
import bangalore from '../images/header/bangalore.png'
import Chandigarh from '../images/header/chandigarh.png'
import delhi from '../images/header/delhi.png'
import Hyderabad from '../images/header/hyderabad.png'
import Kolkata from '../images/header/kolkata.png'
import Kochi from '../images/header/kochi.png'
import Mumbai from '../images/header/mumbai.png'
import indiaflag from '../images/header/india flag.png'
import australiaflag from '../images/header/australia flag.png'
import singapore from '../images/header/singapore flag.png'
import london from '../images/header/london flag.png'
import google from '../images/header/google.png'
import facebook from '../images/header/facebook.png'
import apple from '../images/header/apple.png'

import bukit from '../images/Revised logo/4x/Asset 27@4x.png'

import chennai from '../images/header/chennai.png'
import coimbatore from '../images/header/coimbatore.png'
import madurai from '../images/header/madurai.jpg'
import trichy from '../images/header/trichy.png'
import mumbai from '../images/header/mumbai.jpg'
import kanyakumari from '../images/header/kanyakumari.jpg'
import mysore from '../images/header/mysore.jpg'
import bengaluru from '../images/header/bengaluru.png'




import {
  // CitySelect,
  CountrySelect,
  StateSelect,
  
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export default function Bukitheader() {

  const { labelText, setLabelText,CountryText,setCountryText,StateText,setStateText,Countryid,setCountryid } = useContext(LabelContext);
  const location = useLocation();
  
    const [showModal, setShowModal] = useState(false);
    const [signinModal, setSigninModal] = useState(false);
    const [showhamburger, setshowhamburger] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [ViewAll, setViewAll] = useState(false);
      
      const toggleMenu = () => {
        setIsOpen(!isOpen);
        setshowhamburger(!showhamburger)
      };
      //  const [labelText, setLabelText] = useState("Chennai"); // State to store dynamic label text
      
        const handleClick = (name) => {
          setLabelText(name); 
        };
        const closeModal = () => setShowModal(false);
        const closeSigninModal = () => setSigninModal(false);
        const closehamburger = () => setshowhamburger(false);
        const openViewAll = () => setViewAll(!ViewAll);

        
  // const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);


  return (
    <div className='headermain '>
     
        <div className='header '>
                    <div className='header-left mt-[20px]   ml-[30px] '>
                    <div className='mt-[-40px] '>
                    <p className='bulkitlogo'><Link to='/' ><img className='h-[60px] w-[60px]' src={bukit} alt=''></img> </Link></p></div>
                    <div className=" flex items-center ">
                    <input className='searchbox pl-[45px] relative' type='text' placeholder='Search for Events'></input>
                    <FontAwesomeIcon icon={faSearch} className="absolute text-gray-500  h-[13px] p-[18px] " />
                    </div></div>
                    <div className='header-right gap-6 mt-[25px] mr-[40px] '>
                    <div className='flex text-white' onClick={() => setShowModal(true)}>
                      <label  className='selectplace text-white ' >{labelText} </label>
                      <span> <FontAwesomeIcon icon={faChevronDown} /></span>
                      {/* <Events labelText={labelText} handleClick={handleClick} /> */}
                    
                    </div>
                        <div className='' onClick={() => setSigninModal(true)}>
                        <button className='signinbutton rounded-lg'>Sign in</button></div>
                        <div className={` container ${isOpen ? 'change' : ''}`} onClick={toggleMenu} >
                            <div className="bar1 bg-white  p-[1.5px]"></div>
                            <div className="bar2 bg-white mt-1 p-[1.5px]"></div>
                            <div className="bar3 bg-white  mt-1 p-[1.5px]"></div>
                          </div>
                          </div>
                          </div>

                          <div className='container2header ml-[30px] mr-[30px]'>
        <div className='list1'>
            <li className='hover:bg-[rgb(50,15,94)] p-1'><Link to='/events' className={` ${location.pathname === "/events" ? "text-red-500" : ""}`}>Events</Link> </li>
            <li className='hover:bg-[rgb(50,15,94)] p-1'><Link to='/plays' className={` ${location.pathname === "/plays" ? "text-red-500" : ""}`}>Plays</Link></li>
            <li className='hover:bg-[rgb(50,15,94)] p-1'><Link to='/sports' className={` ${location.pathname === "/sports" ? "text-red-500" : ""}`}>Sports</Link></li>
            <li className='hover:bg-[rgb(50,15,94)] p-1'><Link to='/activities' className={` ${location.pathname === "/activities" ? "text-red-500" : ""}`}>Activities</Link></li>
        </div>
        <div className='list2'>
            <li className='hover:bg-[rgb(50,15,94)] p-1'>List Yourshow</li>
            <li className='hover:bg-[rgb(50,15,94)] p-1'>Corporates</li>
            <li className='hover:bg-[rgb(50,15,94)] p-1'>Offers</li>
            <li className='hover:bg-[rgb(50,15,94)] p-1'>Gift Cards</li>

        </div>

      </div>
      {/* onClick={closeModal}
      onClick={(e)=>e.stopPropagation()} */}

      {showModal && (
 

 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 shadow-none " >
   <div className="bg-white rounded-md shadow-lg w-[800px]  max-h-[90vh] overflow-y-auto overflow-x-hidden"  >
   <div>
<div className='flex justify-end text-black h-[5px]'onClick={closeModal}><FontAwesomeIcon icon={faWindowClose} /></div>
    
   <div className='text-black pl-3'>
   <div className='flex flex-wrap gap-x-5'> 
    <div>
      <img className='h-[50px] w-[50px]' src={indiaflag} alt=''></img>
      <p>India</p>
    </div>
    <div>
      <img className='h-[50px] w-[50px]' src={australiaflag} alt=''></img>
      <p>Australia</p>
    </div>
    <div>
      <img className='h-[50px] w-[50px]' src={singapore} alt=''></img>
      <p>Singapore</p>
    </div>
    <div>
      <img className='h-[50px] w-[50px]' src={london} alt=''></img>
      <p>London</p>
    </div>
   </div>


     {/* <CountrySelect
    
    className=""
    style={{ border: "none", outline: "none", width:"400px" }}
    
  onChange={(e) => {
    console.log(e.id)
    setCountryid(e.id);
    setCountryText(e.name)
  }}
  placeHolder={CountryText ? CountryText : "Choose your Country"}
  
  defaultValue={{ id: Countryid, name: CountryText }} 
/> */}
</div>
<div className='text-black pl-3 w-[400px] h-[40px] p-0'>
<StateSelect
  countryid={Countryid}
  style={{ border: "none", outline: "none" }}
  onChange={(e) => {
    console.log(e);
    setstateid(e.id);
    setLabelText(e.name)
    setStateText(e.name)
    closeModal()
  }}
  value={StateText}
  placeHolder= "Select City"
  
  
/>
</div>

</div>
    
    
     
     
     <div className='flex pl-6 pt-5' onClick={(e)=>e.stopPropagation()}>
       <img className='w-[30px] h-[30px] ' src={detect} alt='' ></img>
     <p className=" text-red-500 font-medium text-[16px] leading-[23.44px] pl-3" >Detect my location</p>
     </div>

       {/* {countryname=='India' && (<div> */}
     <div  onClick={(e)=>e.stopPropagation()}>
       <p className='font-normal text-center text-[rgba(26,51,101,1)] text-[18px] leading-[23.44px]'>Popular Cities </p>
       </div>
       <div className="flex items-center justify-center flex-wrap w-[800px]  gap-y-2" onClick={closeModal}>
<div className="w-1/4  text-normal text-center text-[rgba(26,51,101,1)] shadow-none" onClick={() =>{ handleClick("Chennai"); setStateText("Chennai");setCountryid(101);setCountryText("India")}}>
  <div><img className='w-[80px] ml-[60px] h-[80px] shadow-none' src={chennai} alt=''></img></div>
  <div><p>Chennai</p></div>
  </div>
<div className="w-1/4  text-normal  text-center text-[rgba(26,51,101,1)]" onClick={() => {handleClick("Coimbatore");setStateText("Coimbatore");setCountryid(101);setCountryText("India")}}>
<div><img className='w-[50px] ml-[60px] h-[50px]' src={coimbatore} alt=''></img></div>
<div>Coimbatore</div>
</div>
<div className="w-1/4 text-normal  text-center text-[rgba(26,51,101,1)]" onClick={() => {handleClick("Madurai");setStateText("Madurai");setCountryid(101);setCountryText("India")}}>
<div><img className='w-[50px] ml-[60px] h-[50px]' src={madurai} alt=''></img></div>
<div><p> Madurai</p></div></div>
<div className="w-1/4   text-normal  text-center text-[rgba(26,51,101,1)]" onClick={() => {handleClick("Trichy");setStateText("Trichy");setCountryid(101);setCountryText("India")}}>
<div><img className='w-[50px] ml-[60px] h-[50px]' src={trichy} alt=''></img></div>
 <div> <p>Trichy</p></div></div>
<div className="w-1/4  text-normal  text-center text-[rgba(26,51,101,1)]" onClick={() => {handleClick("Mumbai");setStateText("Mumbai");setCountryid(101);setCountryText("India")}}>
<div><img className='w-[50px] ml-[60px] h-[50px]' src={mumbai} alt=''></img></div>
<div><p>Mumbai</p></div></div>
<div className="w-1/4  text-normal  text-center text-[rgba(26,51,101,1)]" onClick={() => {handleClick("Kanyakumari");setStateText("Kanyakumari");setCountryid(101);setCountryText("India")}}>
<div><img className='w-[50px] ml-[60px] h-[50px]' src={kanyakumari} alt=''></img></div>
<div><p>Kanyakumari</p></div></div>
<div className="w-1/4   text-normal  text-center text-[rgba(26,51,101,1)]" onClick={() => {handleClick("Mysuru");setStateText("Mysuru");setCountryid(101);setCountryText("India")}}>
<div><img className='w-[50px] ml-[60px] h-[50px]' src={mysore} alt=''></img></div>
<div><p>  Mysuru</p></div></div>
<div className="w-1/4 text-normal  text-center text-[rgba(26,51,101,1)]" onClick={() => {handleClick("Bengaluru");setStateText("Bengaluru");setCountryid(101);setCountryText("India")}}>
<div><img className='w-[50px] ml-[60px] h-[50px]' src={bengaluru} alt=''></img></div>
 <div><p> Bengaluru</p></div></div>

</div>
      
<div>
     <p className=" text-red-500 text-center font-medium text-[18px] leading-[23.44px]" onClick={openViewAll}>View All</p>
     </div>
     {/* </div>
     )} */}

     {ViewAll&&(
      <div>
        <div className='flex flex-wrap  pl-6' onClick={closeModal}>
          <p className='w-1/5' onClick={() =>{ handleClick("Assam"); setStateText("Assam");setCountryid(101);setCountryText("Assam")}}>Assam</p>
          <p className='w-1/5' onClick={() =>{ handleClick("Bihar"); setStateText("Bihar");setCountryid(101);setCountryText("Bihar")}}>Bihar</p>
          <p className='w-1/5' onClick={() =>{ handleClick("Goa"); setStateText("Goa");setCountryid(101);setCountryText("Goa")}}>Goa</p>
          <p className='w-1/5' onClick={() =>{ handleClick("Gujarat"); setStateText("Gujarat");setCountryid(101);setCountryText("Gujarat")}}>Gujarat</p>
          <p className='w-1/5' onClick={() =>{ handleClick("Haryana"); setStateText("Haryana");setCountryid(101);setCountryText("Haryana")}}>Haryana</p>
          <p className='w-1/5' onClick={() =>{ handleClick("Jharkand"); setStateText("Jharkand");setCountryid(101);setCountryText("Jharkand")}}>Jharkand</p>
          <p className='w-1/5' onClick={() =>{ handleClick("Maharashtra"); setStateText("Maharashtra");setCountryid(101);setCountryText("Maharashtra")}}>Maharashtra</p>
          <p className='w-1/5' onClick={() =>{ handleClick("Manipur"); setStateText("Manipur");setCountryid(101);setCountryText("Manipur")}}>Manipur</p>
          <p className='w-1/5' onClick={() =>{ handleClick("Punjab"); setStateText("Punjab");setCountryid(101);setCountryText("Punjab")}}>Punjab</p>
          <p className='w-1/5' onClick={() =>{ handleClick("Rajasthan"); setStateText("Rajasthan");setCountryid(101);setCountryText("Rajasthan")}}>Rajasthan</p>
          
        </div>
      </div>
     )}
   </div>
 </div>
)}


{signinModal && 
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 shadow-none " >
   <div className="bg-white rounded-md shadow-lg w-[400px]  text-black max-h-[90vh] overflow-y-auto overflow-x-hidden"  >
   <div>
<div className='flex justify-end text-black h-[5px]'onClick={closeSigninModal}><FontAwesomeIcon icon={faWindowClose} /></div>

<div className='flex space-x-3 justify-center items-center mt-[50px]'>
<img className='h-[30px] w-[30px] shadow-none' src={indiaflag} alt=''></img>
<p>+91</p>
  <input type='text' className='border-[rgba(0,0,0,0.2)] border-b w-[250px]' placeholder='Enter your mobile number'></input>
</div>

<div className='justify-center flex items-center mt-[50px]'>
  <p className='w-[330px] h-[40px] bg-[rgba(174,1,174,0.3)] border border-[rgba(0,0,0,0.4)] flex justify-center items-center rounded-lg'>Verify</p>
</div>

<div className='justify-center flex items-center mt-[50px]'>
  <p className='w-[300px]  flex justify-center items-center'>Or connect with</p>
</div>

<div className='justify-center flex items-center mt-[20px] space-x-2 '>
  <img className='w-[50px] h-[50px] border rounded-3xl shadow-none p-2' src={google} alt=''></img>
  <img className='w-[50px] h-[50px] border rounded-3xl shadow-none p-2' src={facebook} alt=''></img>
  <img className='w-[50px] h-[50px] border rounded-3xl shadow-none p-2'  src={apple} alt=''></img>
</div>

<div className='flex mt-[30px]'>
  <input type='checkbox'></input>
  <p className='pl-[15px] '>I agree to the<span className='text-red-500 font-medium text-[16px]'>Terms & Conditions </span> And <span className='text-red-500 font-medium text-[16px]'> Privacy Policy</span></p>
</div>
</div>
</div>

</div>

}

{/* icon color-color="rgba(26, 51, 101, 1) " */}

{showhamburger &&
       <div className=" overflow-y-auto fixed inset-0 flex justify-end  bg-black bg-opacity-40 z-50" onClick={closehamburger}>
          {/* <div className=" hamburger bg-white w-[450px] h-[690px] p-4 rounded-lg shadow-lg text-[rgba(26,51,101,1)]" onClick={(e)=>e.stopPropagation()}> */}
          <div className=" hamburger  w-[450px] h-[690px] p-4 rounded-lg shadow-lg text-white" onClick={(e)=>e.stopPropagation()}>
            <div>
              <h1 className=' text-[28px] text-medium  text-white'>Hey!</h1>
            </div>
            <div className='flex p-2 bg-[rgba(255,243,210,1)] '>
              <span className='leading-[23.44px]' ><FontAwesomeIcon icon={faInfoCircle} size='lg' color="rgba(26, 51, 101, 1) " background-color='rgba(255,243,210,1)'/></span>
              <div>
              <p className='text-[12px] leading-[23.44px] p-1 text-[rgba(26,51,101,1)] '>Unlock special offers & Great Benefits</p>
              </div>
              <div>
                <button className='bg-white text-[16px] border-2 p-1 border-black-1000 rounded-[10px] leading-[23.44px] pl-2 text-[rgba(26,51,101,1)]'>Login/Register</button>
              </div>
            </div>
            
            <div className='flex  p-2  border-b-2'>
              <span className='mt-1'><FontAwesomeIcon icon={faBell} size='lg' color="white"/></span>
              <div className='pl-2'><p className='font-medium text-[18px]'>Notifictaion</p></div>
              <div className='ml-auto'> <FontAwesomeIcon icon={faGreaterThan} className="text-gray-600" /></div>
            </div>

            <div className='flex  p-2  border-b-2'>
              <span className='mt-4'><FontAwesomeIcon icon={faTicket} size='lg' color="white" /></span>
              <div className='pl-1'><p className='font-medium text-[18px]'>Your Orders</p>
              <p className='text-[13px]'>View all your booking & purchases</p>
              </div>
              <div className='ml-auto'> <FontAwesomeIcon icon={faGreaterThan} className="text-gray-600" /></div>
            </div>

            <div className='flex  p-2  border-b-2'>
              <div className='mt-4 h-3'>
              <img className="w-[22px] h-[22px] shadow-none bg-white " src={videoplayer}  alt=''></img></div>
              <div className='pl-2'><p className='font-medium text-[18px]'>Stream Library</p>
              <p className='text-[13px]'>Rented & Purchased Events</p>
              </div>
              <div className='ml-auto'> <FontAwesomeIcon icon={faGreaterThan} className="text-gray-600" /></div>
            </div>

            <div className='flex  p-2  border-b-2'>
              <span className='mt-4'><FontAwesomeIcon icon={faCreditCard} size='lg' color="white"/></span>
              <div className='pl-2'><p className='font-medium text-[18px]'>Play Credit Card</p>
              <p className='text-[13px]'>View your play Credit Card details and offers</p>
              </div>
              <div className='ml-auto'> <FontAwesomeIcon icon={faGreaterThan} className="text-gray-600" /></div>
            </div>

            <div className='flex  p-2  border-b-2'>
              <span className='mt-4'><FontAwesomeIcon icon={faCircleQuestion} size='lg' color="white"/></span>
              <div className='pl-2'><p className='font-medium text-[18px]'>Help Centre</p>
              <p className='text-[13px]'>Need help or have questions?</p>
              </div>
              <div className='ml-auto'> <FontAwesomeIcon icon={faGreaterThan} className="text-gray-600" /></div>
            </div>

            <div className='flex  p-2  border-b-2'>
              <span className='mt-4'><FontAwesomeIcon icon={faGear} size='lg' color="white"/></span>
              <div className='pl-2'><p className='font-medium text-[18px]'>Accounts & Settings</p>
              <p className='text-[13px]'>Location, payments, Permissions & More</p>
              </div>
              <div className='ml-auto'> <FontAwesomeIcon icon={faGreaterThan} className="text-gray-600" /></div>
            </div>

            <div className='flex  p-2  border-b-2'>
              <span className='mt-4'><FontAwesomeIcon icon={faGift} size='lg' color="white"/></span>
              <div className='pl-2'><p className='font-medium text-[18px]'>Rewards</p>
              <p className='text-[13px]'>View your rewards & unlock new ones</p>
              </div>
              <div className='ml-auto'> <FontAwesomeIcon icon={faGreaterThan} className="text-gray-600" /></div>
            </div>
             </div>
          </div>

      }
    </div>
  )
}
