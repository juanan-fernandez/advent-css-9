import './Carousel.css';
import { useState } from 'react';
import { ImageGal } from '../../../data/images-data';

type CarouselProps = {
	imgList: Array<ImageGal>;
};
const Carousel = ({ imgList }: CarouselProps) => {
	const getRandomImage = (): ImageGal => {
		const randomIndex = 4;
		return imgList[randomIndex];
	};

	const [activeImage, setActiveImage] = useState<ImageGal>(getRandomImage());
	const [imageList, setImageList] = useState<Array<ImageGal>>(imgList);

	const list = imageList.map(img => {
		return (
			<img
				onClick={ev => handleClickImgList(ev, img.id)}
				key={img.id}
				className={`${
					img.id === activeImage.id ? 'imageslist__img--active' : 'imageslist__img'
				}`}
				src={`/images/${img.src}`}
			/>
		);
	});

	const handleClickImgList = (ev: React.MouseEvent<HTMLImageElement>, imgId: number) => {
		const index = imageList.findIndex(item => item.id === imgId);
		setActiveImage(imageList[index]);
	};

	const updateImageList = (direction: string) => {
		if (direction === 'right') {
			setImageList(currentList => {
				let firstElement: ImageGal | undefined;
				firstElement = currentList.shift();
				if (firstElement) return [...currentList, firstElement];
				return currentList;
			});
		}
		if (direction === 'left') {
			setImageList(currentList => {
				let lastElement: ImageGal | undefined;
				lastElement = currentList.pop();
				if (lastElement) return [lastElement, ...currentList];
				return currentList;
			});
		}
	};

	const handleClick = (ev: React.MouseEvent<HTMLButtonElement>, direction: string) => {
		const currentIndex: number = imageList.findIndex(
			item => item.id === activeImage.id
		);

		let indexToGo = direction === 'right' ? currentIndex + 1 : currentIndex - 1;
		if (indexToGo > 10) indexToGo = 0;
		if (indexToGo < 0) indexToGo = 10;
		setActiveImage(imageList[indexToGo]);
		updateImageList(direction);
	};

	return (
		<div className='carousel'>
			<div className='carousel__imageandcontrols'>
				<button className='carousel__btn' onClick={ev => handleClick(ev, 'left')}>
					<img src='/images/chevron.svg' />
				</button>
				<div className='carousel__imgcontainer'>
					<img src={`/images/${activeImage.src}`} />
					<div>
						<p>
							Photo by{' '}
							<a href={activeImage.gallery} target='_blank'>
								{activeImage.author}
							</a>{' '}
							on{' '}
							<a
								href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
								target='_blank'
							>
								Unsplash
							</a>
						</p>
					</div>
				</div>
				<button
					className='carousel__btn right'
					onClick={ev => handleClick(ev, 'right')}
				>
					<img src='/images/chevron.svg' />
				</button>
			</div>
			<div className='imageslist'>{list}</div>
		</div>
	);
};

export default Carousel;
