import React, {useState} from 'react';
import './App.css';

const App=()=> {
  const [inputlist,setInputList] = useState("");
  const [items,setitems] = useState([]);
  
  const itemEvent = (event)=>{
    setInputList(event.target.value);

  };
  const listofitem= () =>{
    setitems((olditems)=>{
      return[...olditems , inputlist];

    });
    setInputList('')

  }
  
  return (
    <div className='main-div'>
      
      
      <div className='centre-div'>
        <h1 className='header'>To Do List</h1> 
        <input type="text" placeholder='Add a Item' value={inputlist} onChange={itemEvent} />
       
        <button onClick={listofitem} className='btn'>+</button>
        <ol>
          <li>{setInputList}</li>
          {items.map((itemval)=>{
            return <li>{itemval}</li>
          })}
        
        </ol>
        
      </div>
      
    
    </div>

  );
}

export default App;
