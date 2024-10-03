import React, { useEffect, useState } from 'react';
import { GoChevronLeft as IconPrevious, GoChevronRight as IconNext } from 'react-icons/go';
import { useSwipeable } from 'react-swipeable';
import { Button } from '@/components/shared';
import { cn } from '@/utils';
import ImagesModal from './ImagesModal';

interface IProps {
  containerClasses?: string;
  images: { src: string; alt: string }[];
}

const StackedCarousel: React.FC<IProps> = ({ containerClasses, images }) => {
  // States
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState<'next' | 'previous' | null>(null);
  const [imagesModal, setImagesModal] = useState<boolean>(false);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isNextNavDisabled, setIsNextNavDisabled] = useState(false);
  const [isPrevNavDisabled, setIsPrevNavDisabled] = useState(false);

  // Handler ==> Toggle Images Modal
  const toggleImagedModalHandler = () => {
    setImagesModal((p) => !p);
  };

  const handleNext = () => {
    if (!isNextNavDisabled && !isSwiping) {
      setDirection('next');
      toggleImagedModalHandler();
      setIsSwiping(false);
    }
  };

  const handlePrevious = () => {
    if (!isPrevNavDisabled && !isSwiping) {
      setDirection('previous');
      setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
      setIsSwiping(false);
    }
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the modal handler
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      handleNext();
      setIsSwiping(true);
    },
    onSwipedRight: () => {
      handlePrevious();
      setIsSwiping(true);
    },
    onSwiped: () => {
      setIsSwiping(false);
      // Ensure isSwiping is reset after a short delay
      setTimeout(() => setIsSwiping(false), 100);
    },
    trackMouse: true,
    delta: 30, // Adjust delta to control sensitivity
    preventScrollOnSwipe: true,
  });

  const handleClick = () => {
    if (!isSwiping) {
      toggleImagedModalHandler();
    }
  };

  useEffect(() => {
    setIsPrevNavDisabled(activeSlide === 0);
    setIsNextNavDisabled(activeSlide === images.length - 1);
  }, [activeSlide]);

  return (
    <>
      <section className="relative w-full max-w-4xl mx-auto pr-6">
        <div
          {...swipeHandlers}
          className={cn(
            'w-full h-fit max-w-[70%] md:max-w-[50%] lg:max-w-none m-auto flex items-center justify-start flex-col relative mt-8 lg:mt-16',
            containerClasses
          )}
        >
          <div className="relative w-full pb-[60%]">
            {images.map((item, i) => {
              const isActive = i === activeSlide;
              const offset = isActive ? 0 : (i - activeSlide + images.length) % images.length;

              // Determine the image source based on its position
              const src = i === 0 ? item.src : '/images/placeholders/white.svg';

              return (
                <div
                  key={i}
                  className={`w-full h-full absolute rounded-xl transition-transform duration-500 ease-in-out ${
                    direction === 'next'
                      ? 'animate-slide-next'
                      : direction === 'previous'
                        ? 'animate-slide-previous'
                        : ''
                  }`}
                  style={{
                    transform: `translate(${offset * 12}px, -${offset * 12}px)`,
                    zIndex: isActive ? images.length : images.length - offset,
                  }}
                >
                  <img
                    src={src}
                    alt={item.alt || 'BlueEngine'}
                    className="w-full h-full object-cover rounded-xl shadow-xl"
                  />
                </div>
              );
            })}
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleClick();
              }
            }}
            className="w-[105%] h-full flex items-start justify-between gap-2 absolute top-0 left-0 cursor-pointer z-[100]"
          >
            <Button
              unstyled
              disabled={isPrevNavDisabled}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                handleButtonClick(event);
                handlePrevious();
              }}
              className={cn(
                'border-[1px] shadow-md border-solid border-blue-600 bg-blue-600 opacity-70 rounded-full flex items-center justify-center p-[5px]',
                isPrevNavDisabled ? 'border-white-main bg-white-main' : ''
              )}
            >
              <IconPrevious
                size={28}
                className={cn('text-white-main', isPrevNavDisabled ? 'text-neutral-400' : '')}
              />
            </Button>
            <div className="h-full relative">
              <Button
                unstyled
                disabled={isNextNavDisabled}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  handleButtonClick(event);
                  handleNext();
                }}
                className={cn(
                  'border-[1px] shadow-md border-solid border-blue-600 bg-blue-600 opacity-70 rounded-full flex items-center justify-center p-[5px]',
                  isNextNavDisabled ? 'border-white-main bg-white-main' : ''
                )}
              >
                <IconNext
                  size={28}
                  className={cn('text-white-main', isNextNavDisabled ? 'text-neutral-400' : '')}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Images Modal  */}
      <ImagesModal
        images={images}
        opened={imagesModal}
        currentSlide={activeSlide}
        toggleHandler={toggleImagedModalHandler}
      />
    </>
  );
};

export default StackedCarousel;
