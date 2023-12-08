import styled from "styled-components";
import { media } from "../../config/theme/media-mixins";

const CompanyWrapper = styled.div`
  padding: 100px 60px 60px;
  ${media.sm`
    padding: 60px 40px 40px;
  `}
  .company-heading {
    p {
      font-size: 28px;
      font-weight: 500;
      line-height: 44.8px;
      letter-spacing: 0.7px;
      color: #696984;
      text-align: center;
      margin-bottom: 33px;
      margin-top: 0;
      ${media.xs`
        font-size: 16px;
        line-height: 28px;
      `}
    }
  }
  .company-logo {
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default CompanyWrapper;
