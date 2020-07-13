import React,{createContext,useState,useMemo,useCallback,useRef,useEffect} from 'react'

import Header from './jHeader'
import Submit from './submitButton'
import Body   from './jBody'

export const JournalContext = createContext()

const {Provider} = JournalContext

const Journal =({children,...otherProps})=>{
    
    const [entry,setEntry] = useState('')

    let send = useCallback(()=>{console.log(entry)},[entry])
   
    const setE = useCallback(
        (e) => {
            setEntry(e.target.value) 
        },
        [entry]
    )
    const value = useMemo(() => ({ setE,send }), [setE,send])

    const componentJustMounted = useRef(true)
//   useEffect(
//     () => {
//     if (!componentJustMounted.current) {
        
//       }
//      componentJustMounted.current = false
//     },
//     [entry]
//   )
    return(
        <Provider value={value}>
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