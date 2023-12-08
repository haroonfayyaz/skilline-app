import styled from "styled-components";
import { media } from "../../config/theme/media-mixins";

const TestimnialsWrapper = styled.div`
  padding: 100px 60px;
  ${media.sm`
    padding: 60px 40px;
  `}
  .testimonial-title {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 32px;
    .line {
      width: 80px;
      height: 1px;
      background-color: #525596;
    }
    h3 {
      color: #525596;
      font-size: 20px;
      letter-spacing: 1px;
      font-weight: 400;
      ${media.xs`
        font-size: 16px;
        line-height: 24px;
      `}
    }
  }
  .testimonial-heading {
    h1 {
      font-size: 60px;
      font-weight: 700;
      line-height: 82px;
      color: #2f327d;
      margin-bottom: 30px;
      ${media.sm`
        font-size: 32px;
        line-height: 42px;
      `}
      ${media.xs`
        font-size: 22px;
        line-height: 28px;
      `}
    }
    p {
      font-size: 26px;
      line-height: 42px;
      letter-spacing: 0.6px;
      color: #696984;
      ${media.sm`
        font-size: 20px;
        line-height: 32px;
      `}
      ${media.xs`
        font-size: 16px;
        line-height: 24px;
      `}
    }
    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: transparent;
      border: 1px solid #f48c06;
      border-radius: 80px;
      padding-left: 38px;
      font-size: 22px;
      color: #f48c06;
      position: relative;
      height: 80px;
      padding-right: 102px;
      margin-top: 43px;
      ${media.lg`
        margin-bottom: 40px;
      `}
      ${media.sm`
        font-size: 16px;
        height: 60px;
      `}
      div {
        width: 80px;
        height: 80px;
        border: 1px solid #f48c06;
        border-right: 0;
        border-radius: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0;
        ${media.sm`
          width: 60px;
          height: 60px;
        `}
      }
    }
  }
  .review-card {
    box-shadow: 2px 4px 10px 0px #292C7C1A;
    background-color: #fff;
    padding: 41px 59px 29px 82px;
    border-left: 14px solid #F67766;
    border-radius: 20px;
    margin-left: 68px;
    margin-top: -180px;
    position: relative;
    ${media.sm`
     margin-left: 0;
      margin-top: -120px;
    `}
    p {
      font-size: 22px;
      line-height: 40px;
      letter-spacing: 0.7px;
      color: #5F5F7E;
      position: relative;
      margin-bottom: 32px;
      ${media.sm`
        font-size: 16px;
        line-height: 28px;
      `}
      &::before {
        content: "";
        position: absolute;
        left: -32px;
        width: 1px;
        height: 90%;
        background-color: #BDBDD1;
        margin-top: 12px;
      }
    }
    .reviews {
      h2 {
        font-size: 24px;
        font-weight: 600;
        color: #5F5F7E;
        ${media.sm`
          font-size: 18px;
        `}
      }
      span {
        color: #80819A;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.7px;
        margin-top: 10px;
        display: block;
        ${media.sm`
          font-size: 14px;
        `}
      }
    }
  }
  .react-multiple-carousel__arrow {
    background-color: #fff;
    box-shadow: 0px 4px 10px 0px #292C7C26;
    &.react-multiple-carousel__arrow--right {
      right: calc(2% + 1px);
    }
    &.react-multiple-carousel__arrow--left {
      left: calc(0% + 1px);
    }
    &::before {
      color: #1EA4CE;
    }
  }
`;

export default TestimnialsWrapper;
