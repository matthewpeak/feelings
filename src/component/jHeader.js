import React, { Children } from 'react'


const Header = ({children})=>{
    return(
        <h1>
            {children}
        </h1>
    )
}

export default Header