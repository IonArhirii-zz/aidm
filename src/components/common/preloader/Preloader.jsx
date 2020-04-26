import React from "react";
import './Preloader.css'
import preloader from '../../../assets/img/loading.gif'

let Preloader = (props) => {
  return <div className='preloadWrapper'>
    <img className='preloaderGif' src={preloader} alt='loading'/>
  </div>
};

export default Preloader;