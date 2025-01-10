import React from 'react'

import './styles/home.css'
import { register } from 'swiper/element/bundle';
import Bukitheader from './Bukitheader';

import hdevent1 from '../images/home/hdevent1.jpg'
import hdevent2 from '../images/home/hdevent2.jpg'
import hdevent3 from '../images/home/hdevent3.jpg'
import hdevent4 from '../images/home/hdevent4.jpg'
import hdevent5 from '../images/home/hdevent5.jpg'
import hdevent6 from '../images/home/hdevent6.jpg'
import hdevent7 from '../images/home/hdevent7.jpg'
import hdevent8 from '../images/home/hdevent8.jpg'
import hdevent9 from '../images/home/hdevent9.jpg'
import hdevent10 from '../images/home/hdevent10.jpg'
import hdevent11 from '../images/home/hdevent11.jpg'
import hdevent15 from '../images/home/hdevent15.jpg'
import hdevent16 from '../images/home/hdevent16.jpg'
import hdevent17 from '../images/home/hdevent17.jpg'
import hdevent18 from '../images/home/hdevent18.jpg'
import hdevent19 from '../images/home/hdevent19.jpg'
import hdevent20 from '../images/home/hdevent20.jpg'
import hdevent21 from '../images/home/hdevent21.jpg'
import hdevent22 from '../images/home/hdevent22.jpg'

import star from '../images/star.png'
import youtube from '../images/youtube.png'

import music1 from '../images/home/music1.jpg'
import music2 from '../images/home/music2.jpg'
import music3 from '../images/home/music3.jpg'
import music4 from '../images/home/music4.jpg'
import music5 from '../images/home/music5.jpg'



