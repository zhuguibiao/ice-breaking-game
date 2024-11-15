import React, { useContext, useState, useEffect } from "react"
import tw, { css } from "twin.macro"
import SEO from "../components/seo"
import Profile from "../components/Profile"
import Layout from "../components/layout"
import ThemeContext from "../lib/context/ThemContext"

const fileList = [
  '恩溪-5G小组游戏库（更新）.pdf',
  '主日学课件.pdf',
  '良友讲义.pdf',
  '恩溪破冰游戏库.pdf',
  '小组聚会常用游戏一.pdf',
  '小组聚会常用游戏二.pdf',
  '室内破冰小游戏大全70个.pdf',
  '2019年4月户外游戏.pdf',
  '济宁-小組破冰活动.pdf',
  '破冰游戏 - 粱廷益.pdf',
  '济宁爱迪--破冰锦囊.pdf',
  '培训游戏.pdf',
  '游戏攻略.pdf',
  '破冰游戏.pdf',
  '团队游戏的设计.pdf',
  '动态反思带领技巧.pdf',
  '青年聚会游戏说明.pdf',
  '细胞小组破冰游戏2010.pdf',
  '破冰大全（混龄版）.pdf',
  '适合人数多，节日的游戏.pdf',
]

const fileListBigsize = [
  '【游戏活动】游戏疯 Crazy Game （有图）.pdf',
  '【游戏活动】一起玩斗-100个发展性主题游戏活动.pdf',
  '【游戏活动】一玩再玩-125个热身游戏带领技巧.pdf',
  '【游戏活动】一呼百应-200个训练活动带领技巧.pdf',
  '【游戏活动】一团和戏-130个团队游戏带领技巧.pdf',
  '【游戏活动】体验教育-从150个游戏中学习（Ⅰ）.pdf',
  '【游戏活动】体验教育-从150个游戏中学习（Ⅱ）.pdf',
  '【游戏活动】举一玩十-一种物质带领多种游戏.pdf',
]

const Wrapper = tw.div`w-full max-w-screen-md px-4 md:px-0 mx-auto pt-4 md:pt-12 mt-2 mb-4`
export default ({ data, location }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const [lName, setLName] = useState('/ice-breaking-game')

  useEffect(() => {
    if (location.href) {
      setLName(location.href.indexOf('ice-breaking-game') === -1 ? '' : '/ice-breaking-game')
    }
  }, [])


  return (
    <Layout>
      <SEO title="文档" />
      <Wrapper
        css={css`
        p{margin: 7px 0;}
        p a{
          color: ${isDarkMode ? "#bd93f9" : "#3737B9"}
        }
      `}>
        <p>网络问题，文档第一次加载可能会慢些，请耐心等候~~</p>
        {fileList.map((item, index) => {
          return (
            <p key={index}><a href={`${lName}/pdfjs/viewer.html?url=${item}`}>{item}</a></p>
          )
        })}
        
        <br/>
        <p>下面的是较大的文档：</p>
        {fileListBigsize.map((item, index) => {
          return (
            // <p key={index}><a href={`${lName}/pdfjs/viewer.html?url=https://wjceo.com/zhuguibiao/${item}`}>{item}</a></p>
            <p key={index}><a href={`${lName}/pdfjs/viewer.html?url=${item}`}>{item}</a></p>
          )
        })}

      </Wrapper>
      <Profile />
    </Layout>
  )
}