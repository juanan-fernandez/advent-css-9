import './Carousel.css';

const Carousel = () => {
	return (
		<div className='carousel'>
			<button className='carousel__btn'>
				<img src='/images/chevron.svg' />
			</button>
			<div className='carousel__imgcontainer'>
				<img src='/images/jakob-owens-EwRM05V0VSI-unsplash.jpg' />
			</div>
			<button className='carousel__btn right'>
				<img src='/images/chevron.svg' />
			</button>
		</div>
	);
};

export default Carousel;
