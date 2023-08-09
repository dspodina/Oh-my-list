"use client"; 

import { Kalam } from 'next/font/google'
import Image from 'next/image';

const kalam = Kalam({ subsets: ['latin'], weight: '300' })

const GroceryList = () => {
    return (
        <div className={kalam.className}>
            <div className="relative flex flex-col">
                <div>
                    <h2 className="text-2xl text-center py-4 uppercase">Your List</h2>
                    <ul className="pl-6 py-12 text-lg underline">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
                <div className="absolute bottom-0 right-0">
                    <Image
                    src="/1.svg"
                    alt="Logo"
                    width={200}
                    height={0}
                    />
                </div>
            </div>
        </div>
    )
}

export default GroceryList;
