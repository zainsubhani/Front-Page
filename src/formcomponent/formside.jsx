import React from 'react';
import './form.css';
import logoimage from './aioulogo.png';

const Formside = () => {
  return (
  <div className='sidebar'>
      
      <img src={logoimage} alt='universitylogo' className='imagestyle'  />
      <h1 className='white'>          Allama Iqbal open University
      </h1>
  </div>)
};

export default Formside;
