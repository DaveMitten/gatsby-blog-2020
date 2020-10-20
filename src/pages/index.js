import React from "react"
import ArticleList from "../components/articleList"
import TagFilter from "../components/tagFilter"
import Layout from "../components/layout"
import {graphql} from "gatsby";

const indexPage =
    ({data}) => {
        return (
            <Layout>
                {/*{console.log('data', data.allContentfulBlogPost.edges)}*/}
                <TagFilter/>
                <div className="bg-white h-3 my-4 mx-auto w-2/3"></div>
                <ArticleList props={data}/>
            </Layout>
        )
    };

export default indexPage;

export const query = graphql`
    query BlogIndexQuery {
        allContentfulBlogPost {
            edges {
                node {
                    slug
                    title
                    tags
                    description {
                        description
                    }
                    heroImage {
                        file {
                            url
                        }
                    }
                    author {
                        name
                    }
                }
            }
        }
    }`;