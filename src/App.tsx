import { useState } from 'react';

import './App.css';
import Carousel from './components/UI/Carousel/Carousel';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<Carousel></Carousel>
		</div>
	);
}

export default App;
