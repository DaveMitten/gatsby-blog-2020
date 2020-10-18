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
                <TagFilter />
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