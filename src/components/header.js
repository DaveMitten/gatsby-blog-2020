import React from "react"
import {Link} from "gatsby";


export default (props) =>
    (
        <div
            className={props.rowStart + ` flex flex-wrap place-items-center justify-between bg-white h-20 text-gray-200`}>
            <Link to="/">
                <div
                    className="ml-10 hover:bg-gray-200 hover:text-green-400 transition duration-500 ease-in-out rounded">
                    <div className="flex inline-flex h-1 w-1">
                    <div className="rounded-full h-1 w-1 bg-pink-500">
                    </div>
                    </div>
                    {/*<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75">*/}

                    {/*</span>*/}


                    <h1 className="px-2 inline mr-1 text-gray-400 hover:">David James Mitten</h1>||
                    <h2 className="px-2 inline ml-1">
                        <span className="text-green-400 mr-1">Developer</span>/<span
                        className="text-green-400 ml-1">Designer</span>
                    </h2>
                    <div className="flex inline-flex flex-row-reverse h-1 w-1">
                    <div className="relative rounded-full h-1 w-1 bg-pink-500"></div>
                    </div>
                </div>
            </Link>
            <div className="mr-5 text-gray-400">
                <label htmlFor="email">Join the list for the latest news and updates:</label>
                <input type="email" id="email" name="email" className="ml-1 bg-gray-200"></input>
            </div>
        </div>
    )