import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper, Image } from "./templateStyles/carsTemplateStyles"

const CarsTemplate = ({
  data: {
    wpcontent: {
      car: {
        car,
        types: { edges: carTypes },
      },
    },
  },
}) => {
  const { picture1, picture2, picture3 } = car.pictures
  const pictures = [picture1, picture2, picture3]

  return (
    <Layout>
      <SEO title="Cars" />
      <Wrapper>
        <div className="cars-container">
          <div className="car-image">
            <Image
              fluid={car.profile.imageFile.childImageSharp.fluid}
              alt={car.profile.altText}
            />
            <div className="types">
              {carTypes.map(({ node: type }) => (
                <div key={type.model} className="type">
                  {type.name}
                </div>
              ))}
            </div>
          </div>
          <div className="car-info">
            <h2>
              {car.model} {car.make}
            </h2>
            <p className="description">{car.description}</p>
          </div>
        </div>
        <div className="car-pictures">
          {pictures.map((picture, i) => (
            <div key={i} className="car-picture">
              <Image
                fluid={picture.imageFile.childImageSharp.fluid}
                alt={picture.altText}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </Layout>
  )
}

export default CarsTemplate

export const pageQuery = graphql`
  query($id: ID!) {
    wpcontent {
      type(id: $id, idType: ID) {
        cars {
          edges {
            node {
              content
            }
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
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(quality: 75) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                  altText
                }
                pictures {
                  picture3 {
                    sourceUrl
                    imageFile {
                      childImageSharp {
                        fluid(quality: 75) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                    altText
                  }
                  picture2 {
                    sourceUrl
                    imageFile {
                      childImageSharp {
                        fluid(quality: 75) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                    altText
                  }
                  picture1 {
                    sourceUrl
                    imageFile {
                      childImageSharp {
                        fluid(quality: 75) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                    altText
                  }
                }
              }
              id
            }
          }
        }
      }
    }
  }
`
