import React, { useState } from 'react'
export default function Taskform({addTask}) {
    const[task, setTask] = useState('');
    const[priority, setPriority] = useState('Medium');
    const[category, setCategory] = useState('General');
    const [error, setError] = useState('');


    const handlesubmit = (e) => {
         e.preventDefault();
        const value = task.trim();
        if(value == "") {
            alert("Task cannot be empty");
            return;
        }

        if(/^\d+$/.test(value)) {
            alert("Numbers only are not allowed");
            return;
        }

        if (!/^[A-Za-z0-9\s]+$/.test(value)) {
           alert("Special characters are not allowed");
            return;
        }

        if (!/^[A-Za-z]/.test(value)) {
            alert("Task must start with a letter");
            return;
        }
        addTask({text: task, priority, category, completed: false});
        setTask('');
        setPriority('Medium');
        setCategory('General');
    }


  return (
    <form onSubmit={handlesubmit} className='task-form'>
        <div id='inp'>
            <input type='text' placeholder='Enter the task' onChange={(e) => setTask(e.target.value)} value={task}/>
            <button type='submit'>Add Task</button>
            <h2>{task} {priority} {category}</h2>
        </div>


        <div id='btns '>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>


            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>
        </div>
    </form>
  )
}