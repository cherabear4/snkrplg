import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import Navbar from './navbar/Navbar'
import Link from 'next/link'

export default function BuyShoes(){

    //entry.1016664077 shoe
    //entry.304360365 size
    //entry.625529581 name
    //entry.1462521678 snap

const [submit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
    "entry.1016664077": "",
    "entry.304360365": "",
    "entry.625529581": "",
    "entry.1462521678": ""
});

const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
        ...prevState,
        [input]: value
    }));
};

async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/d/e/1FAIpQLSeTGVc_FByny_V8-RIa3k3vYnTRs1G-mdV0l0wYqxQ3Lnk65Q/formResponse?entry.1016664077=${formData["entry.1016664077"]}&entry.304360365=${formData["entry.304360365"]}&entry.625529581=${formData["entry.625529581"]}&entry.1462521678=${formData["entry.1462521678"]}`;

    const res = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}

    return(
        <div>
            
            <Head>
                <title>Snkrs.plg</title>
            </Head>
            
            <Navbar/>

            <div className='bg-gray-200 h-screen w-screen'>
                <h1 className='text-lg font-bold text-center py-3'>Before Buying from (Snkrplg.gq) you agree to the <Link href='/termsandconditions'><p className='text-blue-600'>Terms And Conditions</p></Link></h1>
                <h1 className='text-lg font-bold text-center py-3'>Leave your snapchat and I will message you with my cashapp and you pay there, I then place your order</h1>

                
                <div className='flex flex-col p-12 bg-slate-300 shadow-md'>
                <form action="https://docs.google.com/forms/u/4/d/e/1FAIpQLSeTGVc_FByny_V8-RIa3k3vYnTRs1G-mdV0l0wYqxQ3Lnk65Q/formResponse" className='gap-8 flex flex-col justify-center'>
                <fieldset>
                    <label>Name Of Shoe: </label>
                    <input
                        required
                        type="text"
                        name="entry.1016664077"
                        onChange={handleInputData("entry.1016664077")}
                        value={formData["entry.1016664077"]}
                    />
                </fieldset>
                <fieldset>
                    <label>Size of Shoe: </label>
                    <input
                        required
                        type="text"
                        name="entry.304360365"
                        onChange={handleInputData("entry.304360365")}
                        value={formData["entry.304360365"]}
                    />
                </fieldset>
                <fieldset>
                    <label>Your Name: </label>
                    <input
                        required
                        type="text"
                        name="entry.625529581"
                        onChange={handleInputData("entry.625529581")}
                        value={formData["entry.625529581"]}
                    />
                </fieldset>
                <fieldset>
                    <label>Your Snapchat: </label>
                    <input
                        required
                        type="text"
                        name="entry.1462521678"
                        onChange={handleInputData("entry.1462521678")}
                        value={formData["entry.1462521678"]}
                    />
                    
                </fieldset>
                
                </form>
                <button onClick={handleSubmit} className="bg-red-500 w-[50%] mx-auto rounded-md p-2 my-4">Send (I agree to the TOS)</button>
                </div>
                
            </div>
            
        </div>
    )

}
