import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import Fours from './shoes/Fours';
import Dunks from './shoes/Dunks';
import Ones from './shoes/Ones'
import Navbar from './navbar/Navbar';


export default function Main() {

  let [slide, setSlide] = useState(1);
  let [slideText, setSlideText] = useState("Click To Change Shoe");

  let [catalogScreen, setCatalogScreen] = useState(<Fours/>);

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

  

  return (
<div>
      <Head>
        <title>Snkrs.plg</title>
      </Head>

      <div className="App">
      <div>
      
      <Navbar/>
      

      <main className='w-screen flex justify-center text-white flex-col'>
        <div className='p-8'>
          <h1>Snkrs.plg Catalog</h1>
          <div className='flex-row flex justify-center'><button onClick={changeSlide} className='p-3 bg-red-500 rounded-lg'>{slideText}</button></div>
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