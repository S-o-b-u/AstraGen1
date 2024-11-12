import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={800}
    height={124}
    viewBox="0 0 800 124"
    backgroundColor="#383838"
    foregroundColor="#e9f3dd"
    {...props}
  >
    <rect x="7" y="12" rx="3" ry="3" width="810" height="60" /> 
    <rect x="7" y="28" rx="3" ry="3" width="700" height="60" /> 
    <rect x="7" y="44" rx="3" ry="3" width="578" height="60" />
  </ContentLoader>
)

export default MyLoader