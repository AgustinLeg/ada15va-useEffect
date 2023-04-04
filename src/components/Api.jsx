import { useEffect, useState } from 'react';
import { Spinner } from './ui/Spinner';

export const Api = () => {
	const [data, setData] = useState([]);
	const [offset, setOffset] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		// fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		setData(data.results);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 		setIsError(true);
		// 	})
		// 	.finally(() => {
		// 		setIsLoading(false);
		// 	});

		const getPokemons = async () => {
			try {
				const res = await fetch(
					`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
				);

				const data = await res.json();

				setData(data.results);
			} catch (erro) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};

		getPokemons();
	}, [offset]);

	return (
		<div>
			<h1>Pokemones</h1>
			{isLoading && <Spinner />}

			{!isLoading &&
				data.map((pokemon) => <p key={pokemon.name}>{pokemon.name}</p>)}

			{isError && <div>Ups algo salio mal 😕</div>}

			{!isError && (
				<button onClick={() => setOffset((prevOffset) => prevOffset + 20)}>
					Siguiente 20
				</button>
			)}
		</div>
	);
};
