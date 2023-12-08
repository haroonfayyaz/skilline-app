import styled from 'styled-components'
const LogoWrapper = styled.div`
  position: relative;
  .logo-title {
    position: absolute;
    top: 14px;
    left: 21px;
    font-size: ${({ theme }) => theme.fonts.baseFontXl};
    color: ${({ theme }) => theme.colors.bodyText};
    font-weight: 600;
    letter-spacing: 1.28px;
  }
`

export default LogoWrapper
