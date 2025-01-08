import React, { useState,useContext } from 'react'

import Bukitheader from './Bukitheader'
import { LabelContext } from "./LabelContext";
import { eventsData } from '../Databases/EventData';




import { register } from 'swiper/element/bundle';



import hdevent12 from '../images/eventimages/hdevent12.jpg'
// import hdevent13 from '../images/eventimages/hdevent13.jpg'
import hdevent14 from '../images/eventimages/hdevent14.jpg'


import sports1 from '../images/sports/sports1.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";



// import { DateRangePicker } from 'react-date-range';
// import { addDays } from 'date-fns'; // to manipulate date if needed
// import 'react-date-range/dist/styles.css'; // for main styles
// import 'react-date-range/dist/theme/default.css'; // for default theme

// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';


export default function Sports() {
    register()
    const slideimg=[sports1,hdevent12,hdevent14]

    const [isOpenDate, setisOpenDate] = useState(false);
    const [isOpenCategories, setisOpenCategories] = useState(false);
    const [isOpenMore, setisOpenMore] = useState(false);
    const [isOpenPrice, setisOpenPrice] = useState(false);
    const [calendar, setcalendar] = useState(false);

      const { labelText } = useContext(LabelContext);
    

    const toggleContentDate = () => {
      setisOpenDate(!isOpenDate);
    };
   
    const toggleContentCategories = () => {
      setisOpenCategories(!isOpenCategories);
    };
    const toggleContentMore = () => {
      setisOpenMore(!isOpenMore);
    };
    const toggleContentPrice = () => {
      setisOpenPrice(!isOpenPrice);
    };


    // const [selectionRange, setSelectionRange] = useState({
    //   startDate: new Date(),
    //   endDate: new Date(),
    //   key: 'selection'
    // });
  
    // const handleSelect = (ranges) => {
    //   setSelectionRange(ranges.selection);
    // };

    // const [startDate, setStartDate] = useState(new Date());

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const setToday=()=>{
      const today = new Date();
        setStartDate(today)
        setEndDate(today)
        console.log(today);
    }
    const setTomorrow = () => {
      const today = new Date();
      const tomorrow = new Date(today); // Clone today's date
      tomorrow.setDate(tomorrow.getDate() + 1); // Add one day
  
      setStartDate(today);
      setEndDate(tomorrow);
  
      console.log("Today:", today);
      console.log("Tomorrow:", tomorrow);
  };

  const setWeekend = () => {
    const today = new Date();
    const weekend = new Date(today); // Clone today's date
    weekend.setDate(weekend.getDate() -7); // Add one day

    setStartDate(weekend);
    setEndDate(today);

    console.log("Today:", today);
    console.log("weekend:", weekend);
};
  return (
    <div className="text-white ">
      
    
        <Bukitheader/>
        {/* <DateRangePicker label="Date range" /> */}
        {/* <DateRangePickerComponent id="daterangepicker" /> */}

        {/* <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      /> */}

      
       

        <div >
      <main className='container2 img-slide mt-[-15px] '>
    <swiper-container className=" " space-between="10" slides-per-view="1" pagination="true" navigation="true" lazlazy="true"  >
      {slideimg.map((image,id)=>{
        return <swiper-slide className="" key={id}><img className="shadow-xl rounded-lg " src={image} alt='' loading="lazy"></img></swiper-slide>
      })}    
        </swiper-container>
    </main>
    </div>



    <div className='ml-[40px] mt-[40px] '>
    {/* <div className='ml-[80px] mr-[80px] bg-[rgba(245,245,245,1)] '> */}
        <div className='flex justify-between'>
        <div>
        <p className=' font-roboto font-semibold text-[25px] leading-[37.5px] '>Filters</p>
        </div>
        <div className=''>
        <p className=' text-[14px] bg-[rgb(117,7,121,0.7)] rounded-3xl p-3 pl-5 pr-5 text-white mr-[10px]' >Browse by Venues</p>
        </div>
        </div>

        <div className='flex flex-wrap gap-20 mt-[20px]' >
          <div>
            <div className='flex justify-between border-2  rounded-lg pl-2 pr-3 p-1 w-[290px]' >
            {/* <div className='flex justify-between border-2 bg-[rgba(255,255,255,1)] p-1 w-[280px]' > */}

                <span onClick={toggleContentDate}> <FontAwesomeIcon icon={isOpenDate ? faChevronUp : faChevronDown} /></span>
                <p className='ml-[-100px] ' onClick={toggleContentDate}>Date</p>
                <p className='hover:text-[rgba(255,67,67,1)]'>Clear</p>

            </div>
                {isOpenDate && (
                  <div className='  '>
        <div className="  w-[270px] flex flex-wrap  gap-5">
          <p className='text-[rgba(255,67,67,1)]  font-roboto leading-[20px] border  border-black  ' onClick={setToday}>Today</p>
          <p className='text-[rgba(255,67,67,1)]  font-roboto leading-[20px] border  border-black ' onClick={setTomorrow}>Tomorrow</p>
          <p className='text-[rgba(255,67,67,1)]  font-roboto leading-[20px] border  border-black  'onClick={setWeekend}>This Weekend</p>
        </div>
        <div className='space-x-6 mt-2 ' onClick={()=>setcalendar(!calendar)}>
        {/* <label className=''>Date range</label> */}
           
          
          {(startDate && endDate ) ?(
        <label className='  font-roboto leading-[20px]   border-black-500  '><label className='text-[rgba(255,67,67,1)] ml-[-3px]'>Date range: </label>{format(startDate, 'dd-MM-yyyy')}  -  {format(endDate, 'dd-MM-yyyy')}</label>
      ):('')}
      </div>

      
          <div className=' flex text-white mt-2'>
        <label className='text-[rgba(255,67,67,1)]'>Start Date: </label>
        <div className='text-black '> 
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd-MM-yyyy"
          maxDate={endDate}

          className='w-[130px] text-center text-white border rounded-md  bg-inherit'
        /></div>
      </div>

      <div className='flex'>
        <label className='text-[rgba(255,67,67,1)]'>End Date : </label>
        <div className='text-black'>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd-MM-yyyy"
         className='w-[130px] text-center text-white border rounded-md bg-inherit'
        />
      </div>
      </div>

          </div>
      )}
            </div>
           


            <div className='ml-5'>
            <div className='flex justify-between border-2 rounded-lg pl-2 pr-3 p-1 w-[280px]' >
                <span onClick={toggleContentCategories}> <FontAwesomeIcon icon={isOpenCategories ? faChevronUp : faChevronDown} /></span>
                <p className='ml-[-100px] ' onClick={toggleContentCategories}>Categories</p>
                <p className='hover:text-[rgba(255,67,67,1)]'>Clear</p>
            </div>
            {isOpenCategories && (
                  <div className=''>
        <div className="  w-[270px] flex flex-wrap  gap-6">
          <p className='text-[rgba(255,67,67,1)] w-auto font-roboto leading-[20px] border  border-black '>Music Shows</p>
          <p className='text-[rgba(255,67,67,1)]  font-roboto leading-[20px] border  border-black   '>Comedy Shows</p>
          <p className='text-[rgba(255,67,67,1)]  font-roboto leading-[20px] border  border-black  '>New Year Parties</p>
        </div>
          </div>
      )}
            </div>


            <div>
            <div className='flex justify-between border-2 rounded-lg pl-2 pr-3 p-1 w-[280px]' >
                <span onClick={toggleContentMore}> <FontAwesomeIcon icon={isOpenMore ? faChevronUp : faChevronDown} /></span>
                <p className='ml-[-50px] ' onClick={toggleContentMore}>More Filters</p>
                <p className='hover:text-[rgba(255,67,67,1)]'>Clear</p>
            </div>
            {isOpenMore && (
                  <div className=''>
        <div className="  w-[270px] flex flex-wrap  gap-6">
          <p className='text-[rgba(255,67,67,1)] w-auto font-roboto leading-[20px] border  border-black '>Outdoor Events</p>
          <p className='text-[rgba(255,67,67,1)]  font-roboto leading-[20px] border  border-black   '>Fast Filling</p>
          <p className='text-[rgba(255,67,67,1)]  font-roboto leading-[20px] border  border-black   '>Must Attend</p>
        </div>
          </div>
      )}
            </div>


            <div className=''>
            <div className='flex justify-between border-2  rounded-lg pl-2 pr-3 p-1 w-[280px] mt-[-20px]' >
                <span onClick={toggleContentPrice}> <FontAwesomeIcon icon={isOpenPrice ? faChevronUp : faChevronDown} /></span>
                <p className='ml-[-100px] ' onClick={toggleContentPrice}>Price</p>
                
                <p className='hover:text-[rgba(255,67,67,1)]'>Clear</p>
            </div>
            {isOpenPrice && (
                  <div className=''>
        <div className="  w-[270px] flex flex-wrap  gap-6">
          <p className='text-[rgba(255,67,67,1)] w-auto font-roboto leading-[20px] border  border-black  '>Free</p>
          <p className='text-[rgba(255,67,67,1)]  font-roboto leading-[20px] border  border-black '>0-500</p>
          <p className='text-[rgba(255,67,67,1)]  font-roboto leading-[20px] border  border-black  '>501-2000</p>
          <p className='text-[rgba(255,67,67,1)]  font-roboto leading-[20px] border  border-black   '>Above 2000</p>
        </div>
          </div>
      )}

            </div>


        </div>

        <div>
        <div className='mt-[40px]'>
            <div>
        <p className=' font-roboto font-semibold text-[25px] leading-[37.5px] '>Sports in {labelText}</p>
        </div>
        <div className='flex gap-5 p-1   '>
        <p className=' font-roboto leading-[37.5px] border-[1px]  border-white  rounded-lg pl-2 pr-2  '>Football</p>
        <p className=' font-roboto leading-[37.5px] border-[1px]  border-white  rounded-lg pl-2 pr-2  '>Running</p>
        <p className=' font-roboto leading-[37.5px] border-[1px]  border-white  rounded-lg pl-2 pr-2 '>Chess</p>
        <p className=' font-roboto leading-[37.5px] border-[1px]  border-white  rounded-lg pl-2 pr-2 '>Kabaddi</p>
        <p className=' font-roboto leading-[37.5px] border-[1px]  border-white  rounded-lg pl-2 pr-2 '>Badminton</p>
        <p className=' font-roboto leading-[37.5px] border-[1px]  border-white  rounded-lg pl-2 pr-2 '>Tennis</p>
        

        </div>
        </div>
        </div>

          <div className='container5'>
                        
                        <div className=' flex flex-wrap container5-img'>
               
                       {eventsData.map((event)=>{
               
                         return (<div className='w-1/4'>
                         <div className="relative ml-[-20px] ">
                     <img 
                       src={event.image}
                       alt="Example" 
                       className="w-[250px] h-[300px] object-cover"
                     />
                     <div className="absolute bottom-[5px] left-[5px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
                     
                       {event.date}
                     </div>
                   </div>
                           <div className='ml-[-20px] '>
                             <p className='font-roboto font-bold text-[20px] leading-[23.44px] '>{event.title}</p>
                             <p className='font-roboto font-normal text-[14px] leading-[23.44px] '>{event.details}</p>
                             <p className='font-roboto font-normal text-[14px] leading-[23.44px] '>{event.categories}</p>
                             <p className='font-roboto font-normal text-[14px] leading-[23.44px] '>{event.prices}</p>
                           </div>
                         </div>
               
                       )})}
                          
                        </div>
                     </div>
    </div>
    </div>
  )
}
