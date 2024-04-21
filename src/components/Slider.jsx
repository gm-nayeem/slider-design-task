import React, { useState, useEffect } from 'react';

const Slider = ({
    images,
    visibleCount = 3,
    interval = 3000,
    setTitleIndex,
    totalMovieTitle
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('left');
    const totalImages = images.length;

    // update the current index
    const nextSlide = () => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % totalMovieTitle);

        setCurrentIndex((prevIndex) => {
            if (prevIndex === (totalImages - 3) && direction === 'left') {
                setDirection('right');
                const index = totalImages - 4;
                return index;
            } else if (prevIndex === 0 && direction === 'right') {
                setDirection('left');
                const index = 1;
                return index;
            } else {
                if (direction === 'left') {
                    const index = prevIndex + 1;
                    return index;
                }

                if (direction === 'right') {
                    const index = prevIndex - 1;
                    return index;
                }
            }
        });
    };

    useEffect(() => {
        const sliderInterval = setInterval(nextSlide, interval);

        return () => {
            clearInterval(sliderInterval);
        };
    }, [interval, nextSlide]);

    return (
        <div className="h-full relative overflow-hidden py-8">
            <div
                className="h-full flex transition-transform duration-700"
                style={{
                    transform: (direction === 'left') ?
                        `translateX(-${(currentIndex * 100) / visibleCount}%)` :
                        `translateX(-${(currentIndex * 100) / visibleCount}%)`
                }}
            >
                {images.map((image, index) => (
                    currentIndex + 1 === index ? (
                        <img
                            key={Math.random() * index}
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className={`w-1/3 h-full object-cover rounded-sm scale-125`}
                        />
                    ) : (
                        <img
                            key={Math.random() * index}
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className={`w-1/3 h-full object-cover rounded-sm`}
                        />
                    )
                ))}
            </div>
        </div >
    );
};

export default Slider;
