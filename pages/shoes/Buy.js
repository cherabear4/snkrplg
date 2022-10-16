import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

function Buy(props) {

  function redirect(){
    let link = "/BuyShoes";
    window.location.href = link;
  }

  return (
    <button onClick={redirect} className='p-2 w-full text-white bg-red-600'>Buy {props.shoe}</button>
  )
}

export default Buy