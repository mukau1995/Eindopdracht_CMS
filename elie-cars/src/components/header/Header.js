import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {HeaderWrapper} from "./headerStyles/headerStyles"

const Header = ({ siteTitle }) => {
  const {
      wpcontent:{menuItems},
 } = useStaticQuery(graphql`
  query{
    wpcontent {
      menuItems {
        edges {
          node {
            label
            path
          }
        }
      }
    }
  }
  `)
  console.log(menuItems);
  return(
    <HeaderWrapper>
      
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
