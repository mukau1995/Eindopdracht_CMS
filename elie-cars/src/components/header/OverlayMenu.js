import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {OverlayWrapper, Image, CloseButton, MenuList} from './headerStyles/headerStyles'

const OverlayMenu=({handlerOverlayMenu, menuOpen})=>{
    const {
        logo,
        wpcontent: { menuItems },
      } = useStaticQuery(graphql`
        query {
          logo: file(relativePath: { eq: "elie-cars-logo.png" }) {
            childImageSharp {
              fixed(quality: 100, width: 200) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
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
    
    return(
        //fragments worden gebruikt om meerdere componenten onder elkaar te kunnen retourneren
        <>
        {menuOpen &&(
            <OverlayWrapper>
                <CloseButton onClick={handlerOverlayMenu}> X</CloseButton>
                <Link to="/home" style={{marginBottom:"1.5rem"}}>
                <Image alt="logo elie cars" fixed={logo.childImageSharp.fixed}/>
                </Link>
                <MenuList style={{flexDirection: "column"}}>
                    {menuItems.edges.map(({node: item}, i) =>(
                        <li key={i}>
                            <Link activeClassName="nav-active" to={item.path}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </MenuList>
            </OverlayWrapper>
        )}
        </>
    )
}

export default OverlayMenu