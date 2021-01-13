import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {Wrapper, Image, Cars, BottomEdgeDown, BottomEdgeUp} from "./pageStyles/pageStyles"
import {COLORS} from "../constants"

const CarsPage = ()=>{
    const {
        wpcontent:{
       page:{
           carsPMeta:{
             carsPageDescription,
            carsPageHeaderPicture},
       },
       cars:{edges: cars}    
        }
    } = useStaticQuery(graphql`
    query{
        wpcontent {
            page(id: "cars", idType: URI) {
              carsPMeta {
                carsPageHeaderPicture {
                    sourceUrl
                    imageFile{
                        childImageSharp{
                            fluid(quality:100){
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                  altText
                }
                carsPageDescription
              }
            }
            cars {
                edges {
                  node {
                    carsMeta {
                      color
                      make
                      hp
                      model
                      year
                    }
                    slug
                  }
                }
              }
        }
    }
    `)
    
    return(
        <Layout>
            <SEO title="Cars" />
            <Wrapper carsColor={COLORS.BLACK} descriptionColor={COLORS.SECONDARY}>
                <div className="banner">
                   <Image fluid={carsPageHeaderPicture.imageFile.childImageSharp.fluid}/>
                   <BottomEdgeDown color={COLORS.BLACK}/>
                </div>
            </Wrapper>
        </Layout>
    )
}

export default CarsPage