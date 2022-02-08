import React from 'react';
import BGIMG from '../src/bgimage.jpg';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MainPage from './MainPage';

const FrontPage = () => {
  return <div style={{ backgroundImage: `url(${BGIMG})`,backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', height:'100vh'}}>
      <div className='text-white grid grid-cols-12 p-[10px] h-[18%] bg-black content-center	 '>
      <h1 className=' text-3xl font-bold col-span-4'>Gentium.</h1>
      
      <ul className='flex justify-around col-span-8 font-extrabold '>
          <li className='decoration-pink-50		'><a href ="#">Home</a></li>
          <li className='decoration-emerald-100	'> <a href ="#">Services</a></li>
          <li className='decoration-emerald-100	'><a href ="#">Works</a></li>
          <li className='decoration-emerald-100	'><a href ="#">About</a></li>
          <li className='decoration-emerald-100	'><a href ="#">Client</a> </li>
          <li className='decoration-emerald-100	'><a href ="#"> Blog </a></li>
          <li className='decoration-emerald-100	'> <a href ="#">Contact </a></li>
          <li className='decoration-emerald-100	'> <SearchOutlinedIcon/></li>
      </ul>
      </div>
      <MainPage/>

  </div>;
  
  
};

export default FrontPage;
