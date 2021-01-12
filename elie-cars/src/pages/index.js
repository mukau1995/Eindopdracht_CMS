import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    wpcontent{
    page(id: "home", idType: URI) {
      homeMeta {
        homePageHeaderDescription
        homePageHeaderTitle
        homePageFeaturedCars {
          ... on WPGraphql_Car {
            id
            carsMeta {
              color
              hp
              fieldGroupName
              make
              model
              pictures {
                fieldGroupName
                picture1 {
                  altText
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
  return(
    <Layout>
    <SEO title="Home" />
  </Layout>
  )
}


export default IndexPage
