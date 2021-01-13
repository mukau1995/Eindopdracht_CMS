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

const CarsPage = () => {
  const {
    wpcontent: {
      page: {
        carsPMeta: { carsPageDescription, carsPageHeaderPicture },
      },
      cars: { edges: carsData },
    },
  } = useStaticQuery(graphql`
    query {
      wpcontent {
        page(id: "cars", idType: URI) {
          carsPMeta {
            carsPageHeaderPicture {
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 100) {
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
                hp
                make
                model
                year
                profile {
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
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Cars" />
      <Wrapper carsColor={COLORS.BLACK} descriptionColor={COLORS.SECONDARY}>
        <div className="banner">
          <Image
            fluid={carsPageHeaderPicture.imageFile.childImageSharp.fluid}
          />
          <BottomEdgeDown color={COLORS.SECONDARY} />
        </div>
        <div className="description">
          <p>{carsPageDescription}</p>
          <BottomEdgeUp color={COLORS.BLACK} />
        </div>
        <div className="cars">
          <h2>Our Cars</h2>
          <div className="car-items">
            {carsData.map(({ node: { carsMeta, slug, i } }) => (
              <Cars to={`/${slug}`} key={i}>
                <Image
                  fluid={carsMeta.profile.imageFile.childImageSharp.fluid}
                  altText={carsMeta.make}
                />

                <div className="car-info">
                  <p>
                    {carsMeta.make} {carsMeta.model}
                    <br />
                    {carsMeta.year}
                  </p>
                  <p>{carsMeta.hp}</p>
                </div>
              </Cars>
            ))}
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default CarsPage
