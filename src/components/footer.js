import React from "react"


export default (props) =>
    (
        <div className={props.rowEnd + ` bg-blue w-full`}>
            <div className="bg-white w-full h-full text-gray-400">
                <div className='w-auto h-full flex justify-center'>
                    <div className="mx-2 my-auto">Github</div>
                    <div className="mx-2 my-auto">Website</div>
                    <div className="mx-2 my-auto">Email</div>
                </div>
            </div>
        </div>
    )