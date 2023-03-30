import React from 'react';
import "./ComponentNavBar.css"
const ComponentNavbar = (props) => {
  return (
    <>
        <p className='name-button'>{props.name}</p>
    </>
  )
}

export default ComponentNavbar;