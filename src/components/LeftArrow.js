import React from 'react';

const LeftArrow = (props) => {
  return(
    <div className="leftArrow" onClick={props.prevImage}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  )
}

export default LeftArrow;