import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import MovieCard from './MovieCard';
import SliderArrow from './SliderArrow';
import SliderLoader from './SliderLoader';
import { MovieData } from './types';
interface Props {
    data: MovieData[],
}
const MoviesSlider = ({data}: Props) => {
  const [ isLoading, setIsLoading ] = useState(true)
    const settings =  {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        initialSlide: 0,
        arrows: false,
        // swipeToSlide: true,
        responsive: [
            {
              breakpoint: 99999999,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                arrows: true,
              }
            },
            {
              breakpoint: 1401,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                arrows: true,
                prevArrow: <SliderArrow direction="left"/>,
                nextArrow: <SliderArrow direction="right"/>,
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
                    <MovieCard key={data.id} data={data}/>
                )))}
            </Slider>
        </div>
      </SliderLoader>
    );
};

export default MoviesSlider;