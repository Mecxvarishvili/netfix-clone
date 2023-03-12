import React from 'react';
import Slider from "react-slick";
import SliderCard from './SliderCard';
import SliderArrow from './SliderArrow';
interface Props {
    data: {
        img: string[]
        id: string
    }[],
}
const MoviesCarousel = ({data}: Props) => {
    const settings =  {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        prevArrow: <SliderArrow img="left"/>,
        nextArrow: <SliderArrow img="right"/>,
        responsive: [
            {
              breakpoint: 99999999,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1401,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                dots: true,
                arrows: true
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                dots: true,
              }
            },
          {
            breakpoint: 1101,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 801,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 501,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ]
    }
    return (
        <div className="slider-container px-s" >
            <div className="fs-xs-12 fs-xl text-white fw-bold mb-2" > Popular on Netflix</div>
            <Slider {...settings} >
                {data.map((data => (
                    <SliderCard key={data.id} data={data}/>
                )))}
            </Slider>
        </div>
    );
};

export default MoviesCarousel;