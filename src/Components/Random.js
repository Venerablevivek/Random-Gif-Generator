import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
    const{gif,loading,fetchData} = useGif();

    function clickHandler(){
       fetchData();
    }
  return (

    <div className='w-11/12 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ' >
       <h1 className='text-2xl underline uppercase font-bold mt-[15px] ' >A Random Gif</h1>
       
       {
        loading ? (<Spinner/>) : (<img src={gif} width="450" />)
       }

       <button className='w-10/12 bg-pink-500 rounded-lg text-lg py-2 mb-[20px]  hover:bg-purple-700 transition-all duration-200'
        onClick={clickHandler} >
         Generate
       </button>
    </div>
  )
}

export default Random;