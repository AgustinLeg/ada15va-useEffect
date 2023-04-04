import { useEffect } from 'react';
import { useState } from 'react';

// Ciclo de vida de componente: montaje, render y desmontaje

export const Cleanup = () => {
	// cleanup
	/**
   * - Se ejecuta antes para limpiar el useEffect anterior
    - Tambien se ejecuta cuando desmontamos el componente
    - Puede ser condicional
   * 
   */
	useEffect(() => {
		console.log('useEffect');

		return () => console.log('cleanup');
	}, []);

	return (
		<div>
			<h1>Titulo secreto</h1>
		</div>
	);
};
