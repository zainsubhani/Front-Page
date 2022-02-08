import React from 'react';
import footerone from '../src/footer1.PNG'
const Footerone = () => {
  return <div className='grid grid-cols-12 text-black'>
    <div className="lg:col-span-3 col-span-0"></div>
      <div className='lg:col-span-3 col-span-12 ' ><img src={footerone} alt="" className='h-[420px] w-[420px]' /></div>
      <div className='lg:col-span-4 col-span-12 p-5'>
        <hr className='w-1/5 bg-rose-700 text-rose-700 h-0.5 ' />
          <h1 className='font-bold text-4xl pt-4'>What Clients Say.</h1>
          <p className='text-rose-700 text-sm font-bold pt-3'>WE'RE MORE THAN A DIGITAL AGENCY</p>
          <p  className="pt-10 text-lg text-gray-400">
          We are motivated by the satisfaction of our clients. Put your  trust in us and share in our growth Asset Management is made  up of a team of expert, committed and experienced people with  a passion for financial markets. Our goal is to achieve  continuous and sustainable growth of our clients.

          </p>
      </div>
  
  </div>;
};

export default Footerone;
