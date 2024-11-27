import React from 'react';
import card1 from '../../imgs/card1.jpg';
import card5 from '../../imgs/card5.jpg';
import card3 from '../../imgs/card3.jpg';
import card2 from '../../imgs/card2.jpg';
import './MyCards.css';
import { Link } from 'react-router-dom';

const MyCards = () => {
    return (
        <div>
            <div className="container">
                <center>
                    <h1 className='featured-heading'> Featured Rooms </h1>
                </center>
                <div className='myCards'>

                    {/* SINGLE */}
                    <div className="card">
                        <Link to={`/singleRoom/single`} className='links'>
                            <div className="slide slide1">
                                <div className="content">
                                    <div className="icon">
                                        <img src={card1} />
                                    </div>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="content">
                                    <h3>Single Room</h3>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* FAMILY */}
                    <div className="card">
                        <Link to={`/singleRoom/family`} className='links'>
                            <div className="slide slide1">
                                <div className="content">
                                    <div className="icon">
                                        <img src={card5} />
                                    </div>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="content">
                                    <h3>Family Room</h3>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* PRESIDENTIAL */}
                    <div className="card">
                        <Link to={`/singleRoom/presidential`} className='links'>
                            <div className="slide slide1">
                                <div className="content">
                                    <div className="icon">
                                        <img src={card3} />
                                    </div>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="content">
                                    <h3>Presidential Room</h3>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* DOUBLE */}
                    <div className="card">
                        <Link to={`/singleRoom/double`} className='links'>
                            <div className="slide slide1">
                                <div className="content">
                                    <div className="icon">
                                        <img src={card2} />
                                    </div>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="content">
                                    <h3>Double Room</h3>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MyCards;
