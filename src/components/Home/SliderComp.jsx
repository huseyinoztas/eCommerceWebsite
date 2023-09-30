import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (

    <div>
      <Slider {...settings}>
          <div className='!flex items-center bg-gray-100 p-6'>
            <div className=''>
                <div className='text-6xl font-bold'>En kalitali ayakkabılar</div>
                <div className='text-lg my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nemo nisi voluptatum culpa minima, consectetur officia voluptate iure ex quod eius adipisci laboriosam. Animi, fugit a ducimus error pariatur ullam.</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>incele</div>
            </div>
            <img className='w-[400px] h-[400px]' src="https://st-vans.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/637639363468969344.jpg" alt="shoe" />
          </div>
          <div className='!flex items-center bg-gray-100 p-6'>
          <div className=''>
                <div className='text-6xl font-bold'>En kalitali ayakkabılar</div>
                <div className='text-lg my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nemo nisi voluptatum culpa minima, consectetur officia voluptate iure ex quod eius adipisci laboriosam. Animi, fugit a ducimus error pariatur ullam.</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>incele</div>
            </div>
            <img className='w-[400px] h-[400px]' src="https://akn-barcin.a-cdn.akinoncloud.com/products/2022/09/20/994169/38f4b86a-6fac-4828-907d-1d0df2b0ab75.jpg" alt="shoe" />
          </div>
        </Slider>
    </div>
  )
}

export default SliderComp
