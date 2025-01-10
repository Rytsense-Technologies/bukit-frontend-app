import React, { useState,useContext } from 'react'

import Bukitheader from './Bukitheader'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faIndianRupeeSign, faTicket, faTicketSimple } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Booking(selectedCategory ) {
    const stageSize = 100; // Adjust to fit your design
    const canvasWidth = 500;
    const canvasHeight = 500;

    const[General1color,setGeneral1color] =useState(true)
    const[General2color,setGeneral2color] =useState(true)
    const[General3color,setGeneral3color] =useState(true)
    const[General4color,setGeneral4color] =useState(true)

    const[Economy1color,setEconomy1color] =useState(true)
    const[Economy2color,setEconomy2color] =useState(true)
    const[Economy3color,setEconomy3color] =useState(true)
    const[Economy4color,setEconomy4color] =useState(true)

    const[vipcolor,setvipcolor] =useState(true)
    const[vvipcolor,setvvipcolor] =useState(true)
  
    const getSectionColor = (category) => {
      return category === 'orange' ? 'orange' : '#3B3B50';
    };

    const [isVipAdded, setIsVipAdded] = useState(false); // Tracks if the button is in 'Add' or counter mode
    const [Vipcount, setVipCount] = useState(1); // Tracks the count value

    const [isVvipAdded, setIsVvipAdded] = useState(false); 
    const [Vvipcount, setVvipCount] = useState(1); 

    
    const [isEconomy1Added, setIsEconomy1Added] = useState(false); 
    const [Economy1count, setEconomy1Count] = useState(1); 
    
    const [isEconomy2Added, setIsEconomy2Added] = useState(false); 
    const [Economy2count, setEconomy2Count] = useState(1); 
    
    const [isGeneral1Added, setIsGeneral1Added] = useState(false); 
    const [General1count, setGeneral1Count] = useState(1); 

    const [isGeneral2Added, setIsGeneral2Added] = useState(false); 
    const [General2count, setGeneral2Count] = useState(1); 
  
    const handleVipAddClick = () => {
      setIsVipAdded(true); // Switch to counter mode when 'Add' is clicked
    };
  
    
  return (
    <div className="text-white ">
      
    
        <div className='headermain h-[110px]'></div>
        <div className='flex '>
       <div className='ml-[40px] mt-[-70px] w-1/2'>
       <svg width={canvasWidth} height={canvasHeight}>
      {/* Outer Sections (G) */}
      <rect x="10%" y="0%" width="80%" height="10%" fill={General4color ? '#3B3B50' : 'orange'} />
      <rect x="10%" y="90%" width="80%" height="10%" fill={General2color ? '#3B3B50' : 'orange'} />
      <rect x="0" y="10%" width="10%" height="80%" fill={General3color ? '#3B3B50' : 'orange'} />
      <rect x="90%" y="10%" width="10%" height="80%" fill={General1color ? '#3B3B50' : 'orange'} />

      {/* Inner Sections (E) */}
      <rect x="20%" y="20%" width="60%" height="10%" fill={Economy4color ? '#3B3B50' : 'orange'} />
      <rect x="20%" y="70%" width="60%" height="10%" fill={Economy2color ? '#3B3B50' : 'orange'} />
      <rect x="20%" y="30%" width="10%" height="40%" fill={Economy3color ? '#3B3B50' : 'orange'} />
      <rect x="70%" y="30%" width="10%" height="40%" fill={Economy1color ? '#3B3B50' : 'orange'} />

      {/* Center Stage */}
      <rect
        x={`${canvasWidth / 2 - stageSize / 2}`}
        y={`${canvasHeight / 2 - stageSize / 2}`}
        width={stageSize}
        height={stageSize}
        fill="black"
      />
{/* VIP (Triangle for Top) */}
<path
  d={`M ${canvasWidth / 2},${canvasHeight / 2 - stageSize / 8 - 30} 
      L ${canvasWidth / 2 - 100},${canvasHeight / 2 - stageSize / 5 - 82} 
      L ${canvasWidth / 2 + 100},${canvasHeight / 2 - stageSize / 5 - 82} Z`}
  fill={vvipcolor ? '#3B3B50' : 'orange'}
/>

{/* VIP (Triangle for Bottom) */}
<path
  d={`M ${canvasWidth / 2},${canvasHeight / 2 + stageSize / 8 + 30} 
      L ${canvasWidth / 2 - 100},${canvasHeight / 2 + stageSize / 5 + 77} 
      L ${canvasWidth / 2 + 100},${canvasHeight / 2 + stageSize / 5 + 77} Z`}
  fill={vvipcolor ? '#3B3B50' : 'orange'}
/>

{/* VIP (Triangle for Left) */}
<path
  d={`M ${canvasWidth / 2 - stageSize / 8 - 30},${canvasHeight / 2} 
      L ${canvasWidth / 2 - stageSize / 5 - 85},${canvasHeight / 2 - 100} 
      L ${canvasWidth / 2 - stageSize / 5 - 85},${canvasHeight / 2 + 100} Z`}
  fill={vipcolor ? '#3B3B50' : 'orange'}
/>

{/* VIP (Triangle for Right) */}
<path
  d={`M ${canvasWidth / 2 + stageSize / 8 + 30},${canvasHeight / 2} 
      L ${canvasWidth / 2 + stageSize / 5 + 78},${canvasHeight / 2 - 100} 
      L ${canvasWidth / 2 + stageSize / 5 + 78},${canvasHeight / 2 + 100} Z`}
  fill={vipcolor ? '#3B3B50' : 'orange'}
/>

      {/* Labels (for simplicity, manual positioning can be optimized) */}
      <text x="50%" y="5%" textAnchor="middle" fill="white" fontWeight="bold">
        G4
      </text>
      <text x="50%" y="95%" textAnchor="middle" fill="white" fontWeight="bold">
        G2
      </text>
      <text x="5%" y="50%" textAnchor="middle" fill="white" fontWeight="bold">
        G3
      </text>
      <text x="95%" y="50%" textAnchor="middle" fill="white" fontWeight="bold">
        G1
      </text>

      <text x="50%" y="25%" textAnchor="middle" fill="white" fontWeight="bold">
        E4
      </text>
      <text x="50%" y="75%" textAnchor="middle" fill="white" fontWeight="bold">
        E2
      </text>
      <text x="25%" y="50%" textAnchor="middle" fill="white" fontWeight="bold">
        E3
      </text>
      <text x="75%" y="50%" textAnchor="middle" fill="white" fontWeight="bold">
        E1
      </text>

      <text x="50%" y="35%" textAnchor="middle" fill="white" fontWeight="bold">
        V4
      </text>
      <text x="50%" y="68%" textAnchor="middle" fill="white" fontWeight="bold">
        V2
      </text>
      <text x="34%" y="50%" textAnchor="middle" fill="white" fontWeight="bold">
        V3
      </text>
      <text x="68%" y="50%" textAnchor="middle" fill="white" fontWeight="bold">
        V1
      </text>
      
      <text x="50%" y="50%" textAnchor="middle" fill="white" fontWeight="bold">
        Stage
      </text>
      
    </svg>

       </div>
       <div className='ml-[40px] mt-[-60px] w-1/2'>
       <p className='flex justify-center items-center h-[40px] bg-[#444451]'>Choose Tickets</p>

       <div className='flex flex-wrap justify-center space-x-6'>
        <div className=''>
        <div className="relative inline-block" onClick={()=>setvipcolor(!vipcolor)} >
  <FontAwesomeIcon className={`h-[150px] ${vipcolor  ? "text-white" : "text-violet-500" }`}  icon={faTicketSimple} />
  <span className="absolute top-[50px] left-[60px] text-black  ">
  <FontAwesomeIcon className="h-[20px]" icon={faTicket} />
  </span>
  <p className="absolute top-[75px] left-[63px]  text-black font-bold ">
    Vip
  </p>
  <p className="absolute top-[100px] left-[20px] text-black flex">
   <span><FontAwesomeIcon icon={faIndianRupeeSign} /></span>5000/person
  </p>
</div>
        {!isVipAdded ? (
            <div className='flex items-center justify-center'>
        <button onClick={handleVipAddClick} className=" border border-[rgba(130,80,202,1)]  text-[rgba(130,80,202,1)] px-4 py-2 rounded">
          Add
        </button></div>
      ) : (
        <div className='flex justify-center'>
        <div className="flex border border-[rgba(130,80,202,1)]  text-[rgba(130,80,202,1)] items-center justify-center p-1  space-x-2">
          <button
            onClick={()=>setVipCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount))}
            className="border border-[rgba(130,80,202,1)]   pl-2 pr-2 rounded-full"
            >-</button>
          <span className="text-lg   font-bold">{Vipcount}</span>
          <button
            onClick={()=>setVipCount(prevCount => prevCount + 1)}
            className="border border-[rgba(130,80,202,1)]   pl-2 pr-2 rounded-full"
          >
            +
          </button>
        </div>
        </div>
      )}
       </div>

       <div className=''>
       <div className="relative inline-block" onClick={()=>setvvipcolor(!vvipcolor)}>
  <FontAwesomeIcon className={`h-[150px] ${vvipcolor  ? "text-white" : "text-violet-500" }`} icon={faTicketSimple} />
  <span className="absolute top-[50px] left-[60px] text-black  ">
  <FontAwesomeIcon className="h-[20px]" icon={faTicket} />
  </span>
  <p className="absolute top-[75px] left-[63px]  text-black font-bold ">
    Vvip
  </p>
  <p className="absolute top-[100px] left-[20px] text-black flex">
   <span><FontAwesomeIcon icon={faIndianRupeeSign} /></span>7000/person
  </p>
