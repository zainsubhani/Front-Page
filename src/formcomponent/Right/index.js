import React, { useState } from 'react';
import lastimage from "../aioulogo.png"

const Right = ({rightStyle}) => {
    
    const [formdata,setdata]=useState({name:"zain",password:"123"})
    const handleinput=(e)=>{
        setdata({...formdata,[e.target.name]:e.target.value});
        console.log(e.target.name)

    }

    const Buttonvalue=()=>{
        console.log(formdata);
        

    }
return <div className={`${rightStyle} flex flex-col justify-center lg:px-20 md:px-20 px-10  `}><p className='font-bold text-3xl pb-5 text-[#00AC73]'>Sign In</p>
  <div class="w-full ">
  <form class=" w-[100%]">
    <div class="mb-4">
      <label class="block  text-xs font-light mb-2" for="username">
        Username
      </label>
      <input name="name" onChange={handleinput} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-[#00AC73]" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class=" text-xs font-thin mb-2" for="password" >
        Password
      </label>
      <input name="password"  onChange={handleinput} class="shadow appearance-none border focus:outline-[#00AC73] rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight " id="password" type="password" placeholder="******************"/>
      <p class=" text-xs font-thin text-right">Forget Password  </p>
 
    </div>
    <div class="flex items-center justify-end ">
      <button onClick={Buttonvalue} class="bg-[#00AC73] hover:bg-green text-white font-bold py-2 px-7  rounded-3xl focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
       
    </div>
  </form>
<img src={lastimage} class="absolute top-[88%] left-[88%] h-16"  />
</div>
  </div>;
};

export default Right;
