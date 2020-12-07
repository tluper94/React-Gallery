import React, { useState, useEffect, useRef } from 'react';
import { CaretCircleLeft, CaretCircleRight, Circle } from 'phosphor-react';
import './components/Gallery.css';

function Gallery({
  children,
  width,
  height,
  controls,
  dots
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialX, setInitialX] = useState(null);
  const [transform, setTransform] = useState(0);
  const indexLength = children.length;
  const galleryContainerRef = useRef();
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
  }; // Maps over component children and creates a new element with the 'gallery_item' className

  const items = React.Children.map(children, (item, i) => {
    const isCurrent = currentIndex === i ? 'current' : '';
    const className = `gallery__item ${isCurrent}`;
    const style = galleryItemStyle;
    const props = { ...item.props,
      className: className,
      style: style
    };
    return /*#__PURE__*/React.cloneElement(item, props);
  });
  useEffect(() => {
    function onResize(e) {
      const containerWidth = galleryContainerRef.current.clientWidth;
      setTransform(currentIndex * -containerWidth);
    }

    window.addEventListener('resize', onResize);
  }); // Initial touch on gallery container

  const onStartTouch = e => {
    if (!e.currentTarget) {
      return;
    }

    setInitialX(e.touches[0].clientX);
  }; // Get difference from intial touch and end touch to determine swipe direction


  const onTouchEnd = e => {
    const containerWidth = e.target.clientWidth;
    const lastTouchX = e.changedTouches[0].clientX;
    const diffX = initialX - lastTouchX;

    if (diffX > 10) {
      nextGalleryItem(containerWidth);
    } else if (diffX < -10) {
      prevGalleryItem(containerWidth);
    }

    setInitialX(null);
  }; // Translates to next gallery item when swipe is left


  const nextGalleryItem = w => {
    if (currentIndex + 1 === indexLength) {
      return;
    }

    setTransform(transform - w);
    setCurrentIndex(currentIndex + 1);
  }; // Translate to prev gallery item when swipe is right


  const prevGalleryItem = w => {
    if (currentIndex === 0) {
      return;
    }

    setTransform(transform + w);
    setCurrentIndex(currentIndex - 1);
  }; // Handles prev control button click


  const handleClickPrev = e => {
    const containerWidth = galleryContainerRef.current.clientWidth;
    prevGalleryItem(containerWidth);
  }; // Handles next control button click


  const handleClickNext = e => {
    const containerWidth = galleryContainerRef.current.clientWidth;
    nextGalleryItem(containerWidth);
  }; // Display next arrow if  currentIndex is less than indexLength


  const displayNextArrow = () => {
    if (currentIndex + 1 === indexLength) {
      return /*#__PURE__*/React.createElement("div", null);
    } else {
      const {
        color,
        size,
        weight
      } = controls;
      return /*#__PURE__*/React.createElement("button", {
        className: "gallery__controls--right",
        onClick: handleClickNext
      }, /*#__PURE__*/React.createElement(CaretCircleRight, {
        color: color && color,
        size: size && size,
        weight: weight && weight
      }));
    }
  }; // Display prev arrow if  currentIndex is greater than 0


  const displayPrevArrow = () => {
    if (currentIndex === 0) {
      return /*#__PURE__*/React.createElement("div", null);
    } else {
      const {
        color,
        size,
        weight
      } = controls;
      return /*#__PURE__*/React.createElement("button", {
        className: "gallery__controls--left",
        onClick: handleClickPrev
      }, /*#__PURE__*/React.createElement(CaretCircleLeft, {
        color: color && color,
        size: size && size,
        weight: weight && weight
      }));
    }
  }; // Handles dot click


  const handleDotClick = e => {
    const containerWidth = galleryContainerRef.current.clientWidth;
    const selectedDot = e.currentTarget;
    const selectedIndex = Number(selectedDot.id);
    setCurrentIndex(selectedIndex);
    setTransform(selectedIndex * -containerWidth);
  }; // Maps over gallery items and display a dot for each item and fills in dot based off of currentIndex


  const displayDots = () => {
    const {
      color,
      size
    } = dots;
    let current;
    return items.map((item, i) => {
      currentIndex === i ? current = 'fill' : current = 'duotone';
      return /*#__PURE__*/React.createElement("button", {
        id: i,
        key: items[i].key,
        className: `gallery__dots--button ${i}`,
        onClick: handleDotClick
      }, /*#__PURE__*/React.createElement(Circle, {
        color: color && color,
        size: size && size,
        weight: current
      }));
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "gallery",
    style: galleryStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery__container",
    onTouchStart: onStartTouch,
    onTouchEnd: onTouchEnd,
    ref: galleryContainerRef
  }, items.map((child, i) => {
    return items[i];
  })), controls && displayPrevArrow(), controls && displayNextArrow(), /*#__PURE__*/React.createElement("div", {
    className: "gallery__dots"
  }, dots && displayDots()));
}

export default Gallery;