</div>
        {!isVvipAdded ? (
            <div className='flex items-center justify-center '>
        <button onClick={()=>setIsVvipAdded(true)} className="border border-[rgba(130,80,202,1)]  text-[rgba(130,80,202,1)] px-4 py-2 rounded">
          Add
        </button></div>
      ) : (
        <div className='flex justify-center'>
        <div className="flex border  border-[rgba(130,80,202,1)]  text-[rgba(130,80,202,1)] items-center justify-center p-1 space-x-2">
          <button
          onClick={()=>setVvipCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount))}
            className="border border-[rgba(130,80,202,1)]   pl-2 pr-2 rounded-full"
            >-</button>
          <span className="text-lg   font-bold">{Vvipcount}</span>
          <button
            onClick={()=>setVvipCount(prevCount => prevCount + 1)}
            className="border border-[rgba(130,80,202,1)]   pl-2 pr-2 rounded-full"
          >
            +
          </button>
        </div>
        </div>
      )}
       </div>


       <div className=''>
       <div className="relative inline-block" onClick={()=>setEconomy1color(!Economy1color)}>
  <FontAwesomeIcon className={`h-[150px] ${Economy1color  ? "text-white" : "text-violet-500" }`}  icon={faTicketSimple} />
  <span className="absolute top-[50px] left-[60px] text-black  ">
  <FontAwesomeIcon className="h-[20px]" icon={faTicket} />
  </span>
  <p className="absolute top-[75px] left-[40px]  text-black font-bold ">
    Economy-1
  </p>
  <p className="absolute top-[100px] left-[20px] text-black flex">
   <span><FontAwesomeIcon icon={faIndianRupeeSign} /></span>3000/person
  </p>
