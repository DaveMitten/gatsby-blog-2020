import React from "react"
// import Article from "./article"
// import get from 'lodash/get'

// const posts = get(this, 'data.allContentfulBlogPost.edges');


export default ({props}) => (
    <div className="flex h-64 ">
        <div className="flex-none h-64 w-16 bg-white mx-16 pt-48">
            <div className="transform -rotate-90 align-baseline text-gray-500">Articles...</div>
        </div>
        <div className='flex-1 grid grid-flow-col overflow-auto'>
            {props.allContentfulBlogPost.edges.map(({node}) => {
                return (
                    <div className="h-64 w-48" key={node.slug}>
                        <img className="h-32 w-48" src={node.heroImage.file.url} alt=""/>
                        <div className="bg-white p-2 h-full">
                            <div>{node.title}</div>
                            <div>{node.tags}</div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="flex-none h-64 w-12 bg-white mx-16 pt-10">
            <div className="transform rotate-90 text-gray-500">More...</div>
        </div>
    </div>
)



