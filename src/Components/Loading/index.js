import React from 'react';
import Lottie from 'react-lottie'
import './style.css'
import LoadingSpinner from '../../assets/8707-loading.json'




function Loading() {

  const spinnerLoading = {
    loop: true,
    autoPlay: true,
    animationData: LoadingSpinner,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="loading">

      <Lottie options={spinnerLoading} width={100} height={100} />
    </div>
  );
}

export default Loading;