import React, { useState } from 'react';
import './Gallery.css';

function Gallery({ children, width, height, controls, dots }) {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [initialX, setInitialX] = useState(null);
	const [transform, setTransform] = useState(0);
	const indexLength = children.length;

	const onStartTouch = (e) => {
		setInitialX(e.touches[0].clientX);
	};

	const onTouchEnd = (e) => {
		const containerWidth = e.target.clientWidth;
		const lastTouchX = e.changedTouches[0].clientX;
		const diffX = initialX - lastTouchX;

		diffX > 0 ? nextGalleryItem(containerWidth) : prevGalleryItem(containerWidth);

		setInitialX(null);
	};

	const nextGalleryItem = (w) => {
		if (currentIndex === indexLength) {
			return;
		}
		setTransform(transform - w);
		setCurrentIndex(currentIndex + 1);
	};

	const prevGalleryItem = (w) => {
		if (currentIndex === 1) {
			return;
		}
		setTransform(transform + w);
		setCurrentIndex(currentIndex - 1);
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
		const isCurrent = currentIndex === i ? 'current' : '';
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
			</div>
		</div>
	);
}

export default Gallery;
