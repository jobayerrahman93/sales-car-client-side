import React from 'react';
import FooterSection from '../../Shared/Footer/FooterSection';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import ReviewSection from '../ReviewSection/ReviewSection';
import Services from '../Services/Services';
import ShopNow from '../ShopNow/ShopNow';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Services></Services>
            <ShopNow></ShopNow>
            <ReviewSection></ReviewSection>
            <Brands></Brands>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;