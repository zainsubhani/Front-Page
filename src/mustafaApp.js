import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [data, setData] = useState([
    { name: "", education: "", year: "", DOB: "" },
  ]);
  
  const addFeild = (id) => {
    let newFeild = data;
    newFeild.push({  name: "", education: "", year: "", DOB: ""     });
    setData([...newFeild]);
  };
  const remove = (id) => {
    let removeFeild = data;
    removeFeild.splice(id, 1);
    setData([...removeFeild]);
  };

  const submitforma=()=>{
       
  
  }

  return (
    <div>
      <br />

      <button onClick={addFeild}>Add</button>

      {data.map((v, k) => (
      
      <div>
          name:
          <input name="name" onChange={(e)=>{
              let feildData=data
              feildData[k].name=e.target.value
              setData([...feildData])
          }} value={v.name} />
          education:
          <input name="education"onChange={(e)=>{
              let feildData=data
              feildData[k].education=e.target.value
              setData([...feildData])
          }} value={v.education} />
          year: <input name="year" onChange={(e)=>{
              let feildData=data
              feildData[k].year=e.target.value
              setData([...feildData])
          }} value={v.year} />
          <button onClick={(e) => remove(k)}>Remove</button>
        </div>
      ))}
      <button onClick={()=>console.log(data,"datta")}>submit</button>
    </div>

);
};
export default App;
