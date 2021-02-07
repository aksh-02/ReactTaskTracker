import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Book Club Meet',
			day: 'Feb 6th at 4:00pm',
			reminder: true,
		},
		{
			id: 2,
			text: 'ChinaTown Lunch',
			day: 'Feb 9th at 6:00pm',
			reminder: true,
		},
		{
			id: 3,
			text: 'Driving Test',
			day: 'Feb 9th at 2:00pm',
			reminder: false,
		},	
	])
  
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      title='Task Tracker'/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks To Show')}
    </div>
  );
}

export default App;
