import React from "react"
// import Article from "./article"
// import get from 'lodash/get'

// const posts = get(this, 'data.allContentfulBlogPost.edges');


export default ({props}) => (
    <div>
        {console.log('inside article list', props.allContentfulBlogPost)}
        {props.allContentfulBlogPost.edges.map(({node}) => {
            return (
                <li key={node.slug}>
                    <div>{node.author.name}</div>
                    <div>{node.description.description}</div>
                </li>
            )
        })}
    </div>
)



