import { useEffect, useState } from 'react';

import axios from 'axios';

export const Axios = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		// axios.get('https://pokeapi.co/api/v2/pokemon').then(({ data }) => {
		// 	setData(data.results);
		// });
		const getPokemons = async () => {
			const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
			setData(data.results);
		};

		getPokemons();
	}, []);

	return (
		<div>
			{data.map((pokemon) => (
				<p key={pokemon.name}>{pokemon.name}</p>
			))}
		</div>
	);
};
