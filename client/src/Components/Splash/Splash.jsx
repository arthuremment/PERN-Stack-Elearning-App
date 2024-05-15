import React from 'react'
import splash from '../../assets/Images/splash.png'
import './Splash.css'

const Splash = ( props ) => {

  const { top, left, width } = props;

  const style = {
    zIndex: 1,
    top: top,
    left: left,
    position: 'absolute',
    width: width
  }
  
  return (
    <img src={splash} alt="splash" style={style} className='splash' />
  )
}

export default Splash