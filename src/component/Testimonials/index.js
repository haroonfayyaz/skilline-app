import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import arrowRight from "../../assets/arrow-right-orange.svg";
import testimonialImg from "../../assets/testimonial-image.svg";

import TestimnialsWrapper from "./style";

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};

const testimonialData = [
  {
    img: testimonialImg,
    review: `"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."`,
    clientName: "Gloria Rose",
    rating: 4,
  },
  {
    img: testimonialImg,
    review: `"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."`,
    clientName: "John Doe",
    rating: 3,
  },
  {
    img: testimonialImg,
    review: `"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."`,
    clientName: "Gloria Rose",
    rating: 1,
  },
  {
    img: testimonialImg,
    review: `"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."`,
    clientName: "Gloria Rose",
    rating: 5,
  },
];

const Index = () => {
  return (
    <TestimnialsWrapper>
      <Container>
        <Row>
          <Col lg={5}>
            <div className="testimonial-title">
              <div className="line" />
              <h3>TESTIMONIAL</h3>
            </div>
            <div className="testimonial-heading">
              <h1>What They Say?</h1>
              <p>
                Skilline has got more than 100k positive ratings from our users
                around the world.
              </p>
              <p>
                Some of the students and teachers were greatly helped by the
                Skilline.
              </p>
              <p>Are you too? Please give your assessment</p>
              <button>
                <span>Write your assessment</span>
                <div className="arrow-circle">
                  <img src={arrowRight} alt="arrow" />
                </div>
              </button>
            </div>
          </Col>
          <Col lg={7}>
            <Carousel responsive={responsive} >
              {testimonialData.map((item, ind) => (
                <div key={ind}>
                  <img src={item.img} alt="testimonial" width="560px" />
                  <div className="review-card">
                    <p>{item.review}</p>
                    <div className="reviews d-flex align-items-center justify-content-between">
                      <h2>{item.clientName}</h2>
                      <div>
                        <StarRatings
                          rating={item.rating}
                          starDimension="20px"
                          starSpacing="4px"
                          starRatedColor="#FBA333"
                        />
                        <span>12 reviews at Yelp</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </TestimnialsWrapper>
  );
};

export default Index;