</div>
        {!isEconomy1Added ? (
            <div className='flex items-center justify-center '>
        <button onClick={()=>setIsEconomy1Added(true)} className="border border-[rgba(130,80,202,1)]  text-[rgba(130,80,202,1)] px-4 py-2 rounded">
          Add
        </button></div>
      ) : (
        <div className='flex justify-center'>
        <div className="flex border  border-[rgba(130,80,202,1)]  text-[rgba(130,80,202,1)] items-center justify-center p-1 space-x-2">
          <button
          onClick={()=>setEconomy1Count(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount))}
            className="border border-[rgba(130,80,202,1)]   pl-2 pr-2 rounded-full"
            >-</button>
          <span className="text-lg   font-bold">{Economy1count}</span>
          <button
            onClick={()=>setEconomy1Count(prevCount => prevCount + 1)}
            className="border border-[rgba(130,80,202,1)]   pl-2 pr-2 rounded-full"
          >
            +
          </button>
        </div>
        </div>
      )}
       </div>

       <div className=''>
       <div className="relative inline-block" onClick={()=>setEconomy2color(!Economy2color)}>
  <FontAwesomeIcon className={`h-[150px] ${Economy2color  ? "text-white" : "text-violet-500" }`}  icon={faTicketSimple} />
  <span className="absolute top-[50px] left-[60px] text-black  ">
  <FontAwesomeIcon className="h-[20px]" icon={faTicket} />
  </span>
  <p className="absolute top-[75px] left-[40px]  text-black font-bold ">
    Economy-2
  </p>
  <p className="absolute top-[100px] left-[20px] text-black flex">
   <span><FontAwesomeIcon icon={faIndianRupeeSign} /></span>2500/person
  </p>
