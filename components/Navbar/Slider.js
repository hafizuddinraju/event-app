import React from 'react';
import SliderItem from './SliderItem';


const Slider = () => {
    const bannerData = [
        {
            image: 'https://i.ibb.co/jvjkF1w/p6.jpg',
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: 'https://i.ibb.co/vcq1FP3/p1.jpg',
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: 'https://i.ibb.co/HP90kKJ/p2.jpg',
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: 'https://i.ibb.co/D80bHTY/p3.jpg',
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: 'https://i.ibb.co/2nHGJZm/p4.jpg',
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: 'https://i.ibb.co/LZzxrxJ/p5.jpg',
            prev: 5,
            id: 6,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full h-[100vh]">
        {
          bannerData?.map(data => <SliderItem key={data.id} data={data}></SliderItem>)
        }
      </div>
    );
};

export default Slider;