import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react';
// Search bar courtesy of https://github.com/mikeyhao/anilist-nextjs

const Navbar = () => {

    return ( 
        <nav>
            <div className="logo">
                <Link href="/">
                    <a><Image src="/logo.png" width={78} height={35}/></a>
                </Link>
            </div>
            <div>
                <input 
                className="searchBar"
                placeholder="Search here..."/>
            </div>
            <a> 
                <Link href="/connections">
                    <Image src="/connect.png" width={41} height={35}/>
                </Link>
                <Link href="/profile">
                    <Image src="/account.png" width={23} height={35}/>
                </Link>
                <Link href="/settings">
                    <Image src="/settings.png" width={37} height={35}/>
                </Link>
            </a>
        </nav>
     );
}
 
export default Navbar;