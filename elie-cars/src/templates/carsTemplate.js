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
  console.log(types)
    return (
    <Layout>
      <SEO title="Cars" />
      <Wrapper>
        <div>Hallo</div>
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
              id
            }
          }
        }
      }
    }
  }
`
