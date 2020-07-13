import React, { useContext } from 'react'
import {JournalContext} from'./Journal'

const Submit=({children})=>{
   
    let {send} = useContext(JournalContext)
    return(
        <button onClick={send} >
            {children}
        </button>
    )
}

export default Submit