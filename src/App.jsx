import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Counter } from './components/Counter';
import { Cleanup } from './components/Cleanup';
import { Interval } from './components/Interval';
import { Api } from './components/Api';
import { Axios } from './components/Axios';

// Cuando se renderiza?
// - Cuando cambia un estado (useState)
// - Cuando cambia una prop
// -  Cuando cambia el componente padre/superior

// Side Effects

// Tareas secundarias
//- Cambiar URL
// - Cambiar titulo
// - Busqueda en la API

// - Mostrar Spinner

// - Si no tenemos un array de dependencias se ejecuta siempre
// - Cuando cambia una dependencia

function App() {
	const [show, setShow] = useState(false);

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>

			{/* <Counter /> */}

			{/* <button onClick={() => setShow(!show)}>toggle titulo</button> */}

			{/* {show && <Cleanup />} */}

			{/* {show && <Interval />} */}

			{/* <Api /> */}

			<Axios />

			<p>
				Edit <code>src/App.jsx</code> and save to test HMR
			</p>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
