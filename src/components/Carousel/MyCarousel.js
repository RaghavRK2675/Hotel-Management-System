import React from 'react';
import slider1 from '../../imgs/hotel1.jpg';
import slider2 from '../../imgs/hotel2.jpg';
import slider3 from '../../imgs/hotel3.jpg';
import './MyCarousel.css';

const MyCarousel = ({ scrollToCards, title, subtitle }) => {
    return (
        <div className="carousel slide" id="carouselExampleIndicators" data-ride="carousel" data-interval='7000'>
            <ol className='carousel-indicators'>
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className='active'></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className='carousel-inner' role="listbox">

                {/* Slide 1 */}
                <div className='carousel-item active' style={{ backgroundImage: `url(${slider1})` }}>
                    <div className='carousel-caption text-center'>
                        <h1>{title}</h1>
                        <br></br>
                        <h3>{subtitle}</h3>
                        <br></br>
                        <br></br>
                        <button
                            className='btn btn-outline-light btn-lg carousel-btn'
                            onClick={scrollToCards}>
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className='carousel-item' style={{ backgroundImage: `url(${slider2})` }}>
                    <div className='carousel-caption text-center'>
                        <h1>{title}</h1>
                        <h3>{subtitle}</h3>
                        <button
                            className='btn btn-outline-light btn-lg carousel-btn'
                            onClick={scrollToCards}>
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className='carousel-item' style={{ backgroundImage: `url(${slider3})` }}>
                    <div className='carousel-caption text-center'>
                        <h1>{title}</h1>
                        <h3>{subtitle}</h3>
                        <button
                            className='btn btn-outline-light btn-lg carousel-btn'
                            onClick={scrollToCards}>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            <a className='carousel-control-prev' href="#carouselExampleIndicators" role="button" data-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden="true"></span>
            </a>

            <a className='carousel-control-next' href="#carouselExampleIndicators" role="button" data-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden="true"></span>
            </a>
        </div>
    );
};

export default MyCarousel;
