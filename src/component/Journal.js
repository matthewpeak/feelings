import React,{createContext,useState,useMemo} from 'react'

import Header from './jHeader'
import Submit from './submitButton'
import Body   from './jBody'

export const JournalContext = createContext()

const {Provider} = JournalContext

const Journal =({children,...otherProps})=>{

    return(
        <Provider>
            <div>
                {children}
            </div>
        </Provider>
    )
}

Journal.Header = Header
Journal.Body   = Body 
Journal.Submit = Submit

export default Journal