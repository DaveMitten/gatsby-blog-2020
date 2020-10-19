import React from "react"
// import Article from "./article"
// import get from 'lodash/get'

// const posts = get(this, 'data.allContentfulBlogPost.edges');


export default ({props}) => (
    <div className="flex h-64">
            <div className="flex-none h-64 w-12 bg-white mx-32 pt-48">
                <div className="transform -rotate-90 align-baseline">Articles</div>
            </div>
        <div className='flex-1'>
            {props.allContentfulBlogPost.edges.map(({node}) => {
                return (
                    <li key={node.slug}>
                        <div>{node.author.name}</div>
                        <div>{node.description.description}</div>
                    </li>
                )
            })}
        </div>
        <div className="flex-none h-64 w-12 bg-white mx-32 pt-10">
            <div className="transform rotate-90">More...</div>
        </div>
    </div>
)



