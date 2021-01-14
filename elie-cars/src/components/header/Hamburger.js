import React from "react"
import PropTypes from 'prop-types'
import {HamburgerButton} from './headerStyles/headerStyles'

import {GiHamburgerMenu} from 'react-icons/gi'

const Hamburger = ({handlerOverlayMenu})=>{
    return(
        <HamburgerButton onClick={handlerOverlayMenu} tabIndex="0">
            <GiHamburgerMenu style={{width:"3rem", height: "3rem"}}/>
        </HamburgerButton>
    )
}

Hamburger.PropTypes={
    handlerOverlayMenu: PropTypes.func,

}

export default Hamburger