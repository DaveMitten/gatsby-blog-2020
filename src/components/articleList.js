import React from "react"
import {Link} from "gatsby"


export default ({props}) => (
    <div className="flex h-64 justify-center">
        <div className="flex-none h-64 w-12 bg-white mr-16 pt-48">
            <div className="transform -rotate-90 align-baseline text-gray-500">Articles...</div>
        </div>
        <div className='flex-1 grid grid-cols-4 overflow-auto max-w-4xl min-h-full'>
            {props.allContentfulBlogPost.edges.map(({node}) => {
                return (

                    <Link to={`/blog/${node.title}`}>
                        <div className=" h-64 w-48 mb-3 bg-white" key={node.slug}>
                            <img className="h-32 w-48" src={node.heroImage.file.url} alt=""/>
                            <div className="grid grid-rows-2 gap-0 h-32 p-2">
                                <div>
                                    <div className="bg-orange-300 w-10 mb-2 h-1"></div>
                                    <div>{node.title}</div>
                                </div>
                                <div className="mt-auto">{node.tags.tags.map(j => <div
                                    className="mr-1 inline overflow-auto text-gray-400">{j}</div>)}</div>
                            </div>

                        </div>

                    </Link>
                )
            })}
        </div>
        <div className="flex-none h-64 w-12 bg-white ml-16 pt-10">
            <div className="transform rotate-90 text-gray-500 whitespace-no-wrap">More >>></div>
        </div>
    </div>
)



