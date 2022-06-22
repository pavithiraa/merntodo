import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Addtask from "./components/Addtask";
import Todolist from "./components/Todolist";
import UpdateTask from "./components/UpdateTask";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [tasktoUpdate, setTasktoUpdate] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((res) => {
        setTodolist(res.data);
        // console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const addTask = (newTask) => {
    setTodolist([...todolist, newTask]);
  };

  const taskComplete = (task) => {
    const newList = [...todolist];
    newList.forEach((item) => {
      if (item._id === task._id) {
        item.isComplete = task.isComplete;
      }
    });
    setTodolist(newList);
  };
  const removeTodo = (task) => {
    const newList = todolist.filter((item) => !(item._id === task._id));
    setTodolist(newList);
  };

  const updatetask = (task) => {
    const newList = [...todolist]
    newList.forEach(item => {
      if(item._id === task._id){
        item.todo = task.todo
      }
    })
    setTodolist(newList);
  };

  return (
    <div>
      <Addtask addTask={addTask} />
      <Todolist
        todolist={todolist}
        taskComplete={taskComplete}
        removeTodo={removeTodo}
        tasktoUpdate ={task =>setTasktoUpdate(task)}
        showPopup ={()=>setShowPopup(!showPopup)}
      />
      {showPopup && (
        <UpdateTask
          task={tasktoUpdate}
          updatetask={updatetask}
          removePopup={() => setShowPopup(!showPopup)}
        />
      )}
    </div>
  );
}

export default App;
