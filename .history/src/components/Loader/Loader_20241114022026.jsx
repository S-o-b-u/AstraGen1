import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={800}
    height={124}
    
    backgroundColor="#383838"
    foregroundColor="#42adff"
    {...props}
  >
    <rect x="0" y="10" rx="3" ry="3" width="800" height="15" /> 
    <rect x="0" y="30" rx="3" ry="3" width="700" height="15" /> 
    <rect x="0" y="49" rx="3" ry="3" width="578" height="15" />
  </ContentLoader>
)

export default MyLoader