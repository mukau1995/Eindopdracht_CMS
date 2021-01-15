import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper, Image } from "./templateStyles/carsTemplateStyles"

const CarsTemplate = ({
  data: {
    wpcontent: {
      car: {
        carsMeta,
        types: { edges: types },
      },
    },
  },
}) => {
  const { picture1, picture2, picture3 } = carsMeta.pictures
  const pictures = [picture1, picture2, picture3]

  return (
    <Layout>
      <SEO title="Cars" />
      <Wrapper>
        <div className="cars-container">
          <div className="car-image">
            <Image
              fluid={carsMeta.pictures.picture1.imageFile.childImageSharp.fluid}
              alt={carsMeta.pictures.picture1.altText}
            />
            <div className="types">
              {types.map(({ node: type }) => (
                <div key={type.name} className="type">
                  {type.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}
export default CarsTemplate

export const pageQuery = graphql`
  query($id: ID!) {
    wpcontent {
      car(id: $id, idType: ID) {
        types {
          edges {
            node {
              name
            }
          }
        }
        carsMeta {
          color
          hp
          make
          model
          year
          pictures {
            picture1 {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            picture2 {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            picture3 {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 50) {
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
`
