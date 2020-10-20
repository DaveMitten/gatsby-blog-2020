import React from "react"
// import Article from "./article"
// import get from 'lodash/get'

// const posts = get(this, 'data.allContentfulBlogPost.edges');


export default ({props}) => (
    <div className="flex h-64 justify-center">
        <div className="flex-none h-64 w-12 bg-white mx-16 pt-48">
            <div className="transform -rotate-90 align-baseline text-gray-500">Articles...</div>
        </div>
        <div className='flex-1 grid grid-cols-3 auto-cols-auto overflow-auto max-w-4xl gap-4 min-h-full'>
            {props.allContentfulBlogPost.edges.map(({node}) => {
                return (
                    <div className="h-64 w-48 mb-3 bg-white" key={node.slug}>
                        <img className="h-32 w-48" src={node.heroImage.file.url} alt=""/>
                        <div className="p-2">
                            <div>{node.title}</div>
                            <div>{node.tags}</div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="flex-none h-64 w-12 bg-white mx-16 pt-10">
            <div className="transform rotate-90 text-gray-500">More >>></div>
        </div>
    </div>
)



