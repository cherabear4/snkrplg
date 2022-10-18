import React from 'react'
import { useState } from 'react'
import Buy from '../shoes/Buy';

export default function Misc(){

    const [shoes, setShoes] = useState([
        {
            Name: "Airpod's Pro",
            imageLink: "https://img.alicdn.com/imgextra/i2/873202499/O1CN01uaSX5w1UKaX8VnTYc_!!873202499.jpg",
        },
        {
            Name: "Louis Vuitton Beanie",
            imageLink: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/asH9gEJFSUis2vJOEnrL"
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