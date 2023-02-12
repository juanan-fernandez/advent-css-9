import './App.css';
import Carousel from './components/UI/Carousel/Carousel';
import { data } from './data/images-data';

function App() {
	return (
		<div className='App'>
			<Carousel imgList={data} />
		</div>
	);
}

export default App;