</div>
        {!isEconomy2Added ? (
            <div className='flex items-center justify-center '>
        <button onClick={()=>setIsEconomy2Added(true)} className="border border-[rgba(130,80,202,1)]  text-[rgba(130,80,202,1)] px-4 py-2 rounded">
          Add
        </button></div>
      ) : (
        <div className='flex justify-center'>
        <div className="flex border  border-[rgba(130,80,202,1)]  text-[rgba(130,80,202,1)] items-center justify-center p-1 space-x-2">
          <button
          onClick={()=>setEconomy2Count(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount))}
            className="border border-[rgba(130,80,202,1)]   pl-2 pr-2 rounded-full"
            >-</button>
          <span className="text-lg   font-bold">{Economy2count}</span>
          <button
            onClick={()=>setEconomy2Count(prevCount => prevCount + 1)}
            className="border border-[rgba(130,80,202,1)]   pl-2 pr-2 rounded-full"
          >
            +
          </button>
        </div>
        </div>
      )}
       </div>

       <div className=''>
       <div className="relative inline-block" onClick={()=>setGeneral1color(!General1color)}>
  <FontAwesomeIcon className={`h-[150px] ${General1color  ? "text-white" : "text-violet-500" }`}  icon={faTicketSimple} />
  <span className="absolute top-[50px] left-[60px] text-black  ">
  <FontAwesomeIcon className="h-[20px]" icon={faTicket} />
  </span>
  <p className="absolute top-[75px] left-[40px]  text-black font-bold ">
    General-1
  </p>
  <p className="absolute top-[100px] left-[20px] text-black flex">
   <span><FontAwesomeIcon icon={faIndianRupeeSign} /></span>1000/person
  </p>
</div>
        {!isGeneral1Added ? (
            <div className='flex items-center justify-center '>
        <button onClick={()=>setIsGeneral1Added(true)} className="border border-[rgba(130,80,202,1)]  text-[rgba(130,80,202,1)] px-4 py-2 rounded">
          Add
        </button></div>
      ) : (
        <div className='flex justify-center'>
        <div className="flex border  border-[rgba(130,80,202,1)]  text-[rgba(130,80,202,1)] items-center justify-center p-1 space-x-2">
          <button
          onClick={()=>setGeneral1Count(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount))}
            className="border border-[rgba(130,80,202,1)]   pl-2 pr-2 rounded-full"
            >-</button>
          <span className="text-lg   font-bold">{General1count}</span>
          <button
            onClick={()=>setGeneral1Count(prevCount => prevCount + 1)}
            className="border border-[rgba(130,80,202,1)]   pl-2 pr-2 rounded-full"
          >
            +
          </button>
        </div>
        </div>
      )}
       </div>

       <div className=''>
       <div className="relative inline-block" onClick={()=>setGeneral2color(!General2color)}>
  <FontAwesomeIcon className={`h-[150px] ${General2color  ? "text-white" : "text-violet-500" }`}  icon={faTicketSimple} />
  <span className="absolute top-[50px] left-[60px] text-black  ">
  <FontAwesomeIcon className="h-[20px]" icon={faTicket} />
  </span>
  <p className="absolute top-[75px] left-[40px]  text-black font-bold ">
    General-2
  </p>
  <p className="absolute top-[100px] left-[20px] text-black flex">
   <span><FontAwesomeIcon icon={faIndianRupeeSign} /></span>500/person
  </p>
</div>
        {!isGeneral2Added ? (
            <div className='flex items-center justify-center '>
        <button onClick={()=>setIsGeneral2Added(true)} className="border border-[rgba(130,80,202,1)]  text-[rgba(130,80,202,1)] px-4 py-2 rounded">
          Add
        </button></div>
      ) : (
        <div className='flex justify-center'>
        <div className="flex border  border-[rgba(130,80,202,1)]  text-[rgba(130,80,202,1)] items-center justify-center p-1 space-x-2">
          <button
          onClick={()=>setGeneral2Count(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount))}
            className="border border-[rgba(130,80,202,1)]   pl-2 pr-2 rounded-full"
            >-</button>
          <span className="text-lg   font-bold">{General2count}</span>
          <button
            onClick={()=>setGeneral2Count(prevCount => prevCount + 1)}
            className="border border-[rgba(130,80,202,1)]   pl-2 pr-2 rounded-full"
          >
            +
          </button>
        </div>
        </div>
      )}
       </div>

       


       </div>
       <div className='flex justify-center items-center mt-10'>
       <p className='flex justify-center items-center w-[150px] h-[40px] bg-[rgba(130,80,202,1)] '>Continue</p>
       </div>
       </div>
       </div>
    </div>
   
  )
}
