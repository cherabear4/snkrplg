import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {

  

  return (
    <div className="min-h-screen min-w-screen">
        <div className="w-full bg h-full">
            <div className='bg-op w-full h-full text-white'>
                <div class="flex h-screen justify-center items-center">
                <div class="text-center">
                <h1 class="text-5xl font-bold">Snkrplg.gq</h1>
                <ul className='flex flex-row gap-8 font-bold p-4'>
                    <li><Link href='/main' className='hover:text-red-500 hover:cursor-pointer'>Catalog</Link></li>
                    <li><Link href='/BuyShoes' className='hover:text-red-500 hover:cursor-pointer'>Place Order</Link></li>
                </ul>
                </div>
            </div>
        </div>
        </div>
    </div>

  )
}
