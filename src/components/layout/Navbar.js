import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function Navbar({icon, title}) {

    // static defaultProps = {
    //     title: 'Github Finder',
    //     icon: 'fab fa-github'
    // } // if props are not passed, then the default props are used

    // static propsTypes = {
    //     title: PropTypes.string.isRequired,
    //     icon: PropTypes.string.isRequired
    // } // restricts the props that can be passed to the component, gives a warning if the props are not valid


    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )

}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
