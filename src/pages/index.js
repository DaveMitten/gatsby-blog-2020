import React from "react"
import ArticleList from "../components/articleList"
import TagFilter from "../components/tagFilter"
import Layout from "../components/layout"
import {graphql} from "gatsby";

const indexPage =
    ({data}) => {
        return (
            <Layout screen="h-screen">
                <TagFilter props={data} />
                <div className="bg-white h-3 my-4 mx-auto w-11/12 mb-12"></div>
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
                    dateAndTime
                    heroImage {
                        file {
                            url
                        }
                    }
                    richTextPost {
                        childContentfulRichText {
                            html
                        }
                    }
                    tags {
                        tags
                    }
                }
            }
        }
    }`;