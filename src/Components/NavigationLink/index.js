import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLink = ({content, to, ...props}) => {
  return (
    <Link className='navi-link' to={to} {...props}>{content}</Link>
  )
}

export default NavigationLink