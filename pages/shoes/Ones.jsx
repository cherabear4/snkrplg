import React from 'react'
import { useState } from 'react'

function Ones() {
    const redirect = () => {
        window.location.href="/BuyShoes"
    }
const [shoes, setShoes] = useState([
    {
        Name: "Dark Mocha",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-08ea000001836caad1ce0a230368_1284_1284.jpg",
    },
    {
        Name: "Obsidian",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-6ed900000181f4da3f5b0a22d30f_1080_1080.jpg",
    },
    {
        Name: "University Blue",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-708600000181f4d7c2a60a20e35c_1080_1080.jpg",
    },
    {
        Name: "Hyper Royal",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-091a000001836caafbcb0a2102d0_1284_1284.jpg",
    },
    {
        Name: "Chicago",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-6e0000000181f4e4c8010a22d3fa_1080_1080.jpg",
    },
    {
        Name: "Fragment Design",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-6d0300000181f48c2cd70a8133ca_1080_1080.jpg",
    },
    {
        Name: "Court Purple",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-28af0000017f468af2820a207569_1080_1080.jpg",
    },
    {
        Name: "Pine Green",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-288a0000017f468a39ba0a207569_1080_1080.jpg",
    },
]);

    return(
        <div className='grid grid-cols-2 p-4 gap-4'>
            {shoes.map((shoes) => {
                return (
                    <div key={shoes.Name} className='flex flex-col'>
                        <h1 key={shoes.Name} className='text-black'>{shoes.Name}</h1>
                        <img className='image' onClick={redirect} key={shoes.Name} src={shoes.imageLink}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default Ones