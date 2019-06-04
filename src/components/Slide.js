import React from 'react';

const Slide = ({prevSrc, src }) => {
  return <div className='slide'>
  <img className='img currentImg' src={src} />
  {/* <img className='prev-Img img' src={prevSrc}/> */}
  </div>
}

export default Slide;