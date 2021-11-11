import React from 'react';
import FooterSection from '../../Shared/Footer/FooterSection';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import ReviewSection from '../ReviewSection/ReviewSection';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Services></Services>
            <ReviewSection></ReviewSection>
            <Brands></Brands>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;