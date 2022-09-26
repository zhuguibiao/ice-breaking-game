import React, { useState, useEffect, useCallback } from "react"
import tw from "twin.macro"
import SEO from "../components/seo"
import Profile from "../components/Profile"
import Layout from "../components/layout"

const Wrapper = tw.div`w-full max-w-screen-md px-4 md:px-0 mx-auto pt-8 md:pt-12 mt-2 mb-4`
export default ({ data, location }) => {
  return (
    <Layout>
       <SEO title="about" />
      <Wrapper>
        交流或提供游戏：
        <p>邮箱：zhuguibiao1994@gmail.com</p>
      </Wrapper>
      <Profile/>
    </Layout>
  )
}