import React from 'react';
import './ImageModal.css';
import { Modal } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';

interface IProps {
  opened: boolean;
  currentSlide: number;
  images: { src: string; alt: string }[];
  toggleHandler: () => void;
}

const ImagesModal: React.FC<IProps> = ({ opened, currentSlide, images, toggleHandler }) => {
  return (
    <Modal
      size={960}
      opened={opened}
      onClose={toggleHandler}
      centered
      radius="md"
      withCloseButton={false}
      classNames={{
        body: 'pb-8',
      }}
    >
      <Carousel
        slideSize="100%"
        slidesToScroll={1}
        withIndicators
        classNames={{
          control: 'bg-blue-700 border-blue-700 text-white-main opacity-70',
          indicators: 'bottom-[-19px]',
          indicator: 'bg-blue-700 w-[8px] h-[8px]',
        }}
      >
        {images.map((item, index) => (
          <CarouselSlide key={index} className="relative w-full pb-[60%]">
            <img
              src={item.src}
              alt={item.alt || 'BlueEngine'}
              className="w-full h-full object-cover rounded-md absolute"
            />
          </CarouselSlide>
        ))}
      </Carousel>
    </Modal>
  );
};

export default ImagesModal;
