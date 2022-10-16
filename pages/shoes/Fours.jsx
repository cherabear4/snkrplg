import React from 'react'
import { useState } from 'react'
import Buy from './Buy';

function Fours() {
const [shoes, setShoes] = useState([
    {
        Name: "Off-White Sail",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-548a000001835c754b030a2301a5_1080_1080.jpg",
    },
    {
        Name: "White Cement",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-5445000001835c756ffa0a22d246_1080_1080.jpg",
    },
    {
        Name: "Bred",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-54b2000001835c7558750a207569_1080_1080.jpg",
    },
    {
        Name: "University Blue",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-55bb000001835c757d480a20e2c5_1080_1080.jpg",
    },
    {
        Name: "Travis Scott",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-53d0000001835c7531430a8134f0_1080_1080.jpg",
    },
    {
        Name: "White Oreo",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-105f000001819f9bb63c0a230368_1080_1080.jpg",
    },
    {
        Name: "Fire Red",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-56210000018288f484870a22d3fa_1080_1080.jpg",
    },
    {
        Name: "Cool Grey",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-57270000018288f573690a8133ca_1080_1080.jpg",
    },
    {
        Name: "What The 4",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-54a60000018288f491cb0a22d30f_1080_1082.jpg",
    },
    {
        Name: "Taupe Haze",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-09f200000182496576dc0a231273_1080_1080.jpg",
    },
    {
        Name: "Tour Yellow",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-058100000182496582980a2104c1_1080_1080.jpg",
    },
    {
        Name: "Pale Citron",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-53a8000001835c7792350a20e284_1080_1080.jpg",
    },
    {
        Name: "Red Thunder",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-3eb70000018265c7ad5b0a20e284_1080_1080.jpg",
    },
    {
        Name: "Pure Money",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-5510000001835c777b2d0a2313c4_1080_1080.jpg",
    },
    {
        Name: "Green Metallic",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-3eaf0000018265c77f350a2102d0_1080_1080.jpg",
    },
    {
        Name: "Red Metallic",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-3e8e0000018265c78eb70a2301a5_1080_1080.jpg",
    },
    {
        Name: "Purple Metallic",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-43130000018265c7be560a2313a2_1080_1080.jpg",
    },
    {
        Name: "Black Cat",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-1113000001819f9aeb500a231418_1080_1080.jpg",
    },
    {
        Name: "Military Black",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-44740000018265c7cfd80a231273_1080_1080.jpg",
    },
    {
        Name: "Union Guava Ice",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-541d000001835c6be2a50a22d246_1080_1080.jpg",
    },
    {
        Name: "Midnight Navy",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-5300000001835c738aa80a22d30f_1080_1080.jpg",
    },
    {
        Name: "Infrared",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-12120000018379ef93580a230368_1080_1080.jpg",
    },
    {
        Name: "Motorsports",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-11840000018379f1257d0a2102d0_1080_1080.jpg",
    },
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

export default Fours