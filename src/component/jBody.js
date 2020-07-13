import React, { useContext } from 'react'
import {JournalContext} from'./Journal'

const Body = ({children})=>{

   let  {setE,entry} = useContext(JournalContext)
    return(
        <textarea onChange={e=>setE(e)}>
           {entry}
        </textarea>
    )
}

export default Body