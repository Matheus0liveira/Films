import React from 'react';
import Lottie from 'react-lottie'
import NotFound404 from '../../assets/11116-404-planet-animation.json'

function NotFound() {


  const notFound = {
    loop: true,
    autoPlay: true,
    animationData: NotFound404,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <>
      <Lottie options={notFound} width={450} />

    </>
  );
}

export default NotFound;