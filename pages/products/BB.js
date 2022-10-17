import React from 'react'
import { useState } from 'react'
import Buy from '../shoes/Buy';

export default function BB(){

    const [shoes, setShoes] = useState([
        {
            Name: "Navy Blue",
            imageLink: "https://gw.alicdn.com/bao/uploaded/i2/3690682408/O1CN01xFIzEv1TeuV15L7Tn_!!3690682408.jpg",
        },
        {
            Name: "Black/Red",
            imageLink: "https://gw.alicdn.com/bao/uploaded/i1/3690682408/O1CN01X2g0Ce1TeuUtl5CpM_!!3690682408.jpg"
        },
        {
            Name: "dark grey",
            imageLink: "https://gw.alicdn.com/bao/uploaded/i1/3690682408/O1CN01rN0oTF1TeuUuZKFQC_!!3690682408.jpg"
        },
        {
            Name: "Navy Blue (Skull)",
            imageLink: "https://gw.alicdn.com/bao/uploaded/i4/3690682408/O1CN01YMGQMe1TeuUxPC9sk_!!3690682408.jpg"
        },
        {
            Name: "Camel",
            imageLink: "https://gw.alicdn.com/bao/uploaded/i4/3690682408/O1CN01t5i4e51TeuUzAMO2h_!!3690682408.jpg"
        },
        {
            Name: "Royal Blue",
            imageLink: "https://gw.alicdn.com/bao/uploaded/i2/3690682408/O1CN019fXzt31TeuV2LMQCi_!!3690682408.jpg",
        },
        {
            Name: "peacock blue",
            imageLink: "https://gw.alicdn.com/bao/uploaded/i2/3690682408/O1CN01KaA7H71TeuV3AtLni_!!3690682408.jpg"
        }
    ]);

    return(
        <div className='grid grid-cols-2 p-4 gap-4'>
            {shoes.map((shoes) => {
                return (
                    <div key={shoes.Name} className='flex flex-col'>
                        <h1 key={shoes.Name} className='text-black'>{shoes.Name}</h1>
                        <img key={shoes.Name} src={shoes.imageLink}></img>
                        <Buy shoe={shoes.Name}/>
                    </div>
                )
            })}
        </div>
    )
}