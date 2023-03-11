import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false)
	const [tasks, setTasks] = useState([
		{
			'text': 'Get 500 from 12399',
			'day': 'From 8:00 to 18:00 15.07.22',
			'reminder': false,
			'id': 1
		},
		{
			'text': 'Change current tarif (probably in bug)',
			'day': '',
			'reminder': false,
			'id': 2
		},
		{
			'text': 'Recount? ',
			'day': '',
			'reminder': false,
			'id': 3
		},
		{
			'text': 'watch the full course about react 2021',
			'day': '',
			'reminder': false,
			'id': 4
		},
		{
			'text': 'Still sun from codepen ',
			'day': 'https://codepen.io/irshadav/pen/GRwKRZ',
			'reminder': false,
			'id': 5
		}
	])

	// Add Task
	const addTask = task => {
		console.log(task)
		const id = Math.floor(Math.random() * 1000) + 1
		const newTask = { id, ...task }
		setTasks([...tasks, newTask])
	}

	// Delete Task
	const deleteTask = id => setTasks(tasks.filter(x => x.id !== id))

	// Toggle Reminder
	const toggleReminder = id => {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		)
	}

	return (
		<div className='container'>
			<Header
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				'No tasks to display'
			)}
		</div>
	)
}

export default App
