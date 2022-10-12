import React, { useState, useEffect, useCallback } from "react"
import tw, { css } from "twin.macro"
import SEO from "../components/seo"
import Profile from "../components/Profile"
import Layout from "../components/layout"

const Wrapper = tw.div`w-full max-w-screen-md px-4 md:px-0 mx-auto pt-4 md:pt-12 mt-2 mb-4`
export default ({ data, location }) => {
  return (
    <Layout>
      <SEO title="about" />

      <Wrapper
        css={css`
        p{margin: 7px 0;}
      `}>
        <p><b>破冰游戏</b>的分类是以小组中新人比例、小组组员参与的积极程度和小组中慕道友的比例为主要参考因素。然而游戏分类仅作参考，请主持人按照实际情况来选择。</p>
        <br />
        <p><b>探索期：</b>适合新人比例高的小组，帮助大家互相认识，打开生疏的局面。</p>
        <p><b>适应期：</b>适合被动组员较多的小组，或新人比例较低的小组，旨在帮助新人和较少参加小组活动的组员融入小组。</p>
        <p><b>凝聚期：</b>适合组员之间有一定熟悉程度的小组，促进组员之间更深入的相互了解，从而建立更深层的关系。</p>
        {/* <p><b>团队精神：</b>适合彼此有一定了解的小组，更强调团队合作，让彼此有互相帮衬、共同参与的机会。</p> */}
        <p><b>出发期：</b>适合带有福音性质且有慕道友的小组聚会，让慕道友通过游戏初步接触基督信仰。</p>
        <p><b>大型游戏：</b>适合人多的时候玩，一起喜乐，一起破冰。</p>
        <p><b>线上：</b>适合zoom直播视频的时候一起玩的游戏</p>
        <br />
        <p>交流或提供游戏：</p>
        <p>邮箱1：zhuguibiao1994@gmail.com</p>
      </Wrapper>
      <Profile />
    </Layout>
  )
}