export default function Home() {
    register();
    const slideimg=[hdevent1,hdevent6,hdevent8]
    const lifeEventSlide=[hdevent4,hdevent5,hdevent11,hdevent7,hdevent2,hdevent9,hdevent10,hdevent3]
  return (
    <div >
       
                <Bukitheader/>
                 

      
      <div >
      <main className='container2 img-slide mt-[-50px]'>
    <swiper-container space-between="10" slides-per-view="1" pagination="true" navigation="true" >
      {slideimg.map((image,index)=>{
        return <swiper-slide key={index}><img  src={image} alt='' loading="lazy"></img></swiper-slide>
      })}

            
        </swiper-container>
    </main>
    </div>

      <div className='container3 text-white'>
         <p>The Best of Life Shows</p>
         <div className='container3-img ml-[-55px]'>
        
            <main className=''>
    <swiper-container className=" " space-between="10" slides-per-view="4" pagination="false" navigation="true" >
      {lifeEventSlide.map((image,index)=>{
        return <swiper-slide className="" key={index}><img className='w-[250px] h-[300px]' loading="lazy" src={image} alt='' ></img></swiper-slide>
      })}

            
        </swiper-container>
    </main>
         </div>
      </div>

      <div className='container4 text-white' >
         <p>Recommended Shows</p>
         <div className='container4-img'>
         <swiper-container className=" " space-between="10" slides-per-view="4" pagination="false" navigation="true" >
         <swiper-slide>
          <div className='container4img-card'>
            <img src={hdevent15} alt='event1'></img>
            <p className=''>Frozen II</p>
            <div className='container4-rating mt-[8px]'><span ><img src={star} alt='' loading="lazy"></img></span><span className='mt-1 ml-[10px]'>8.1/10</span></div>
            <div className='container4-desc'><h6>Adventure/Fastasy</h6></div>
            </div>
            </swiper-slide>
          
            <swiper-slide>
            <div className='container4img-card'>
            <img src={hdevent16} alt='event2'></img>
            <p>Inside Out</p>
            <div className='container4-rating mt-[8px]'><span ><img src={star} alt='' loading="lazy"></img></span><span className='mt-1 ml-[8px]'>8.1/10</span></div>
            <div className='container4-desc'>Adventure/Fastasy</div>
            </div>
            </swiper-slide>
            <swiper-slide>
            <div className='container4img-card'>
            <img src={hdevent17} alt='event3'></img>
            <p>Tangled</p>
            <div className='container4-rating mt-[8px]'><span ><img src={star} alt='' loading="lazy"></img></span><span className='mt-1 ml-[10px]'>8.1/10</span></div>
            <div className='container4-desc'>Adventure/Fastasy</div>
            </div>
            </swiper-slide>

            <swiper-slide>
            <div className='container4img-card'>
            <img src={hdevent18} alt='event4'></img>
            <p>Finding Dory</p>
            <div className='container4-rating mt-[8px]'><span ><img src={star} alt='' loading="lazy"></img></span><span className='mt-1 ml-[10px]'>8.1/10</span></div>
            <div className='container4-desc'>Adventure/Fastasy</div>
            </div>
            </swiper-slide>
            <swiper-slide>
          <div className='container4img-card'>
            <img src={hdevent15} alt='event1'></img>
            <p className=''>Frozen II</p>
            <div className='container4-rating mt-[8px]'><span ><img src={star} alt='' loading="lazy"></img></span><span className='mt-1 ml-[10px]'>8.1/10</span></div>
            <div className='container4-desc'><h6>Adventure/Fastasy</h6></div>
            </div>
            </swiper-slide>
          
            </swiper-container>

         </div>
      </div>

      {/* <div className='bg-[rgba(26,51,101,1)] mt-[50px] h-[600px] '> */}
      
        <div className='ml-[65px] mt-[60px] text-white'>
          <div className='flex'>
        <img className='w-[75px] h-[60px]' src={youtube} alt='' loading="lazy"></img>
        <div>
        <h2 className='ml-[15px] text-white font-roboto font-semibold text-[25px] leading-[37.5px]'>PREMIERE</h2>
        <p className="ml-[15px] font-roboto text-white font-normal text-[14px] leading-[16.41px]">Watch new shows at anywhere,every weekends</p>
        </div>
        </div>

        <div className='container5'>
         <p  className="mt-[35px] font-roboto font-medium text-[20px] leading-[23.44px]"> New Realeases</p>
         <div className=' flex container5-img mt-[20px] ml-[-75px]'>
          <swiper-container space-between="10" slides-per-view="4" pagination="false" navigation="true">
    <swiper-slide>
          <div>
          <div className="relative ">
      <img 
        src={hdevent19}
        alt="Example" 
        className="w-[250px] h-[300px] rounded-xl "
        loading="lazy"
      />
      <div className="absolute bottom-[5px] left-[7px] text-center text-white font-medium text-xl bg-[rgba(255,67,67,1)] p-1 w-[160px]">
      
        PREMIERE
      </div>
    </div>
            <div>
              <p className='font-roboto font-bold text-[20px] leading-[23.44px]'>Name</p>
              <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Language</p>
            </div>
          </div>
          </swiper-slide>

          <swiper-slide>
          <div>
          <div className="relative ml-[20px]">
      <img 
        src={hdevent20}
        alt="Example" 
        className="w-[250px] h-[300px] rounded-xl"
        loading="lazy"
      />
      <div className="absolute bottom-[5px] left-[7px] text-center text-white font-medium text-xl bg-[rgba(255,67,67,1)] p-1 w-[160px]">
      
        PREMIERE
      </div>
    </div>
            <div>
              <p className='font-roboto font-bold text-[20px] leading-[23.44px] ml-[20px] '>Name</p>
              <p className='font-roboto font-normal text-[16px] leading-[23.44px] ml-[20px]'>Language</p>
            </div>
          </div>
          </swiper-slide>

          <swiper-slide>
          <div>
          <div className="relative ml-[20px]">
      <img 
        src={hdevent21}
        alt="Example" 
        className="w-[250px] h-[300px] rounded-xl"
        loading="lazy"
      />
      <div className="absolute bottom-[5px] left-[7px] text-center text-white font-medium text-xl bg-[rgba(255,67,67,1)] p-1 w-[160px]">
      
        PREMIERE
      </div>
    </div>
            <div>
              <p className='font-roboto font-bold text-[20px] leading-[23.44px] ml-[20px]'>Name</p>
              <p className='font-roboto font-normal text-[16px] leading-[23.44px] ml-[20px]'>Language</p>
            </div>
          </div>
          </swiper-slide>

          <swiper-slide>
          <div>
          <div className="relative ml-[20px]">
      <img 
        src={hdevent22}
        alt="Example" 
        className="w-[250px] h-[300px] rounded-xl"
        loading="lazy"
      />
      <div className="absolute bottom-[5px] left-[7px] text-center text-white font-medium text-xl bg-[rgba(255,67,67,1)] p-1 w-[160px]">
      
        PREMIERE
      </div>
    </div>
            <div>
              <p className='font-roboto font-bold text-[20px] leading-[23.44px] ml-[20px]'>Name</p>
              <p className='font-roboto font-normal text-[16px] leading-[23.44px] ml-[20px]'>Language</p>
            </div>
          </div>
          </swiper-slide>

          <swiper-slide>
          <div>
          <div className="relative ml-[20px]">
      <img 
        src={hdevent20}
        alt="Example" 
        className="w-[250px] h-[300px] rounded-xl"
        loading="lazy"
      />
      <div className="absolute bottom-[5px] left-[7px] text-center text-white font-medium text-xl bg-[rgba(255,67,67,1)] p-1 w-[160px]">
      
        PREMIERE
      </div>
    </div>
            <div>
              <p className='font-roboto font-bold text-[20px] leading-[23.44px] ml-[20px]'>Name</p>
              <p className='font-roboto font-normal text-[16px] leading-[23.44px] ml-[20px]'>Language</p>
            </div>
          </div>
          </swiper-slide>
          
           </swiper-container>
         </div>
      </div>
        
        
      </div>
      
      <div className='container6 mt-[10px]  ml-[70px] text-white'>
        <div><p className=' text-white font-roboto font-semibold text-[25px] leading-[37.5px]' >Your Music Studio</p></div>
        <div className='ml-[-50px] mt-[25px] '>
          <swiper-container space-between="10" slides-per-view="4" pagination="false" navigation="true">
            <swiper-slide>
              <div className='relative'>
                <img className=' w-[250px] h-[300px] rounded-xl ' src={music1} alt='' loading="lazy"></img>
                <div className="absolute left-[10px] bottom-[105px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
      <div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px]  text-white mt-[10px] '>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music5} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music3} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music4} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music2} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>

      </div>


      <div className='container6 mt-[20px]  ml-[70px] text-white'>
        <div><p className=' text-white font-roboto font-semibold text-[25px] leading-[37.5px]' >Outdoor Games</p></div>
        <div className='ml-[-50px] mt-[25px] '>
          <swiper-container space-between="10" slides-per-view="4" pagination="false" navigation="true">
            <swiper-slide>
              <div className='relative'>
                <img className=' w-[250px] h-[300px] rounded-xl ' src={music1} alt='' loading="lazy"></img>
                <div className="absolute left-[10px] bottom-[105px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
      <div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px]  text-white mt-[10px] '>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music5} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music3} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music4} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music2} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>


      </div>



      <div className='container6 mt-[20px]  ml-[70px] text-white'>
        <div><p className=' text-white font-roboto font-semibold text-[25px] leading-[37.5px]' >Laughter Therapy</p></div>
        <div className='ml-[-50px] mt-[25px] '>
          <swiper-container space-between="10" slides-per-view="4" pagination="false" navigation="true">
            <swiper-slide>
              <div className='relative'>
                <img className=' w-[250px] h-[300px] rounded-xl ' src={music1} alt='' loading="lazy"></img>
                <div className="absolute left-[10px] bottom-[105px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
      <div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px]  text-white mt-[10px] '>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music5} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music3} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music4} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music2} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>


      </div>



      <div className='container6 mt-[20px]  ml-[70px] text-white'>
        <div><p className=' text-white font-roboto font-semibold text-[25px] leading-[37.5px]' >Popular Shows</p></div>
        <div className='ml-[-50px] mt-[25px] '>
          <swiper-container space-between="10" slides-per-view="4" pagination="false" navigation="true">
            <swiper-slide>
              <div className='relative'>
                <img className=' w-[250px] h-[300px] rounded-xl ' src={music1} alt='' loading="lazy"></img>
                <div className="absolute left-[10px] bottom-[105px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
      <div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px]  text-white mt-[10px] '>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music5} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music3} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music4} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music2} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>

      </div>


      <div className='container6 mt-[20px]  ml-[70px] text-white'>
        <div><p className=' text-white font-roboto font-semibold text-[25px] leading-[37.5px]' >The latest Plays</p></div>
        <div className='ml-[-50px] mt-[25px] '>
          <swiper-container space-between="10" slides-per-view="4" pagination="false" navigation="true">
            <swiper-slide>
              <div className='relative'>
                <img className=' w-[250px] h-[300px] rounded-xl ' src={music1} alt='' loading="lazy"></img>
                <div className="absolute left-[10px] bottom-[105px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
      <div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px]  text-white mt-[10px] '>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music5} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music3} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music4} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music2} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>


      </div>


      <div className='container6 mt-[20px]  ml-[70px] text-white'>
        <div><p className=' text-white font-roboto font-semibold text-[25px] leading-[37.5px]' >Top Game & Sport Events</p></div>
        <div className='ml-[-50px] mt-[25px] '>
          <swiper-container space-between="10" slides-per-view="4" pagination="false" navigation="true">
            <swiper-slide>
              <div className='relative'>
                <img className=' w-[250px] h-[300px] rounded-xl ' src={music1} alt='' loading="lazy"></img>
                <div className="absolute left-[10px] bottom-[105px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
      <div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px]  text-white mt-[10px] '>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music5} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music3} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music4} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music2} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>


      </div>

      <div className='container6 mt-[20px]  ml-[70px] text-white'>
        <div><p className=' text-white font-roboto font-semibold text-[25px] leading-[37.5px]' >Explore Fun Activities</p></div>
        <div className='ml-[-50px] mt-[25px] '>
          <swiper-container space-between="10" slides-per-view="4" pagination="false" navigation="true">
            <swiper-slide>
              <div className='relative'>
                <img className=' w-[250px] h-[300px] rounded-xl ' src={music1} alt='' loading="lazy"></img>
                <div className="absolute left-[10px] bottom-[105px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
      <div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px]  text-white mt-[10px] '>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music5} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music3} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music4} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px] text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px]'>Details</p>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div className='relative'>
                <img className='w-[250px] h-[300px] rounded-xl' src={music2} alt='' loading="lazy"></img>
                <div className="absolute left-[7px] bottom-[98px]  text-center text-white font-medium text-xl bg-[rgba(26,51,101,1)] p-1 w-[160px]">
      
        SUN,JAN 28
      </div>
                <p className='font-roboto font-bold text-[20px] leading-[23.44px] mt-[10px]  text-white'>The Name of the Music Event</p>
                <p className='font-roboto font-normal text-[16px] leading-[23.44px] '>Details</p>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>


      </div>

   
        </div>
    
  )
}
