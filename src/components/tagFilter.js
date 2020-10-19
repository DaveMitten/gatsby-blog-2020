import React from "react"


const tags = ['ALL', 'GATSBY', 'TECH', 'JAVASCRIPT', 'COMPUTER SCIENCE'];

export default () => (
    <div className="flex justify-center text-4xl text-gray-400 h-64">
        {tags.map(i => {
            if (tags[tags.length - 1] !== i) {
                return (
                    <div className="my-auto">
                        <div className="inline">{i}</div>
                        <span className="mx-2">/</span>
                    </div>
                )
            } else {
                return (<div className="inline my-auto">{i}</div>)
            }
        })
        }
    </div>
)