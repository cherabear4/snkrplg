import React from 'react'
import { useState } from 'react'

function Bape() {
const [shoes, setShoes] = useState([
    {
        Name: "blue camouflage 001 blue without velvet",
        imageLink: "https://gw.alicdn.com/bao/uploaded/i2/2933817106/O1CN01aqJWQ922MazkeFmi9_!!2933817106.jpg",
    },
    {
        Name: "purple camouflage 001 purple without velvet",
        imageLink: "https://gw.alicdn.com/bao/uploaded/i3/2933817106/O1CN01QrPuLM22MazgEdtZR_!!2933817106.jpg",
    },
    {
        Name: "green camouflage 001 green without velvet",
        imageLink: "https://gw.alicdn.com/bao/uploaded/i4/2933817106/O1CN01wO2Sg122Mb4HQQoWc_!!2933817106.jpg",
    },
    {
        Name: "pink camouflage 001 pink without velvet",
        imageLink: "https://gw.alicdn.com/bao/uploaded/i3/2933817106/O1CN01NGrMHx22MazlsxrYX_!!2933817106.jpg"
    },
    {
        Name: "grey camouflage 001 gray without velvet",
        imageLink: "https://gw.alicdn.com/bao/uploaded/i2/2933817106/O1CN01eSLo8622MazjznR9r_!!2933817106.jpg",
    },
    {
        Name: "red camouflage 001 red without velvet",
        imageLink: "https://gw.alicdn.com/bao/uploaded/i4/2933817106/O1CN01MEdlYL22MazjKtpQ2_!!2933817106.jpg",
    },
    {
        Name: "sky blue 002 blue plus thin velvet",
        imageLink: "https://gw.alicdn.com/bao/uploaded/i3/2933817106/O1CN01uRE32422Mb0pHCqMD_!!2933817106.jpg"
    },
    {
        Name: "Grass green 002 green plus thin velvet",
        imageLink: "https://gw.alicdn.com/bao/uploaded/i3/2933817106/O1CN01tGHbuW22Mb0jeVtME_!!2933817106.jpg"
    },
    {
        Name: "Pink 002 pink plus thin velvet",
        imageLink: "https://gw.alicdn.com/bao/uploaded/i2/2933817106/O1CN01nESf3K22Mb0pXF6lA_!!2933817106.jpg"
    },
]);
const redirect = () => {
    window.location.href="/BuyShoes"
}
    return(
        <div className='grid grid-cols-2 p-4 gap-4'>
            {shoes.map((shoes) => {
                return (
                    <div key={shoes.Name} className='flex flex-col'>
                        <h1 key={shoes.Name} className='text-black'>{shoes.Name}</h1>
                        <img onClick={redirect} key={shoes.Name} src={shoes.imageLink}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default Bape