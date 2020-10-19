import React from "react"
import Header from "./header.js"
import Footer from "./footer.js"

export default ({children}) => (
    <div className="bg-gray-200 h-screen grid grid-flow-row">
        <Header rowStart="row-span-1"  />
        <div className="row-span-1">
            {children}
        </div>
        <Footer rowEnd="row-span-1" />
    </div>
)