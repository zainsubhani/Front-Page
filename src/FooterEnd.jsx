import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import BlurOnIcon from '@mui/icons-material/BlurOn';
const FooterEnd = () => {
  return <div className='w-[100] h-[40vh] bg-[#1B1B1B] text-white grid grid-cols-12 py-20 '>
      <div className='col-span-4 px-40 text-3xl'>
     
      <FacebookRoundedIcon/>
      <TwitterIcon/>
      <InstagramIcon/>
      <BlurOnIcon/>




      </div>
      <div className='col-span-4' >
          <h1>Let's Talk?</h1>

      </div>
      <div className='col-span-4' >
          <button>Make an enquiry!</button>


      </div>
       </div>;

};

export
 default FooterEnd;
