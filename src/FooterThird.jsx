import React from 'react';
import FA from '../src/A.PNG';
import FAB from '../src/B.PNG';
import FAC from '../src/C.PNG'
const FooterThird = () => {
  return <div className='py-10'>
      <h1 className='text-black text-center font-bold text-3xl'>Latest News</h1>
      <p className='text-red-600 text-center font-semibold py-10'>CHECK OUT SOME OF OUR THINKING</p>
  <div className='grid grid-cols-12'>
      <div className='col-span-4'>
          <img src={FA} alt="" />
      </div>
      <div className='col-span-4'>
          <img src={FAB} alt="" />
      </div>
      <div className='col-span-4'>
          <img src={FAC} alt="" />
      </div>

      </div>
  </div>
  
};

export default FooterThird;
