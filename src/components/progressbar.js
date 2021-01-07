import React, {useEffect} from 'react'
import './progressbar.css'
import useStorage from './UseStorage'

const Progressbar =({file,setFile})=>{
const {url, progress} = useStorage(file)
console.log(progress,url)

useEffect(()=>{
    if(url){

        setFile(null)
    }
},[url,setFile])

    return (
        <div className="progressbar" style={{width:progress +"%"}}></div>
    )
}

export default Progressbar