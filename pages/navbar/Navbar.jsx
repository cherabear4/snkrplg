import Link from 'next/link'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { useState } from 'react';

export default function Navbar(props){

    const snapchat = () => {
        let link = "https://www.snapchat.com/add/rp.snkplg";
        window.location.href = link;
        
    }
  
    const catalog = () => {
      let link = "/main";
      window.location.href = link;
    }
  
    const main = () => {
      let link = "/";
      window.location.href = link;
    }
    const tac = () => {
      let link = "/termsandconditions";
      window.location.href = link;
    }
    const md = () => {
      let link = "/Extra";
      window.location.href = link;
    }

    const [mobileMenu, setMobileMenu] = useState(false);

    const createMenu = () => {
      setMobileMenu(wasSet => !wasSet)
    }

    return(
      <div>
      <BrowserView>
      <header className='flex justify-between p-4 border-b-2 shadow-sm w-screen bg-red-600 text-white'>
      <h1 className="text-2l p-2 font-bold cursor-pointer hover:text-black" onClick={main}>Snkrplg.gq</h1>
      <h1 className="text-2l p-2 font-bold cursor-pointer hover:text-black" onClick={catalog}>Shoe Catalog</h1>
      <h1 className="text-2l p-2 font-bold cursor-pointer hover:text-black" onClick={md}>More Designer</h1>
      <h1 className="text-2l p-2 font-bold cursor-pointer hover:text-black" onClick={snapchat}>Snapchat</h1>
      <h1 className="text-2l p-2 font-bold cursor-pointer hover:text-black" onClick={tac}>Terms And Conditions</h1>
      </header>  
      </BrowserView>
      <MobileView>
        <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-red-600 shadow sm:items-baseline w-full text-white font-bold">
        <div class="mb-2 sm:mb-0">
        <Link href="/" class="text-2xl float-left no-underline text-grey-darkest hover:text-blue-dark">Snkrplg.gq</Link>
        <button className='float-right' onClick={createMenu}><img className='w-[32px] h-[32px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1200px-Hamburger_icon_white.svg.png'></img></button>
        </div>
          {mobileMenu && <div>
        <p onClick={catalog} class="text-lg no-underline text-grey-darkest hover:text-black ml-2">Catalog</p>
        <p onClick={md} class="text-lg no-underline text-grey-darkest hover:text-black ml-2">More Designer</p>
        <p onClick={snapchat} class="text-lg no-underline text-grey-darkest hover:text-black ml-2">Snapchat</p>
        <p onClick={tac} class="text-lg no-underline text-grey-darkest hover:text-black ml-2">Terms And Conditions</p>
        </div>}
        </nav>
      </MobileView>  
      </div>
    )
}