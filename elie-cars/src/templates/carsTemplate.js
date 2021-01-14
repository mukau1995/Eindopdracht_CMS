import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Wrapper, Image } from "./templateStyles/carsTemplateStyles"

const CarsTemplate = ({
  data: {
    wpcontent: {
      carsMeta,
      cars: {
        type: { edges: types },
      },
    },
  }
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
              fluid={carsMeta.profile.imageFile.childImageSharp.fluid}
              alt={carsMeta.profile.altText}
            />
            <div className="types">
              {types.map(({node: type})=>(
                <div key={type.title} className="type">
                  {type.title}
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
      type(id: $id, idType: ID) {
        cars {
          edges {
            node {
              title
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
              slug
            }
          }
        }
      }
    }
  }
`
