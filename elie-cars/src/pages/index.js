import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Wrapper,
  Image,
  Cars,
  BottomEdgeDown,
  BottomEdgeUp,
} from "../pageStyles/pageStyles"
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
                slug
                carsMeta {
                  color
                  hp
                  make
                  model
                  year
                  profile {
                    altText
                    sourceUrl
                    imageFile {
                      childImageSharp {
                        fluid(quality: 50, grayscale: true) {
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
        </div>
        <div className="description">
          <p>{homePageHeaderDescription}</p>
        </div>
        <div className="cars">
          <h2>Featured Cars</h2>
          <div className="car-items">
            {homePageFeaturedCars.map(({ carsMeta, slug }) => (
              <Cars to={`${slug}`}>
                <BottomEdgeUp color={COLORS.WHITE} />
                <Image
                  fluid={carsMeta.profile.imageFile.childImageSharp.fluid}
                  altText={carsMeta.make}
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
