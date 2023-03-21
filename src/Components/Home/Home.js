import React from 'react';
import "../../Styles/CommonStyle.css"
import car from "../../Images/car.png"

const Home = () => {
    return (
        <div className='container pt-5'>
            <h1 className='text-danger text-center mainFont fw-bold mt-5'>HERO RIDER</h1>
            <p className='text-center'>Another name of success is hero rider. The best and trusted riding site</p>
            <div className='w-100 d-flex justify-content-center mt-5 pt-5 mb-2'>
                <img className='w-75' src={car} alt="" />
            </div>
            <marquee direction='right'> <b className='text-custom1'>Hero Rider</b> is offering up to <b>30% discount</b> for every customer depending on previous history and for new customer we are offering <b>60% discount</b>  for the <b className='text-custom1'>promocode="NEW60"</b></marquee>

        </div>
    );
};

export default Home;