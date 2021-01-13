import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {
  Wrapper,
  Image,
  Cars,
  BottomEdgeDown,
  BottomEdgeUp,
} from "./pageStyles/pageStyles"
import { COLORS } from "../constants"

const IndexPage = () => {
  const {
    wpcontent: {
      page: {
        homeMeta: {
          homePageHeaderDescription,
          homePageHeaderTitle,
          homeHeaderPicture,
          homePageFeaturedCars,
        },
      },
    },
  } = useStaticQuery(graphql`
    query {
      wpcontent {
        page(id: "home", idType: URI) {
          homeMeta {
            homePageHeaderDescription
            homePageHeaderTitle
            homeHeaderPicture {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            homePageFeaturedCars {
              ... on WPGraphql_Car {
                id
                carsMeta {
                  color
                  hp
                  make
                  model
                  year
                  pictures {
                    altText
                    sourceUrl
                    imageFile {
                      childImageSharp {
                        fluid(quality: 100, grayscale: true) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <div className="banner">
          <Image
            fluid={homeHeaderPicture.imageFile.childImageSharp.fluid}
            alt={homeHeaderPicture.altText}
          />
          <div className="inner-div">
            <p className="header-title">{homePageHeaderTitle}</p>
            <p className="header-description">{homePageHeaderDescription}</p>
          </div>
          <BottomEdgeDown color={COLORS.BLACK} />
        </div>
        <div className="description">
          <p>{homePageHeaderDescription}</p>
          <BottomEdgeUp color={COLORS.PRIMARY} />
        </div>
        <div className="cars">
          <h2>Featured Cars</h2>
          <div className="car-items">
            {homePageFeaturedCars.map(({ carsMeta, slug }) => (
              <Cars to={`${slug}`}>
                <Image
                  fluid={carsMeta.pictures.imageFile.childImageSharp.fluid}
                  altText={carsMeta.make, carsMeta.model}
                />
                <div className="car-info">
                  <p>
                    Car: {carsMeta.make} {carsMeta.model}
                  </p>
                  <p>Horse Power: {carsMeta.hp}</p>
                </div>
              </Cars>
            ))}
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
