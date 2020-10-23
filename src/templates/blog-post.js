import React from 'react'
import {graphql} from 'gatsby'
// import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

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
                    <div >
                        <h1 className="text-4xl mb-2">{post.title}</h1>
                        <p  className="text-1xl mb-2">
                            {post.dateAndTime}
                        </p>
                        <div className="overflow-auto"
                            dangerouslySetInnerHTML={{
                                __html: post.richTextPost.childContentfulRichText.html
                            }}
                        />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default BlogPostTemplate

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
