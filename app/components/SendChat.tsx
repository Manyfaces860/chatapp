import React from 'react'
import { BsFillSendFill } from "react-icons/bs"
const SendChat = () => {

    

  return (
    <div className='w-3/4 p-2 rounded' style={{backgroundColor : '#ECF9FF'}}>
        <form className='flex justify-between form-control flex-row'>
            <input type="text" className='input w-3/4 rounded-md font-mono' />
            <button className='btn btn-circle btn-primary text-lg'> <BsFillSendFill /> </button>
        </form>
    </div>
  )
}

export default SendChat