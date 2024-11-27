import React from 'react'
import { useRef } from 'react';
import MyCards from '../../components/Cards/MyCards'
import MyCarousel from '../../components/Carousel/MyCarousel'
import MyCopyright from '../../components/Copyright/MyCopyright'
import MyFooter from '../../components/Footer/MyFooter'

const Home = () => {

    const cardsRef = useRef(null);

    const scrollToCards = () => {
        if (cardsRef.current) {
            cardsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <MyCarousel scrollToCards={scrollToCards}  title="Welcome to RoomScape" subtitle="Find Your Perfect Stay - Anywhere, Anytime!"/>
            <div ref={cardsRef}>
            <MyCards/>
            </div>
            <MyFooter/>
            <MyCopyright/>
        </div>
    )
}

export default Home
