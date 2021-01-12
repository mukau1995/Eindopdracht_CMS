import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {Wrapper, Image, Cars, BottomEdgeDown, BottomEdgeUp} from "./pageStyles/pageStyles"
import {COLORS} from "../constants"

const CarsPage = ()=>{
    // const {
    //     wpcontent: {
    //       page: {
    //         carsPMeta: { carssPageDescription, bannerPicture },
    //       },
    //       cars: { edges: cars },
    //     },
    //   } = useStaticQuery(graphql()
    
    return(
        <Layout>
            <SEO title="Cars" />
            <Wrapper carsColor={COLORS.BLACK} descriptionColor={COLORS.SECONDARY}>
                <div className="banner">
                   
                </div>
            </Wrapper>
        </Layout>
    )
}

export default CarsPage