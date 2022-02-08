import React from 'react';
import Firstimage from '../src/one.PNG';
import SecondImage from '../src/seconds.PNG';
import ThirdImage from '../src/Third.PNG';
const Works = () => {
  return <div > 
      <div className=' flex flex-end grid grid-cols-12 px-10 py-10 '>
      <h1 className='font-bold text-5xl col-span-11 text-black'>Works</h1>
      <button className='col-span-1 bg-transparent hover:bg-red-500 text-stone-800	 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded' >View All</button>
      <p className='text-red-500 font-bold'>THINGS WE 'VE MADE</p>
      
      </div>
      <div className='grid grid-cols-12'>
          <div className='col-span-4' >
              <img src={Firstimage} alt="" />


          </div>
          <div className='col-span-4'>
              <img src={SecondImage} alt="" />
          </div>
          <div className='col-span-4'>
              <img src={ThirdImage} alt="" />
          </div>
      </div>
    </div>;
};

export default Works;