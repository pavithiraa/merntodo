import "./Addtask.css";
import React, { useState } from "react";
import axios from 'axios'

const Addtask = (props) => {
  const [task, setTask] = useState("");
  const Addtask =()=>{
    if(task.trim() === ''){
        return
    }else{
     axios.post('http://localhost:5000/api/tasks',{
        todo:task,
        isComplete: false
     }).then(res => {
        setTask('')
        props.addTask(res.data)
     }).catch(err =>console.log(err))
    }
  }
  return (
    <div className="addtask">
      <input
        type="text"
        placeholder="add task ..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={()=>Addtask()}>Add task</button>
    </div>
  );
};

export default Addtask;
