import React from 'react'
import {graphql} from 'gatsby'
// import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import {BLOCKS, MARKS, INLINES} from "@contentful/rich-text-types"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

// import heroStyles from '../components/hero.module.css'

const Bold = ({children}) => <span className="font-bold">{children}</span>;
const Italic = ({children}) => <span className="italic">{children}</span>;
const Code = ({children}) => <div><pre
    className="bg-gray-300 border-solid border-2 block text-center p-20 border-gray-600">
                                <code>{children}</code></pre>
</div>;
const Underline = ({children}) => <span className="underline">{children}</span>;
const Text = ({children}) => <p className="align-center">{children}</p>;

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
        [MARKS.CODE]: text => <Code>{text}</Code>,
        [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.HEADING_1]: (node, children) => <h2>{children}</h2>,
        [BLOCKS.HEADING_2]: (node, children) => <h3>{children}</h3>,
        [BLOCKS.HEADING_3]: (node, children) => <h4>{children}</h4>,
        [BLOCKS.HR]: (node, children) => <div className="divide-y divide-gray-400">{children}</div>,
        [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal">{children}</ol>,
        [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc">{children}</ul>,
        [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
        [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            let {description, title, file} = node.data.target.fields;
            console.log('description, title, file', description, title, file)
            return (
                <div className="h-48 w-48">
                    <img src={file["en-US"].url} className="h-auto"/>
                </div>

            )
        },


        // [BLOCKS.EMBEDDED_ASSET]: node => {
        //     let { description, title, file } = node.data.target.fields
        //     // console.log(file["en-US"].url)
        //     return <img src={file["en-US"].url} />
        // },
// },
        [INLINES.EMBEDDED_ENTRY]: (node, children) => <
            div
            className="h-20 w-20"> {children}
        </div>,
    },
};

//         QUOTE = 'blockquote',
//
//         EMBEDDED_ENTRY = 'embedded-entry-block',
//         EMBEDDED_ASSET = 'embedded-asset-block',
//
// /**
//  * Map of all Contentful inline types. Inline contain inline or text nodes.
//  */
// enum INLINES {
//     HYPERLINK = 'hyperlink',
//         ENTRY_HYPERLINK = 'entry-hyperlink',
//         ASSET_HYPERLINK = 'asset-hyperlink',
//         EMBEDDED_ENTRY = 'embedded-entry-inline',
// }
//
// export default INLINES;

class BlogPostTemplate extends React.Component {

    render() {
        const post = get(this.props, 'data.contentfulBlogPost');
        // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
        console.log('post', post.richTextPost.json);

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
                            {documentToReactComponents(post.richTextPost.json, options)}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default BlogPostTemplate


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
                json
            }
            tags {
                tags
            }
        }
    }`;
