import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import SliderCard from './SliderCard';
import SliderArrow from './SliderArrow';
import SliderLoader from './SliderLoader';
interface Props {
    data: {
        img: string[]
        id: string
    }[],
}
const MoviesSlider = ({data}: Props) => {
  const [ isLoading, setIsLoading ] = useState(true)
    const settings =  {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        initialSlide: 0,
        arrows: false,
        prevArrow: <SliderArrow direction="left"/>,
        nextArrow: <SliderArrow direction="right"/>,
        // swipeToSlide: true,
        responsive: [
            {
              breakpoint: 99999999,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                arrows: true
              }
            },
            {
              breakpoint: 1401,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                arrows: true
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                infinite: true,
              }
            },
          {
            breakpoint: 1101,
            settings: {
              slidesToShow: 4,
              infinite: true,
            }
          },
          {
            breakpoint: 801,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 501,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
    }
    useEffect(() => {
      if(data) {
        setIsLoading(false)
      }
    }, [data])
    
    return (
      <SliderLoader isLoading={isLoading} >
        <div className="slider-container px-s position-relative" >
            <div className="fs-xs-12 fs-xl text-white fw-bold mb-2" > Popular on Netflix</div>
            <Slider {...settings}>
                {data.map((data => (
                    <SliderCard key={data.id} data={data}/>
                )))}
            </Slider>
        </div>
      </SliderLoader>
    );
};

export default MoviesSlider;