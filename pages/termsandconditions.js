import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import Navbar from './navbar/Navbar'

export default function Termsandconditions(){

    const [me, setMe] = useState("(Snkrplg.gq)")


    return(
    <div>
            
        <Head>
            <title>Snkrs.plg</title>
        </Head>
        
        <Navbar/>

        <div>
            <div className='bg-gray-200 container mx-auto h-screen p-8'>
                <p>1. When buying from me {me} you agree to paying the $15 deposit and the original charge of the item.</p>
                <p>2. {me} does not have to sell you any product if {me} does not want to.</p>
                <p>3. Once {me} places the order (I will let you know when I do), you can not get back the $15 if you decide to change your mind, however, the original charge of the item will be refunded.</p>
                <p>4. When buying from me {me} you agree & acknowledge there will be a 8-27 day wait time for the shoes to come.</p>
            </div>
        </div>
    </div>
    )
}