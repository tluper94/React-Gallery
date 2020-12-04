import React, { useState, useEffect, useRef } from 'react';
import { CaretCircleLeft, CaretCircleRight, Circle } from 'phosphor-react';
import './Gallery.css';

function Gallery({ children, width, height, controls, dots }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [initialX, setInitialX] = useState(null);
	const [transform, setTransform] = useState(0);
	const indexLength = children.length;
	const galleryItemRef = useRef();

	const galleryItemStyle = {
		transform: `translatex(${transform}px)`,
		transition: 'all 600ms ease',
		minWidth: `100%`,
		minHeight: '100%',
		objectFit: 'cover'
	};

	const galleryStyle = {
		width: width,
		height: height
	};

	// Maps over component children and creates a new element with the 'gallery_item' className
	const items = React.Children.map(children, (item, i) => {
		const isCurrent = currentIndex === i ? 'current' : '';
		const className = `gallery__item ${isCurrent}`;
		const style = galleryItemStyle;
		const props = { ...item.props, className: className, style: style, ref: galleryItemRef };
		return React.cloneElement(item, props);
	});

	useEffect(() => {
		function onResize(e) {
			const item = galleryItemRef.current;
			const w = item.getBoundingClientRect().width;
			setTransform(currentIndex * -w);
		}
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, [currentIndex]);

	// Initial touch on gallery container
	const onStartTouch = (e) => {
		if (!e.currentTarget) {
			return;
		}
		setInitialX(e.touches[0].clientX);
	};

	// Get difference from intial touch and end touch to determine swipe direction
	const onTouchEnd = (e) => {
		const item = galleryItemRef.current;
		const w = item.getBoundingClientRect().width;
		const lastTouchX = e.changedTouches[0].clientX;
		const diffX = initialX - lastTouchX;

		if (diffX > 25) {
			nextGalleryItem(w);
		} else if (diffX < -25) {
			prevGalleryItem(w);
		}

		setInitialX(null);
	};

	// Translates to next gallery item when swipe is left
	const nextGalleryItem = (w) => {
		if (currentIndex + 1 === indexLength) {
			return;
		}
		setTransform(transform - w);
		setCurrentIndex(currentIndex + 1);
	};

	// Translate to prev gallery item when swipe is right
	const prevGalleryItem = (w) => {
		if (currentIndex === 0) {
			return;
		}
		setTransform(transform + w);
		setCurrentIndex(currentIndex - 1);
	};

	// Handles prev control button click
	const handleClickPrev = (e) => {
		const item = galleryItemRef.current;
		const w = item.getBoundingClientRect().width;
		prevGalleryItem(w);
	};

	// Handles next control button click
	const handleClickNext = (e) => {
		const item = galleryItemRef.current;
		const w = item.getBoundingClientRect().width;
		nextGalleryItem(w);
	};

	// Display next arrow if  currentIndex is less than indexLength
	const displayNextArrow = () => {
		if (currentIndex + 1 === indexLength) {
			return <div></div>;
		} else {
			const { color, size, weight } = controls;
			return (
				<button className='gallery__controls--right' onClick={handleClickNext}>
					<CaretCircleRight color={color && color} size={size && size} weight={weight && weight} />
				</button>
			);
		}
	};

	// Display prev arrow if  currentIndex is greater than 0
	const displayPrevArrow = () => {
		if (currentIndex === 0) {
			return <div></div>;
		} else {
			const { color, size, weight } = controls;
			return (
				<button className='gallery__controls--left' onClick={handleClickPrev}>
					<CaretCircleLeft color={color && color} size={size && size} weight={weight && weight} />
				</button>
			);
		}
	};

	// Handles dot click
	const handleDotClick = (e) => {
		const item = galleryItemRef.current;
		const w = item.getBoundingClientRect().width;
		const selectedDot = e.currentTarget;
		const selectedIndex = Number(selectedDot.id);

		setCurrentIndex(selectedIndex);
		setTransform(selectedIndex * -w);
	};

	// Maps over gallery items and display a dot for each item and fills in dot based off of currentIndex
	const displayDots = () => {
		const { color, size } = dots;
		let current;
		let location;
		console.log(location);
		return items.map((item, i) => {
			currentIndex === i ? (current = 'fill') : (current = 'duotone');
			return (
				<button id={i} key={items[i].key} className={`gallery__dots--button ${i}`} onClick={handleDotClick}>
					<Circle color={color && color} size={size && size} weight={current} />
				</button>
			);
		});
	};

	let location;
	dots.inside ? (location = { bottom: 0 }) : (location = {});

	return (
		<div className='gallery' style={galleryStyle}>
			<div className='gallery__container' onTouchStart={onStartTouch} onTouchEnd={onTouchEnd}>
				{items.map((child, i) => {
					return items[i];
				})}
			</div>
			{controls && displayPrevArrow()}
			{controls && displayNextArrow()}
			<div style={location} className='gallery__dots'>
				{dots && displayDots()}
			</div>
		</div>
	);
}

export default Gallery;
