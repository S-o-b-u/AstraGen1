import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={800}
    height={124}
    viewBox="0 0 800 124"
    backgroundColor="#383838"
    foregroundColor="#be4bdb"
    {...props}
  >
    <rect x="0" y="10" rx="3" ry="3" width="800" height="8" /> 
    <rect x="0" y="28" rx="3" ry="3" width="700" height="8" /> 
    <rect x="0" y="46" rx="3" ry="3" width="578" height="8" />
  </ContentLoader>
)

export default MyLoader