import React, { useState } from 'react';
import { CaretCircleLeft, CaretCircleRight, Circle } from 'phosphor-react';
import './Gallery.css';

function Gallery({ children, width, height, controls, dots }) {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [initialX, setInitialX] = useState(null);
	const [transform, setTransform] = useState(0);
	const indexLength = children.length;

	// Initial touch on gallery container
	const onStartTouch = (e) => {
		setInitialX(e.touches[0].clientX);
	};

	// Get difference from intial touch and end touch to determine swipe direction
	const onTouchEnd = (e) => {
		const containerWidth = e.target.clientWidth;
		const lastTouchX = e.changedTouches[0].clientX;
		const diffX = initialX - lastTouchX;

		diffX > 0 ? nextGalleryItem(containerWidth) : prevGalleryItem(containerWidth);

		setInitialX(null);
	};

	// Translates to next gallery item when swipe is left
	const nextGalleryItem = (w) => {
		if (currentIndex === indexLength) {
			return;
		}
		setTransform(transform - w);
		setCurrentIndex(currentIndex + 1);
	};

	// Translate to prev gallery item when swipe is right
	const prevGalleryItem = (w) => {
		if (currentIndex === 1) {
			return;
		}
		setTransform(transform + w);
		setCurrentIndex(currentIndex - 1);
	};

	// Display next arrow if  currentIndex is less than indexLength
	const displayNextArrow = () => {
		if (currentIndex === indexLength) {
			return <div></div>;
		} else {
			return <CaretCircleRight color='white' size={40} weight='fill' />;
		}
	};

	// Display prev arrow if  currentIndex is equal to 1
	const displayPrevArrow = () => {
		if (currentIndex === 1) {
			return <div></div>;
		} else {
			return <CaretCircleLeft color='white' size={40} weight='fill' />;
		}
	};

	// Display control arrows if control prop is set to true
	const displayControls = () => {
		if (controls) {
			return (
				<div className='gallery__controls'>
					<div className='gallery__controls--left'>{displayPrevArrow()}</div>
					<div className='gallery__controls--right'>{displayNextArrow()}</div>
				</div>
			);
		}
	};

	const galleryItemStyle = {
		transform: `translatex(${transform}px)`,
		transition: 'all 600ms ease',
		minWidth: `100%`,
		minHeight: '100%',
		objectFit: 'fill'
	};

	const galleryContainerStyle = {
		width: `${width}px`,
		height: `${height}px`
	};

	const items = React.Children.map(children, (item, i) => {
		const isCurrent = currentIndex === i + 1 ? 'current' : '';
		const className = `gallery__item ${isCurrent}`;
		const style = galleryItemStyle;
		const props = { ...item.props, className: className, style: style };
		return React.cloneElement(item, props);
	});

	return (
		<div className='App'>
			<div
				style={galleryContainerStyle}
				className='gallery__container'
				onTouchStart={onStartTouch}
				onTouchEnd={onTouchEnd}
			>
				{items.map((child, i) => {
					return items[i];
				})}
				{displayControls()}
			</div>
		</div>
	);
}

export default Gallery;
