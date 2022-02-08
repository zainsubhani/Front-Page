import React from 'react';
import Mainthree from './mainthree';
import Services from './Services';
import Works from './Works';
import About from '../src/About'
import Description from './Description';
import Footerone from './footerone';
import Footersecondrow from './Footersecondrow';
import FooterThird from './FooterThird';
import FooterEnd from './FooterEnd';
import FooterEnd2 from './FooterEnd2';

const MainPage = () => {
  return <div className='text-white justify-center ' >
      <div className='w-[100%] h-[50vh] ' >
      <p className='text-7xl font-bold col-span-4'>We 're a digital <br />agency.</p>
      <br />
      </div>
      <button class="hover:bg-red-500 text-White-700 font-semibold hover:text-white py-3 px-10 border border-red-500 hover:border-transparent rounded transition ease-in-out delay-150	">
  Getting Started
</button>

   <Mainthree/>
   <Services/> 
   <Works/>
   <About/>
   <Description/>
   <Footerone/>  
   <Footersecondrow/> 
   <FooterThird/>  
   <FooterEnd/>
   <FooterEnd2/>
  </div>;
};
export default MainPage;
