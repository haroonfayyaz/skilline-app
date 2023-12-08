import styled from "styled-components";
import { media } from "../../config/theme/media-mixins";

const Container = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 102px;
  align-items:center ;

  ${media.lg`
  padding: 0 80px;
  `}
  ${media.xl`
  padding: 0 20px;
  `}

  ${media.md`
  padding: 0 60px;
  `}

  ${media.sm`
  padding: 0 40px;
  `}

  ${media.xs`
    padding: 0 20px;
  `}
    @media(min-width:1920px) {
    max-width: 1920px;
    margin: 0 auto;
  }
`
export default Container;
