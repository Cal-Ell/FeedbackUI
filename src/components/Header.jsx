import React from 'react';
import PropTypes from 'prop-types'

const Header = ({text, bgColor, textColor}) => {
  const headerStyles = {
    backgroundColor: bgColor, 
    color: textColor
  }

  return (
    <header style={headerStyles}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

//defaulted props incase no props is passed in
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0, 0, 0, 0.4)',
    textColor: '#ff6a95'
}

//checks typing for props
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header