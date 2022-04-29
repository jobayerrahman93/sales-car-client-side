import React from 'react';
import FooterSection from '../../Shared/Footer/FooterSection';
import SharedNavigation from '../../Shared/Navigation/SharedNavigation.js';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import ReviewSection from '../ReviewSection/ReviewSection';
import Services from '../Services/Services';
import ShopNow from '../ShopNow/ShopNow';
import WhatServices from '../whatService/WhatServices';

const Home = () => {
    return (
        <div>

            <SharedNavigation></SharedNavigation>
           
            <Banner></Banner>
            <WhatServices></WhatServices>
            <Services></Services>
            <ShopNow></ShopNow>
            <ReviewSection></ReviewSection>
            <Brands></Brands>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;