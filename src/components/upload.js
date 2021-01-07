import React,{useState} from 'react'
import Progressbar from './progressbar'
function Upload (){
const [file,setFile] = useState(null)
const [error, setError] = useState(null)
const types = ['image/png', 'image/jpeg']
    const changeHandler=(e)=>{
        let selected = e.target.files[0]

        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError(null)
            console.log(file)
            console.log(selected)
        }
        else {

            setFile(null)
            setError('Please select an image file (png or Jpeg)')
        }
    }
    return <>
    <form >
        <input type='file' onChange={changeHandler}/>
    </form>

    <div className="output">
        {error && <div className="error">{error}</div> }
        {file && <div>{file.name}</div>}

        {file && <Progressbar file={file} setFile={setFile} />}
    </div>
    </>
}

export default Upload