import React from 'react';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
const Mainthree = () => {
  return <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1  gap-20 lg:px-20 md:px-10 px-10    '>
      <div className='   bg-rose-500 p-10 flex flex-col'>
      <AssessmentTwoToneIcon  className="text-[40px] "/>
      <h1>Future Vision</h1>
          <p> It is a long established fact that a reader will be distacted by the readable content of a page</p>

      </div>
      <div className='   bg-rose-500 p-10 flex flex-col'>
      <RocketLaunchTwoToneIcon/>
          <p><h1>Product Design</h1>There are many variations of passages of available, but the majority alteration in some form.</p>

      </div>
      <div className='   bg-rose-500 p-10 flex flex-col'>
       <PieChartRoundedIcon />
          <p><h1>Inovative Solutions</h1>The generated Lorem is therefore always free from repetition, injected humour</p>

      </div>
      

  </div>;
};

export default Mainthree;
