import React from "react"
import Header from "./header.js"
import Footer from "./footer.js"

export default ({ children }) => (
  <div className="bg-gray-100 h-screen">
    <Header/>
    <div>
      {children}
    </div>
    <Footer/>
  </div>
)