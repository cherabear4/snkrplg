import React from 'react'
import { useState } from 'react'
import Buy from './Buy';

function Dunks() {
const [shoes, setShoes] = useState([
    {
        Name: "Pandas",
        imageLink: "https://si.geilicdn.com/open1625671124-1234478995-08200000018140691f7d0a2008af_1080_1080.jpg",
    },
    {
        Name: "Varsity Green",
        imageLink: "https://si.geilicdn.com/open1625671124-1234478995-0823000001814069292b0a2008af_1080_1080.jpg",
    },
    {
        Name: "Midnight Navy",
        imageLink: "https://si.geilicdn.com/open1625671124-1234478995-064900000181406932620a23028e_1080_1080.jpg",
    },
    {
        Name: "University Blue",
        imageLink: "https://si.geilicdn.com/open1625671124-1234478995-06520000018140693b7b0a23028e_1080_1080.jpg",
    },
    {
        Name: "Medium Curry",
        imageLink: "https://si.geilicdn.com/open1625671124-1234478995-1e7f000001814069417c0a219249_1080_1080.jpg",
    },
    {
        Name: "Coast",
        imageLink: "https://si.geilicdn.com/open1625671124-1234478995-0835000001814069471f0a2008af_1080_1080.jpg",
    },
    {
        Name: "Light Bone",
        imageLink: "https://si.geilicdn.com/open1625671124-1234478995-7de70000018140694e0f0a23116d_1080_1080.jpg",
    },
    {
        Name: "Archeo Pink",
        imageLink: "https://si.geilicdn.com/open1625671124-1234478995-065c000001814069520d0a23028e_1080_1080.jpg",
    },
    {
        Name: "Dark Beetroot",
        imageLink: "https://si.geilicdn.com/open1625671124-1234478995-1e8e0000018140695b730a219249_1080_1080.jpg",
    },
    {
        Name: "Grey Fog",
        imageLink: "https://si.geilicdn.com/open1625671124-1234478995-7df000000181406960b10a23116d_1080_1080.jpg",
    },
    {
        Name: "Fossil Rose SB",
        imageLink: "https://si.geilicdn.com/open1625671124-1234478995-066600000181406962d10a23028e_385_385.jpg",
    },
    {
        Name: "Smoke Grey",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-672f0000018362408d880a20e273_1074_1074.jpg",
    },
    {
        Name: "Michigan",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-1f62000001831c8d87cb0a23136f_817_816.jpg",
    },
    {
        Name: "Sour Apple SB",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-047e000001833c843c460a2301a5_1080_1080.jpg",
    },
    {
        Name: "Kentucky",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-45220000018353b351b50a2313c4_1440_1443.jpg",
    },
    {
        Name: "Syracuse",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-05b8000001836b99781d0a813276_1080_1080.jpg",
    },
    {
        Name: "80s Bus SB",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-47350000018353bbc6b20a23136f_818_816.jpg",
    },
    {
        Name: "Road Sign SB",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-04e1000001836b9986640a231179_1080_1080.jpg",
    },
    {
        Name: "Judge Grey",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-0588000001836b96f26e0a20e273_1080_1080.jpg",
    },
    {
        Name: "University Red",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-6d66000001838fdd243d0a23034c_1440_1440.jpg",
    },
    {
        Name: "Trail End SB",
        imageLink: "https://si.geilicdn.com/wdseller1512544078-6fd6000001838fe44a0b0a20e2c5_1440_1441.jpg",
    },
    
]);

    return(
        <div className='grid grid-cols-2 p-4 gap-4'>
            {shoes.map((shoes) => {
                return (
                    <div key={shoes.Name} className='flex flex-col'>
                        <h1 key={shoes.Name} className='text-black'>{shoes.Name} $100</h1>
                        <img key={shoes.Name} src={shoes.imageLink}></img>
                        <Buy shoes={shoes.Name} shoe={shoes.Name}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Dunks