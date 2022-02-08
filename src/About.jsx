import React from 'react';
import one from '../src/van.PNG'
import too from '../src/too.PNG'
import three from '../src/three.PNG'

const About = () => {
  return <div>
      <div className='grid grid-cols-12 text-black'>
          <h1 className='font-bold col-span-6 text-5xl'>About</h1>
      <p className='col-span-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti temporibus fuga earum asperiores, alias excepturi sit. Impedit, fugit laudantium.</p>
      </div>
      <p className='text-red-500 font-bold'>WE 'RE MORE THAN A DIGITAL AGENCY</p>
      <div className='grid grid-rows-2 grid-flow-col gap-5 text-black px-20 py-20'>
  <div className='row-span-3'><img src={one} alt="" /></div>
  <div className='col-span-2'><img src={too} alt="" /></div>
  <div className='row-span-2 col-span-2'><img src={three} alt="" /></div>
</div>
  </div>;
};

export default About;

