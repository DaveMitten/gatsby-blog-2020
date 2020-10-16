import React from "react"
// import Article from "./article"
import { graphql } from 'gatsby'
import get from 'lodash/get'

const posts = get(this, 'props.data.allContentfulBlogPost.edges');


export default () => (
  <div>
    {posts.map(({ node }) => {
      return (
          <li key={node.slug}>
            <div>{node.author.name}</div>
            <div>{node.description.description}</div>
          </li>
      )
    })}
  </div>
)


export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost {
      edges {
        node {
          author {
            name
          }
          description {
            description
          }
        }
      }
    }
  }`;
