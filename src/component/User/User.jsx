import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl text-center px-3 py-3'  >User:{userid}</div>
  )
}

export default User