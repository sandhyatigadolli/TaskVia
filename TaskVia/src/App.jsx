import { useState } from 'react'
import Taskform from './Components/Taskform.jsx'
import Tasklist from './Components/Tasklist.jsx'
import Progresstracker from './Components/Progresstracker.jsx'
import './App.css'
import { useEffect } from 'react'

 function App() {
  const [tasks, setTasks] = useState([])


useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("tasks"));
  if (saved) setTasks(saved);
}, []);

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updateTask,index) =>{
    const newtask = [...tasks];
    newtask[index] = updateTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i!=index));
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className='app'>
      <h1>TaskVia</h1>
      <p><i>Your friendly Task Manager</i></p><br></br>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks}
      updateTask={updateTask}
      deleteTask={deleteTask} />
      <Progresstracker  tasks = {tasks}/>

       {tasks.length>0 && 
    (<button onClick= {clearTasks} className="action-btn clear-btn"> Clear All Tasks</button>)}
      

    </div>
  )
}

export default App

