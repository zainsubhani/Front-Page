import React from 'react';
import upperimag from '../secondpageaiou/aioulogo.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SignalWifi0BarOutlinedIcon from '@mui/icons-material/SignalWifi0BarOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Headerup = (Headerstyle) => {
  return <div className={`${Headerstyle} w-[100%] h-screen bg-[#E5E5E5]  `}>
      <img src={upperimag} alt="logo"   />
      <div>
          <ul className='w-1/5 h-screen bg-[#E5E5E5]' >
              <br />
              <li class='focus:bg-[00AC73]' ><HomeOutlinedIcon/><a href="#">Dashboard</a></li>
              <br />
              <li><a href="#"><CallOutlinedIcon/> Contact</a></li>
              <br />
              <li><a href="#"> <CalendarTodayOutlinedIcon/> Scheduling</a></li>
              <br />
              <li><a href="#"> <DescriptionOutlinedIcon/> Templates</a></li>
              <br />
              <li><a href="#"><LanguageOutlinedIcon/>Language</a></li>
              <br />
              <li><a href="#"><SignalWifi0BarOutlinedIcon/>Broadcasting</a></li>
              <br />
              <li><a href="#"><SettingsOutlinedIcon/>Setting</a></li>
              <br />
              <li><a href="#"><LogoutOutlinedIcon/>Logout</a></li>
          </ul>
          <div className='bg-sky-500 w-4/5 h-full flex flex-start'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, reiciendis sunt officia illum voluptates quasi sapiente sequi, alias molestiae laboriosam quam veritatis provident dolorum est non hic illo magni error.</p>
              


          </div>
      </div>
     
         
          
    
  </div>;
};

export default Headerup;
