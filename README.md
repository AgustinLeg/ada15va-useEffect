# UseEffect

“Importante vs necesario” es decir lo prioritario y lo que puede esperar

Entonces la prioridad maxima en una aplicacion de react es la respuesta visual (reaccionar a los cambios del usuario, es decir aplicar un renderizado)

Cuando se renderiza?

- cuando cambia mi componente padre/superior
- cuando cambiaba prop
- cuando cambiaba state

### Ejemplo

Supongamos que tenemos un buscador, la prioridad maxima en este caso es mostrarle un spinner cuando el usuario realice una busqueda , a continuacion y como consecuencia de esta busqueda hay varias tareas adicionales que nuestra aplicacion debe realizar. A pesar que no son tan importante son totalmente necesarias como:

- Cambiar URL
- Cambiar titulo
- API de busqueda

Desde el punto de vista del usuario estas acciones son completamente secundarias pero desde la vista del _desarrollador_ son efectos secundarios de la accion principal tambien conocido en ingles como _side effects_

**Side Effects**

- Se produce siempre como consecuancia de otras acciones (en react con un cambio de estado)
- Se ejecutan siempre despues de la accion principal (en react despues del renderizado)
- El orden que se ejecuten es irrelevante
- Tiene implicaciones externas a la propia funcion que lo define es decir que mientras un renderizado solo tiene que afectar a ese componente o sus componentes hijos, un side effect puede afectar a elementos externos como el document.title, location.href

### Distinguir Side Effects

- Definir la tarea principal
- Detectar las acciones
- Elegir la accion principal
- Todo el resto de acciones son side effects

Para poder gestionar correctamente estos side effects react nos proporciona un hook llamado _useEffect_

### Cuando se ejecuta un useEffect?

- Si no tenemos un array de dependencias se ejecuta siempre
- Cuando cambia una dependencia
- Si tenes el array vacio solo se ejecuta la primera vez

### Cleanup useEffect

useEffect está construido de tal manera que si devolvemos una función dentro del método, esta función se ejecutará cuando el componente se desasocie. Esto es muy útil porque podemos usarlo para eliminar comportamientos innecesarios o evitar problemas de pérdida de memoria.

```jsx
useEffect(() => {
	console.log('useEffect');
	return () => console.log('cleanup');
});
```

- Se ejecuta antes para limpiar el useEffect anterior
- Tambien se ejecuta cuando desmontamos el componente
- Puede ser condicional

### Ejemplo Interval

```jsx
useEffect(() => {
	console.log(interval);
	const intervalId = setInterval(
		() => setCount((prevCount) => prevCount + 1),
		1000
	);

	return () => clearInterval(intervalId);
}, []);
```

Otros ejemplos seria

- **EventListener**
- C**ancelar una solicitud de Axios**

### API

```jsx
export const Apis = () => {
	const [pokemons, setPokemons] = useState([]);
	const [offset, setOffset] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		// GET
		fetch(next || `https://pokeapi.co/api/v2/pokemon-species?limit=3&offset=1`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPokemons([...pokemons, ...data.results]);
				setNext(data.next);
				setIsLoading(false);
			});
	}, [offset]);

	// console.log(pokemons);
	// const array1 = [1, 2, 3];
	// const array2 = [4, 5, 6];

	// [1,2,3,4,5,6] copia de arrays
	// const array3 = [...array1, ...array2];

	const handleClick = () => {
		setOffset(offset + 4);
	};

	return (
		<Stack>
			<Heading textAlign="center">APIS</Heading>
			<VStack>
				{isLoading && <Spinner />}

				{pokemons.map((item) => (
					<Text key={item.url}>{item.name}</Text>
				))}
				<Button onClick={handleClick}>Ver mas</Button>
			</VStack>
		</Stack>
	);
};
```
