import React from 'react'
import {graphql} from 'gatsby'
// import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {} from '@contentful/rich-text-types'

// import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
    render() {
        const post = get(this.props, 'data.contentfulBlogPost');
        // const siteTitle = get(this.props, 'data.site.siteMetadata.title')

        return (
            <Layout screen="h-full">
                {/*<div className="container mx-auto px-64 bg-white overflow-scroll">*/}
                <div className="mx-64 px-48 py-10 m-10 bg-white overflow-scroll rounded-lg">
                    {/*<Helmet title={`${post.title} | ${siteTitle}`} />*/}
                    <div>
                        <Img
                            alt={post.title}
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl mb-2">{post.title}</h1>
                        <p className="text-1xl mb-2">
                            {post.dateAndTime}
                        </p>
                        <div className="overflow-auto">
                            {documentToReactComponents(post)}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default BlogPostTemplate


// import {BLOCKS, MARKS} from "@contentful/rich-text-types"
// import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
//
// const Bold = ({children}) => <span className="bold">{children}</span>
// const Text = ({children}) => <p className="align-center">{children}</p>
//
// const options = {
//     renderMark: {
//         [MARKS.BOLD]: text => <Bold>{text}</Bold>,
//     },
//     renderNode: {
//         [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
//     },
// }
//
// documentToReactComponents(node.bodyRichText.json, options)

export const pageQuery = graphql`
    query BlogPostQuery($slug: Int!){
        contentfulBlogPost(slug: {eq: $slug}) {
            slug
            title
            dateAndTime
            heroImage {
                fluid {
                    src
                }
                file {
                    url
                }
            }
            richTextPost {
                childContentfulRichText {
                    html
                }
                id
            }
            tags {
                tags
            }
        }
    }

`
