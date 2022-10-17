import Link from 'next/link'

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

    return(
    <header className='flex justify-between p-4 border-b-2 shadow-sm w-screen bg-red-600 text-white'>
        <h1 className="text-2l p-2 font-bold cursor-pointer hover:text-black" onClick={main}>Snkrs.plg</h1>
        <h1 className="text-2l p-2 font-bold cursor-pointer hover:text-black" onClick={catalog}>Shoe Catalog</h1>
        <h1 className="text-2l p-2 font-bold cursor-pointer hover:text-black" onClick={md}>More Designer</h1>
        <h1 className="text-2l p-2 font-bold cursor-pointer hover:text-black" onClick={snapchat}>Snapchat</h1>
        <h1 className="text-2l p-2 font-bold cursor-pointer hover:text-black" onClick={tac}>Terms And Conditions</h1>
    </header>    
    )
}