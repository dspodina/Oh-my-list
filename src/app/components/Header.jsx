"use client"; 

import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="container mx-auto max-h-50px">
            <div className="">
                <div className="pt-6 pb-24 sm:mx-0 mx-8">
                    <Image
                    src="/oh-my-list.svg"
                    alt="Logo"
                    width={240}
                    height={0}
                    />
                </div>
                {/* <div className="text-white font-semibold tracking-wide uppercase pt-12">
                    <Link href="/oh-my-meal" className="text-green bg-white drop-shadow-md p-4">Oh my meal</Link>
                    <Link href="/oh-my-list" className="bg-green drop-shadow-md p-4">Oh my list</Link>  
                </div> */}
            </div>
        </div>
    )
}

export default Header;
