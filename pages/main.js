import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import Fours from './shoes/Fours';
import Dunks from './shoes/Dunks';
import Ones from './shoes/Ones'
import Link from 'next/link'


export default function Main() {

  let [slide, setSlide] = useState(1);
  let [slideText, setSlideText] = useState("Click To Change Shoe");

  let [catalogScreen, setCatalogScreen] = useState(<Dunks/>);

  const changeSlide = () => {
    setSlide(slide+1);
    checkSlideCount();
  }

  const checkSlideCount = () => {
    if(slide===1){
      setSlideText("Dunks")
      setCatalogScreen(<Dunks/>);
      
    }
    if(slide===2){
      setSlideText("Jordan 4's");
      setCatalogScreen(<Fours/>);
    }
    if(slide===3){
      setSlideText("Jordan 1's");
      setCatalogScreen(<Ones/>);
      setSlide(1)
    }
  }

  const snapchat = () => {
      let link = "https://www.snapchat.com/add/rp.snkplg";
      window.location.href = link;
      
  }

  const catalog = () => {
    let link = "#";
    window.location.href = link;
  }

  const main = () => {
    let link = "/";
    window.location.href = link;
  }

  return (
<div>
      <Head>
        <title>Snkrs.plg</title>
      </Head>

      <div className="App">
      <div>
        <header className='flex justify-between p-4 border-b-2 shadow-sm w-screen bg-red-600 text-white'>
          <h1 className="text-2l p-2 font-bold cursor-pointer hover:text-black" onClick={main}>Snkrs.plg</h1>
          <h1 className="text-2l p-2 font-bold cursor-pointer hover:text-black" onClick={catalog}>Shoe Catalog</h1>
          <h1 className="text-2l p-2 font-bold cursor-pointer hover:text-black" onClick={snapchat}>Snapchat</h1>
        </header>

      <main className='w-screen flex justify-center text-white flex-col'>
        <div className='p-8'>
          <h1>Snkrs.plg Catalog</h1>
          <div className='flex-row flex justify-center'><button onClick={changeSlide} className='p-3 bg-red-500 rounded-lg'>Change Catalog</button> <p className='text-black p-3'> : </p> <p className='text-black p-3 font-bold'>{slideText}</p><p className='text-black p-3'>Note: Ones will be extra $ because we use premium leather</p></div>
        </div>
        <div>
          {catalogScreen}
        </div>
      </main>

      </div>
    </div>
    </div>
  )
}