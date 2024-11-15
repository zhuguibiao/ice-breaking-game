import React, { useEffect, useState } from "react"
import { graphql, navigate, Link } from "gatsby"
import SEO from "../components/seo"
import Profile from "../components/Profile"
import tw, { css } from "twin.macro"
import Markdown from "../components/Markdown"
import Navigator from "../components/Navigator"
import Divider from "../components/Divider"
import TableOfContents from "../components/TableOfContents"
import Layout from "../components/layout"
import Tags from "../components/Tags"
import ShareButtons from "../components/ShareButtons"
import { Disqus } from 'gatsby-plugin-disqus';

const Wrapper = tw.div`w-full max-w-screen-md mx-auto`
const NAV_OFFSET_Y = 36

export default ({ data, pageContext, location }) => {
  const metaData = data.site.siteMetadata
  const { markdownRemark } = data
  const { frontmatter, html, tableOfContents, excerpt } = markdownRemark
  const [currentHeaderUrl, setCurrentHeaderUrl] = useState(undefined)

  const isTOCVisible = tableOfContents?.length > 0

  const handleTagClick = (tag) => {
    navigate(`/?tag=${tag}`)
  }

  useEffect(() => {
    const handleScroll = () => {
      let aboveHeaderUrl
      const currentOffsetY = window.pageYOffset
      const headerElements = Array.prototype.slice
        .call(document.querySelectorAll(".toc-header"))
        .filter(function (el) {
          return !el.closest(
            "blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4, blockquote > h5, blockquote > h6"
          )
        })

      for (const elem of headerElements) {
        const { top } = elem.getBoundingClientRect()
        const elemTop = top + currentOffsetY
        const isLast = elem === headerElements[headerElements.length - 1]
        if (currentOffsetY < elemTop - NAV_OFFSET_Y) {
          aboveHeaderUrl &&
            setCurrentHeaderUrl(aboveHeaderUrl.split(window.location.origin)[1])
          !aboveHeaderUrl && setCurrentHeaderUrl(undefined)
          break
        } else {
          isLast &&
            setCurrentHeaderUrl(elem.href.split(window.location.origin)[1])
          !isLast && (aboveHeaderUrl = elem.href)
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Layout>
        <SEO title={frontmatter.title} description={excerpt} />
        <div css={tw`mt-4 px-4`} className="blog-post-container">
          <div className="blog-post">
            <Wrapper>
              <h1
                className="blog-title"
                css={tw`text-4xl md:text-5xl font-bold mb-4`}
              >
                {frontmatter.title}
              </h1>
              <h2 className="blog-date" css={tw`text-base mb-4`}>
                {frontmatter.date}
              </h2>
              <div className="blog-tags" css={tw`mb-2`}>
                <Tags tags={frontmatter.tags} onClick={handleTagClick} />
              </div>
              <div css={css`color: #FF813E;`}>
                <Link css={css`font-weight:bold;`} to="/game-notice">《游戏心得》</Link>
                <Link to="/bookmark">《其他游戏链接》</Link>
                <Link to="/pdf">《游戏文档》</Link>
              </div>
              <Divider color />
            </Wrapper>
            <div className={"blog-content"}>
              {isTOCVisible && (
                <TableOfContents
                  toc={tableOfContents}
                  currentHeaderUrl={currentHeaderUrl}
                />
              )}
              <Wrapper>
                <Markdown html={html} />
              </Wrapper>
            </div>
            <Wrapper>
              {/* <div style={{ marginTop: '10px' }}>
                <Disqus
                  config={{
                    // url: 'https://icebreakinggames.gatsbyjs.io/',
                    // identifier: 'https-icebreakinggames-gatsbyjs-io',
                    // title: '破冰游戏',
                  }}
                />
              </div> */}

              <ShareButtons
                url={location.href}
                text={`
              ${frontmatter.title} - ${metaData.author}\n
              ${excerpt}`}
              />
              {metaData.sponsor.buyMeACoffeeId && (
                <div css={tw`flex justify-end px-2`}>
                  <a
                    css={css`
                      ${tw`flex px-3 py-1 my-2 rounded text-white`}
                      background-color: #FF813E;
                    `}
                    // target="_blank"
                    rel="noopener noreferrer"
                  // href={`https://www.buymeacoffee.com/${metaData.sponsor.buyMeACoffeeId}`}
                  >

                    <img
                      css={tw`mr-2`}
                      src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
                      alt="Buy me a coffee"
                    />
                    <span>喝杯咖啡</span>
                  </a>
                </div>
              )}
            </Wrapper>
          </div>
        </div>
        <Wrapper>
          <Navigator pageContext={pageContext} />
          <Profile />
          {/* <div css={tw`mt-5 mx-2`}>
            <Utterances repo={metaData.comment.utterances} />
          </div> */}
        </Wrapper>
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    site {
      siteMetadata {
        author
        comment {
          utterances
        }
        sponsor {
          buyMeACoffeeId
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 200, truncate: true)
      html
      tableOfContents
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
      }
    }
  }
`
