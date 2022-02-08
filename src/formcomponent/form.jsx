import React from "react";
import './form.css';
import Formside from "./formside";
import Left from "./left";
import Right from "./Right";
const Form=()=>{

    return(

<div className="grid grid-cols-4  min-h-[100vh]">
<Left leftStyle=" lg:col-span-1 lg:flex md:flex hidden  md:col-span-1 "/>
<Right rightStyle="lg:col-span-3 md:col-span-3 col-span-4" />



    
</div>   


// <div>
        //     <Formside/>
        // <div className="Form-header mt-14 ">
        // <div >
        //     <h1 className="Sign">Sign In</h1>
        //     <form action="">
        //     <label htmlFor="Email" className="field"> Email</label><br />
        //     <input type="text" placeholder="Enter Email" className="field" />
        //     <br />
        //     <label htmlFor="Password" className="field">Password</label> <br />
        //     <input  type="Password" placeholder="Enter Password" className="field" />
        //     <span className="field">Forgot Password</span>
        //     <br />
        //     <br />
        //     <button className="field" type="submit"> LOGIN IN</button>
        //     </form>
        // </div>
        // </div>
        // </div>
    )
    
};

export default Form;
