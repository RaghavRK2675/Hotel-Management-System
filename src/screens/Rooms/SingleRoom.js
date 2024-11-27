import React, { useEffect, useState } from 'react';
import MyCarousel from '../../components/Carousel/MyCarousel';
import card5 from '../../imgs/card5.jpg';
import card2 from '../../imgs/card2.jpg';
import card3 from '../../imgs/card3.jpg';
import './Rooms.css';
import { Link, useParams } from "react-router-dom";
import MyFooter from '../../components/Footer/MyFooter';
import MyCopyright from '../../components/Copyright/MyCopyright';
import { getDatabase, ref, get, child } from "firebase/database";

const roomsDetails = {
    single: {
        capacity: 1,
        breakfast: "included",
        price: 1200,
        pets: "allowed",
        roomtype: "single",
        size: "250 sqft"
    },
    double: {
        capacity: 2,
        breakfast: "included",
        price: 2400,
        pets: "allowed",
        roomtype: "double",
        size: "500 sqft"
    },
    family: {
        capacity: 6,
        breakfast: "not included",
        price: 3500,
        pets: "not allowed",
        roomtype: "family",
        size: "750 sqft"
    },
    presidential: {
        capacity: 4,
        breakfast: "included",
        price: 4300,
        pets: "not allowed",
        roomtype: "presidential",
        size: "1000 sqft"
    }
};

const SingleRoom = () => {
    const { roomType } = useParams();
    const [roomData, setRoomData] = useState(null);

    useEffect(() => {
        // Fetching data from the database if needed in the future
        const db = getDatabase();
        const roomRef = ref(db, `/rooms/${roomType}`);
        get(roomRef)
            .then(snapshot => {
                if (snapshot.exists()) {
                    setRoomData(snapshot.val());
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [roomType]);

    // Getting room details based on the `roomType` parameter from the URL
    const roomDetails = roomsDetails[roomType];

    // If room details are not found or not yet loaded
    if (!roomDetails) {
        return <div>Room not found</div>;
    }

    return (
        <div>
            <MyCarousel title={`${roomType} Room`} />
            <br></br><br></br>
            <center>
                <h1 className='room-details-heading'>Details of {roomDetails.roomtype} Room</h1>
            </center>
            <br></br><br></br>
            <div className='singleRoom-cards'>
                <div className="card">
                    <img className="card-img-top" src={card5} alt="Room Image" />
                </div>
                <div className="card">
                    <img className="card-img-top" src={card2} alt="Room Image" />
                </div>
                <div className="card">
                    <img className="card-img-top" src={card3} alt="Room Image" />
                </div>
            </div>
<br></br><br></br><br></br>
            <div className='single-room-detail'>
                <div className='single-room-detail-para'>
                    <h1>Details</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorum fuga adipisci ullam quibusdam, doloribus aspernatur molestias, nam voluptatibus tenetur expedita maiores. Aut veritatis iste dolorum, modi aliquid dicta voluptatum.</p>
                </div>

                <div className='single-room-detail-list'>
                    <h1>Info</h1>
                    <p>
                        Price: Rs {roomDetails.price} <br />
                        Size: {roomDetails.size} <br />
                        Max Capacity: {roomDetails.capacity} Person <br />
                        Pets: {roomDetails.pets} <br />
                        Free Breakfast: {roomDetails.breakfast} <br />
                    </p>
                </div>
            </div>

            <div className='single-room-detail'>
                <div className='single-room-detail-list2'>
                    <h1>Extras</h1>
                    <p>"Plush pillows and breathable bed linens" <br />
                        "Soft Towels" <br />
                        "AC" <br />
                    </p>
                </div>

                <div className='single-room-detail-list2'>
                    <h1>Extras</h1>
                    <p>"Comfortable Beds" <br />
                        "Amazing view" <br />
                        "Internet" <br />
                    </p>
                </div>

                <div className='single-room-detail-list2'>
                    <h1>Extras</h1>
                    <p>"Plush pillows and breathable bed linens" <br />
                        "Complimentary refreshments" <br />
                        "Adequate safety/security" <br />
                    </p>
                </div>
            </div>

            <center>
                <div>
                    <Link to={`/booknow/${roomType}`}><button className='btn bookNow-btn'>Book Now</button></Link>
                </div>
            </center>

            <MyFooter />
            <MyCopyright />
        </div>
    );
};

export default SingleRoom;
