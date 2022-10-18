import Head from "next/head"
import Navbar from "./navbar/Navbar"
import Bape from './products/Bape'
import BB from "./products/BB";
import { useState } from "react";
import Misc from "./products/Misc";

export default function Extra(){

    let [slide, setSlide] = useState(1);
    let [slideText, setSlideText] = useState("Click To Change Item");

    let [catalogScreen, setCatalogScreen] = useState(<Bape/>);

    const changeSlide = () => {
    setSlide(slide+1);
    checkSlideCount();
    }

    const checkSlideCount = () => {
    if(slide===1){
    setSlideText("Bape")
    setCatalogScreen(<Bape/>);

    }
    if(slide===2){
    setSlideText("BB Belts");
    setCatalogScreen(<BB/>);
    
    }
    if(slide===2){
      setSlideText("Misc");
      setCatalogScreen(<Misc/>);
      setSlide(1);
      }
}

    return(
        <div className="bg-gray-100">
        <Head>
            <title>Snkrplg</title>
        </Head>
        <Navbar/>
        <main className='w-screen flex justify-center text-white flex-col'>
        <div className='p-8'>
          <h1 className="text-gray-100">Snkrs.plg Catalog</h1>
          <div className='flex-row flex justify-center'><button onClick={changeSlide} className='p-3 bg-red-500 rounded-lg'>Change Catalog</button> <p className='text-black p-3'> : </p> <p className='text-black p-3 font-bold'>{slideText}</p></div>
        </div>
        <div>
          {catalogScreen}
        </div>
        </main>
        </div>
    )    
    }