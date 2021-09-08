import React from 'react'
import PropTypes from 'prop-types'

import { Navbar } from '../assets/styled'
import { Link } from 'react-router-dom'

export default function NavbarComp(props) {
    return (
        <Navbar>
            <h4>{props.title}</h4>
            <div className="link">
                < Link to='/' >Home</ Link>
                < Link to='/SendMoney' > SendPage</ Link>
            </div>
        </Navbar>
    )
}
NavbarComp.prototype = {
    title: PropTypes.string.isRequired
}


