import styled from 'styled-components'
const HeadWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  .navbar {
    padding: 12px 0;
    @media (max-width: 991px) {
      padding: 24px 0px;
    }
    .navbar-nav {
      gap: 64px;
      padding-top: 21px;
      display: flex;
      width: 100%;
      justify-content: end;
      @media (max-width: 1199px) {
        justify-content: start;
        gap: 12px;
      }

      a {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeH1};
        color: ${({ theme }) => theme.colors.secondaryColor};
        letter-spacing: 0.44px;
      }
    }
    @media screen and (max-width: 1199px) {
      .navbar-collapse {
        /* background-color: ${({ theme }) => theme.colors.whiteColor}; */
        padding: 16px;
        border-radius: 16px;
        background: rgba(47, 50, 125, 0.9);
        color: #fff;
        .nav-link {
          color: #fff;
          &:hover {
            color: #f48c06;
          }
        }
      }
    }
  }
  .fixed-bg {
    background: #2f327d;
    .navbar-nav {
      a {
        color: ${({ theme }) => theme.colors.whiteColor};
        &:hover {
          color: #f48c06;
        }
      }
    }
    .logo-title {
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }
`

export default HeadWrapper; 