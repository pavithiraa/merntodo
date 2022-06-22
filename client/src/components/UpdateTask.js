import "./UpdateTask.css";
import React, { useState } from "react";
import axios from "axios";

const UpdateTask = (props) => {
  const [task, setTask] = useState(props.task.todo);
 
  const Updatetask= ()=>{
    if(task.trim()=== "" || props.task.todo === task){
        props.removePopup()
    }else{
        axios.put(`http://localhost:5000/api/tasks/${props.task._id}`,{
            _id : props.task._id,
            todo : task,
            isComplete : props.task.isComplete
        }).then(res =>{
            props.removePopup()
            props.updatetask(res.data)
        }).catch(err =>console.log(err))
    }
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <input
          type="text"
          placeholder="update task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={()=>Updatetask()}>Update</button>
      </div>
    </div>
  );
};

export default UpdateTask;
