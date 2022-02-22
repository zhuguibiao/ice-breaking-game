import * as React from "react"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const PostTemplate = () => {
  let disqusConfig = {
  }
  return (
    <>
      <h1>评论</h1>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </>
  )
}

export default PostTemplate