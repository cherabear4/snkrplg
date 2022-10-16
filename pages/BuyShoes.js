import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import Navbar from './navbar/Navbar'
import Link from 'next/link'

export default function BuyShoes(){

    return(
        <div>
            
            <Head>
                <title>Snkrs.plg</title>
            </Head>
            
            <Navbar/>

            <div className='bg-gray-200 container mx-auto h-screen'>
                <h1 className='text-3xl font-bold text-center py-8'>How to buy shoes</h1>
                <div className='p-8'>
                    <h1 className='text-3xl font-bold text-center'>Step 1</h1>
                    <h1 className='text-1xl text-center'>Add me on snapchat and send me a message.</h1>
                </div>
                <div className='p-8'>
                    <h1 className='text-3xl font-bold text-center'>Step 2</h1>
                    <h1 className='text-1xl text-center'>Be specific with what you want. Example: &quot;Hey, can I get the (Shoe Type) - (Shoe Name/Color) in a Size (your size)?&quot;.</h1>
                    <h1 className='text-1xl font-bold text-center'>Ex: &quot;Hey, can I get the Jordan 4 - University Blue in a Size 11?&quot;.</h1>
                </div>
                <div className='p-8'>
                    <h1 className='text-3xl font-bold text-center'>Step 3</h1>
                    <h1 className='text-1xl text-center'>I will ask you to pay the price of the shoe plus a $15 deposit, example: $110(shoe) + $15 (deposit). The deposit will be refunded once you recieve the shoes<br/>
                    if anything happens to the shoes out of our(buyer and seller) control you will be refunded full price & deposit.
                    </h1>
                </div>
                <div className='p-8'>
                    <h1 className='text-3xl font-bold text-center'>Step 4</h1>
                    <h1 className='text-1xl text-center'>
                        Be patient!!! I cannot stress this enough, the shoes take 8-27 days because they are coming from all over the world, covid-19 does not help at all!<br/>
                        I will constantly update you and send you quality check pictures.
                    </h1>
                </div>
                <div className='p-8'>
                    <h1 className='text-3xl font-bold text-center'>Step 5</h1>
                    <h1 className='text-1xl text-center'>
                        When they ship in I will give you the shoes immediately and refund your deposit of $15.<br/>
                        Thanks for buying!
                    </h1>
                </div>
                <h1 className='text-lg font-bold text-center py-3'>Before Buying from (Snkrplg.gq) you agree to the <Link href='/termsandconditions'><p className='text-blue-600'>Terms And Conditions</p></Link></h1>
            </div>
            
        </div>
    )

}
