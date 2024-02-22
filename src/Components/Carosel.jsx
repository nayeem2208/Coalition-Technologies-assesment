import React from 'react';
import Slider from 'react-slick';
import image1 from '../../public/photo-1458442310124-dde6edb43d10.jpg';
import image2 from '../../public/photo-1443980995706-8d107e98e707.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Carosel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1305,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full' style={{  bottom: 0, backgroundColor: 'rgba(35, 50, 84,0.8)' }}>
      <div className='mx-auto w-3/5'>
        <Slider {...settings} className='w-full'>
          <img src={image1} alt='' className='w-full h-full object-cover p-2' />
          <img src={image2} alt='' className='w-full h-full object-cover p-2' />
          <img src={image1} alt='' className='w-full h-full object-cover p-2' />
          <img src={image2} alt='' className='w-full h-full object-cover p-2' />
          <img src={image1} alt='' className='w-full h-full object-cover p-2' />
          <img src={image2} alt='' className='w-full h-full object-cover p-2' />
          <img src={image1} alt='' className='w-full h-full object-cover p-2' />
          <img src={image2} alt='' className='w-full h-full object-cover p-2' />
          <img src={image1} alt='' className='w-full h-full object-cover p-2' />
          <img src={image2} alt='' className='w-full h-full object-cover p-2' />
          <img src={image1} alt='' className='w-full h-full object-cover p-2' />
          <img src={image2} alt='' className='w-full h-full object-cover p-2' />
        </Slider>
      </div>
    </div>
  );
}

export default Carosel;
