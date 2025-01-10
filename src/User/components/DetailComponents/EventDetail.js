

import React, { useState } from "react";
import { useParams,Link } from "react-router-dom";
import { register } from 'swiper/element/bundle';


import Bukitheader from '../Bukitheader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import hdevent1 from '../../images/home/hdevent1.jpg'
import hdevent2 from '../../images/home/hdevent2.jpg'
import hdevent3 from '../../images/home/hdevent3.jpg'
import hdevent6 from '../../images/home/hdevent6.jpg'
import hdevent8 from '../../images/home/hdevent8.jpg'


const EventDetail = ({ events }) => {
      register();
  
  const slideimg=[hdevent1,hdevent2,hdevent3,hdevent6,hdevent8]

  const { id } = useParams(); // Extract the event ID from the URL

  // Find the event based on the ID
  const event = events.find((item) => item.id === parseInt(id));
  const [isTerms,setisTerms]=useState(false);


  if (!event) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl">Event Not Found</h1>
      </div>
    );
  }

  return (
    <div>
       <Bukitheader/>
    
    <div className=" flex items-center justify-center ">
      
      {/* <div className="bg-[rgba(174,1,174,0.3)] "> */}
      <div className="">
      
      
      <div className="mt-[-40px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-[1100px] h-[500px] mt-[-15px] object-fit rounded-lg "
        />
        </div>


        {/* <div className="text-white bg-[rgba(174,1,174,0.6)] "> */}
        <div className="text-white w-[1095px] ml-[5px]  sticky top-0 z-10 bg-[rgba(174,1,174,0.8)]">
        <div className="flex ">
        <div>
          <h2 className=" text-2xl font-bold ">{event.title}</h2>
          <div className="flex space-x-2">
          <p className="mb-4">{event.details}</p> 
          <span>|</span>
          <p className=""> {event.categories}</p>
          </div>

          </div>
          <div className=" ml-auto" >
          <Link to={`/booking/${event.id}`}> <p className="bg-[rgba(255,67,67,1)] w-[150px] h-[50px] flex justify-center items-center rounded-lg ">Book Now</p></Link>
          </div>
          </div>
          <div className="flex ">
          <div>
          <p>{event.date}</p>
          </div>
          <div className="flex">
          <span><FontAwesomeIcon icon={faLocationDot} className="text-yellow-300" /></span>
          <p className=""> {event.location}</p>
          </div>
          <div className="flex">
          <span><FontAwesomeIcon icon={faIndianRupeeSign} /></span>
          <p className=""> {event.prices}</p></div>
          </div>
        </div>

      <div className="flex text-white mt-[25px]  space-x-4">
        <div className="w-1/3 ">
        <div className="border border-[rgba(174,1,174,0.6)]">
        <div>
          <h3 className="text-lg font-semibold">Organiser</h3>
          </div>
          <div className="flex space-x-3 ">
          <img src={event.image} alt="" className="rounded-full w-[100px] h-[100px] "></img>
          <p className="flex justify-center items-center">Organiser Name</p>
          </div>
          </div>

          <div className="border border-[rgba(174,1,174,0.6)] mt-[20px]">
            <div><p className="text-lg font-semibold">Share this event</p></div>
            <div className="">
              <span><FontAwesomeIcon icon={faFacebookF} /></span>
              <span><FontAwesomeIcon icon={faXTwitter} /></span>
            </div>
          </div>
        </div>

        <div className="w-2/3 ">
        <div className="border border-[rgba(174,1,174,0.6)] ">
        
       
        <div className="flex">
        <div>
        <div className="flex">
          <span className="  "> <FontAwesomeIcon icon={faHeart} className="text-green-300" /> </span>
          <p>124 are interested</p>
          </div>
          <div className="flex space-x-2">
          <p className="font- text-[13px]">Make Interested to know more about this event</p> 
          
          </div>

          </div>
          <div className=" ml-auto" >
            <p className="border border-[rgba(255,67,67,1)] text-[rgba(255,67,67,1)] w-[150px] h-[40px] flex justify-center items-center rounded-lg ">Interested?</p>
          </div>
          </div>
          
       

        </div>
        

            <div className="mt-[25px] border border-[rgba(174,1,174,0.6)] ">
           <div className="mt-4 ml-[30px] bg-[rgba(174,1,174,0.4)] w-[450px]">
            <p className="text-lg font-semibold">Note</p>
            <p>Seating is on first come first serve basis</p>
           </div>

           <div className="mt-4 border-[rgba(251,250,251,0.6)] border-b p-4">
            <p className="text-lg font-semibold">Why should you attend?</p>
            <ul class="list-disc ml-[25px] ">
              <li>Comedic talent is unmatched and highly recommended</li>
              <li>The Show offers relatable storytelling and amusing</li>
              <li>Attending this show means experiencing an evening filled with amusement</li>
            </ul>
           </div>

           <div className="mt-2 border-[rgba(251,250,251,0.6)] border-b p-4 w-[500px]">
           <p className="text-lg font-semibold"> About</p>
            <p>After the great success of his previous show Bas kar bassi, Anubhav Singh Bassi is coming back to perform live on stage.</p> 
        </div>

        <div className="mt-2 border-[rgba(251,250,251,0.6)] border-b p-4 w-[500px]">
  <div className="flex justify-between items-center">
    <p className="text-lg font-semibold">Terms & Condition</p>
    <span onClick={() => setisTerms(!isTerms)} className="cursor-pointer"><FontAwesomeIcon icon={isTerms ? faChevronUp : faChevronDown} /></span>
  </div>

  {isTerms && (
    <div className="mt-2">
      <p>After the great success of his previous show Bas kar bassi, Anubhav Singh Bassi is coming back to perform live on stage.</p>
    </div>
  )}
</div>


<div className="mt-2 border-[rgba(251,250,251,0.6)] p-4 w-[500px]">
  <div className=" justify-between items-center">
    <p className="text-lg font-semibold">You may also like</p>
    <main className=''>
    <swiper-container space-between="10" slides-per-view="4" pagination="true" navigation="true" >
      {slideimg.map((image,index)=>{
        return <swiper-slide key={index}><div><img className="h-[120px] w-[100px]"  src={image} alt='' loading="lazy"></img>
        <p>Title</p></div></swiper-slide>
      })}

            
        </swiper-container>
    </main>
  </div>

  
</div>


           </div>
        </div>

        <div className="w-1/3 ">
        <div className="border border-[rgba(174,1,174,0.6)] ">
        <div>
          <p className="text-lg font-semibold">Mumbai</p>
        </div>
        </div>
        </div>

      </div>


      </div>



    </div>
    </div>
  );
};

export default EventDetail;
