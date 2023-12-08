import styled from "styled-components";
import { media } from "../../config/theme/media-mixins";

const CloudWrapper = styled.div`
  padding: 100px 60px;
  ${media.sm`
    padding: 60px 40px;
  `}
  .equal-height-row {
    display: flex;
  }
  .equal-height-row > div {
    display: flex;
    flex-direction: column;
  }
  .equal-height-row > div > div {
    flex: 1;
  }
  .cloud-heading {
    text-align: center;
    max-width: 500px;
    margin: 0 auto 40px;
    ${media.sm`
    margin: 0 auto;
       
    `}
    h1 {
      font-size: 36px;
      font-weight: 600;
      line-height: 64px;
      color: #2f327d;
      ${media.sm`
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 24px;
      `}
      ${media.xs`
        font-size: 18px;
        line-height: 28px;
      `}
      span {
        color: #f48c06;
      }
    }
  }
  ul.react-multi-carousel-track {
    height: auto;
    padding: 24px 0px;
  }

  .cloud-card {
    border-radius: 20px;
    box-shadow: 0px 10px 40px 0px #262d7614;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    padding: 54px 32px 50px;
    height: auto;
    min-height: 380px;
    margin: 120px 20px 0;
    ${media.xs`
      padding: 54px 24px 50px;
      `}
    img {
      position: absolute;
      top: 22px;
    }
    h2 {
      font-size: 30px;
      font-weight: 500;
      padding-top: 24px;
      line-height: 45px;
      color: #2f327d;
      margin-bottom: 24px;
      ${media.sm`
        font-size: 24px;
        line-height: 32px;
      `}
      ${media.xs`
        font-size: 18px;
        line-height: 28px;
      `}
    }
    p {
      margin: 0;
      font-size: 20px;
      line-height: 36px;
      color: #696984;
      ${media.xs`
        font-size: 16px;
        line-height: 24px;
      `}
    }
  }
`;

export default CloudWrapper;
