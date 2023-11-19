import React, { CSSProperties } from 'react'
import { GoDotFill } from 'react-icons/go'

const NavBar = ({ from } : { from : string }) => {
    const linearGradient : React.CSSProperties = {
        backgroundImage : "linear-gradient(to left, #ECF9FF , #FFFBEB)",
    }

    return (
        <>
        <div className='text-left w-3/4 p-3 rounded' style={linearGradient}>
            <div className='flex gap-1 items-center justify-center'>
                <div>{from}</div>
                <div className='text-green-500 text-xs'> <GoDotFill/> </div>
                <div>Online</div>
            </div>
        </div>
    </>
        )
    }

export default NavBar