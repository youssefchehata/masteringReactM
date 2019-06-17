import React from 'react'
import PropTypes from 'prop-types'

const Header = ({branding}) => {
    return (
        <div>
            <h1>{branding}</h1>
        </div>
    )
}
 Header.defaultProps={
     branding:'defaultProps:youssef'
 };
 Header.propTypes = {
    branding: PropTypes.string.isRequired
 };
export default Header;
