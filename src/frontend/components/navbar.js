import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react';
// Search bar courtesy of https://github.com/mikeyhao/anilist-nextjs

const Navbar = () => {

    return ( 
        <nav>
            <div className="logo">
                <Link href="/">
                    <a><Image src="/logo.png" width={101.45} height={46.85}/></a>
                </Link>
            </div>
            <div>
                <input 
                className="searchBar"
                placeholder="Search here..."/>
            </div>
            <a> 
                <Link href="/about">About Luma</Link>
                <Link href="/connections">
                    <Image src="/LUMA_Connections.png" width={52} height={52}/>
                </Link>
                <Link href="/test">API Test Page</Link>           
                <Link href="/profile">
                    <Image src="/LUMA_Profile.png" width={47} height={51}/>
                </Link>
            </a>
        </nav>
     );
}
 
export default Navbar;