import React from 'react'
import Logo from '../../static/images/logo.svg'
import LogoWrapper from './style'

const  Index =() =>{
  return (
    <LogoWrapper>
      <img src={Logo}  alt="no-logo" />
      <div className="logo-title">Skilline </div>
    </LogoWrapper>
  )
}

export default Index
