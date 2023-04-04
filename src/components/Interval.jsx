import { useEffect } from 'react';
import { useState } from 'react';

export const Interval = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			console.log('interval');
			setCount((prevCount) => prevCount + 1);
		}, 1000);

		// cleanup
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div>
			<h1>{count}</h1>
		</div>
	);
};
