import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
	const [tasks, useTasks] = useState([
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
	return (
		<div className='container'>
			<Header />
			<Tasks tasks={tasks} />
		</div>
	)
}

export default App
