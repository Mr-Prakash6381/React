import React, { useContext } from 'react'
import { User } from './user'
import { myContext } from './UseContext'

export const Container = () => {

   const {value}= useContext(myContext)
  return (
    <div>
        <h1>Container : {value}</h1>
        <User/>
    </div>
  )
}
