import React from 'react';

interface Props {
    isLoading :boolean,
    children: React.ReactNode,
}

const SliderLoader = ({isLoading, children}: Props) => {
    const box = ["0s", "0.2s","0.4s", "0.6s", "0.8s", "1s", "1.2s" ]
    return (
        isLoading ?
        <div className="slider-loader-cont px-s my-4" >
            <div className="slider-loader-title" ></div>
            <div className="slider-loader-animation-cont row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5  row-cols-xxl-6 g-0 flex-nowrap overflow-hidden" >
                {box.map((sec) => (
                    <div key={sec} className='col slider-loader-animation-box gx-1' >
                        <div className='slider-loader-animation rounded-1' style={{WebkitAnimationDelay: sec, animationDelay: sec}}></div>
                    </div>
                ))}
            </div>
        </div> : <>{children}</>
    );
};

export default SliderLoader;