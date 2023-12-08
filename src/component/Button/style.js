import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
const ButtonWrapper = styled(Button)`
  border-radius: 50px;
  letter-spacing: 0.44px;
  min-width: 160px;
  padding: ${(props) => (props.padding ? `${props.padding}` : '12px')};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : '24px')};
  @media (max-width: 575px) {
    font-size:12px;
    padding:8px;
    min-width:auto
  }
  &.btn-secondary {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.bodyLight};
    border-color: ${({ theme }) => theme.colors.whiteColor};
  }
  &.btn-primary {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    border-color: ${({ theme }) => theme.colors.primaryColor};
  }
  &.btn-outlined {
    background-color: ${(props) => (props.backgroundColor ? `${props.backgroundColor}` : '')};
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`

export default ButtonWrapper