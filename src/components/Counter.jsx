import { useEffect } from 'react';
import { useState } from 'react';

export const Counter = () => {
	const [count, setCount] = useState(
		JSON.parse(localStorage.getItem('count')) || 0
	);
	// const [title, setTitle] = useState('Vite + React');
	// const [todos, setTodos] = useState([])

	// console.log('antes renderizado');

	// se va a ejecutar despues del renderizado
	useEffect(() => {
		if (count !== 0) return;

		console.log('useEffect', count);
		document.title = count;
		localStorage.setItem('count', JSON.stringify(count));

		return () => console.log('cleanup', count);
	}, [count]);

	// console.log('despues renderizado');

	return (
		<div>
			{/* <button onClick={() => setTitle('nuevo titulo')}>Cambiar titulo</button> */}
			<div className="card">
				<button
					onClick={() => {
						setCount((count) => count + 1);
					}}
				>
					+1
				</button>

				<button onClick={() => setCount(0)}>reset</button>

				<button
					onClick={() => {
						setCount((count) => count - 1);
					}}
				>
					-1
				</button>
			</div>
		</div>
	);
};
