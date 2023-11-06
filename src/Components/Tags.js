import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tags = () => {
    const [tag,setTag] = useState('car');
    const {gif, loading, fetchData} = useGif(tag);

  return (

    <div className='w-11/12 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ' >
       <h1 className='text-2xl underline uppercase font-bold mt-[15px] ' > Random {tag} Gifs</h1>
       
       {
        loading ? (<Spinner/>) : (<img src={gif} width="450" />)
       }

       <input onChange={ (event)=> setTag(event.target.value)}
        className='w-10/12 rounded-lg text-lg py-2 mb-[3px] text-center '
        value={tag}
       />

       <button className='w-10/12 bg-pink-500 rounded-lg text-lg py-2 mb-[20px] hover:bg-purple-700 transition-all duration-200'
        onClick={ ()=> fetchData(tag) } >
         Generate
       </button>
    </div>
  )
}

export default Tags;