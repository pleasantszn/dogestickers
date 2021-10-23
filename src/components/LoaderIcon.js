import React from 'react'
import Loader from "react-loader-spinner";
const LoaderIcon = ({h,w}) => {
  return (
    <div>
      <Loader
        type="Oval"
        color="#FD4D4D"
        height={h}
        width={w}
        // timeout={5000} //3 secs
      />
      
    </div>
  )
}

export default LoaderIcon
