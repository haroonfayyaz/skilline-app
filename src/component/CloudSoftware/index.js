import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from 'react-responsive'

import fileInvoice from "../../assets/file-invoice.svg";
import calendarCircle from "../../assets/calander-circle.svg";
import userCircle from "../../assets/user-circle.svg";

import CloudWrapper from "./style";

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1200, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max:768 , min: 0 },
    items: 1,
  },
};

const cloudData = [
  {
    img: fileInvoice,
    title: "Online Billing, Invoicing, & Contracts",
    desc: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
  },
  {
    img: calendarCircle,
    title: "Easy Scheduling & Attendance Tracking",
    desc: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    img: userCircle,
    title: "Customer Tracking",
    desc: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization",
  },
];

const Index = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <CloudWrapper>
      <Container>
        <div className="cloud-heading">
          <h1>
            All-In-One <span>Cloud Software.</span>
          </h1>
          <p>
            Skilline is one powerful online software suite that combines all the tools needed to run a successful school
            or office.
          </p>
        </div>
        <Carousel
          responsive={responsive}
          arrows={false}
          autoPlay={isMobile ? true : false}
          infinite={false}
          itemClass="equal-height-row"
          swipeable={true}
          draggable={true}
        >
          {cloudData.map((data, ind) => (
            <div className="cloud-card" key={ind}>
              <img src={data.img} alt="circle" />
              <div>
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </CloudWrapper>
  )
};

export default Index;
