import React from "react"


export default () =>
    (
        //container
        <div className="flex flex-wrap place-items-center justify-between bg-white h-20 text-gray-200">
            <div className="ml-10">
                <h1 className="inline mr-1 text-gray-400">David James Mitten</h1>||
                <h2 className="inline ml-1">
                    <span className="text-green-400 mr-1">Developer</span>/<span
                    className="text-green-400 ml-1">Designer</span>
                </h2>
            </div>
            <div className="mr-5 text-gray-400">
                <label htmlFor="email">Join the list for the latest news and updates:</label>
                <input type="email" id="email" name="email" className="ml-1 bg-gray-200"></input>
            </div>
        </div>
    )