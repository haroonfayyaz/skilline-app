import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive'


import googleLogo from "../../assets/google-logo.svg";
import netflixLogo from "../../assets/netflix-logo.svg";
import airbnbLogo from "../../assets/airbnb-logo.svg";
import amazonLogo from "../../assets/amazon-logo.svg";
import facebookLogo from "../../assets/facebook-logo.svg";
import grabLogo from "../../assets/grab-logo.svg";

import CompanyWrapper from "./style";

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1100 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1100, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 500 },
    items: 2,
  },
  smallScreen: {
    breakpoint: { max: 500, min: 0 },
    items: 2,
  },
};

const companyLogo = [
  {
    logo: googleLogo,
  },
  {
    logo: netflixLogo,
  },
  {
    logo: airbnbLogo,
  },
  {
    logo: amazonLogo,
  },
  {
    logo: facebookLogo,
  },
  {
    logo: grabLogo,
  },
];

const Index = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <CompanyWrapper>
      <Container>
        <div className="company-heading">
          <p>Trusted by 5,000+ Companies Worldwide</p>
        </div>
        <Carousel
          responsive={responsive}
          arrows={false}
          infinite={true}
          slidesToSlide={2}
          deviceType="mobile"
          autoPlay={isMobile  ? true : false}
          swipeable={true}
          draggable={true}
        >
          {companyLogo.map((item, ind) => (
            <div className="company-logo" key={ind}>
              <img src={item.logo} alt="logo" />
            </div>
          ))}
        </Carousel>
      </Container>
    </CompanyWrapper>
  )
};

export default Index
