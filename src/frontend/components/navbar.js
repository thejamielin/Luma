import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react';
// Search bar courtesy of https://github.com/mikeyhao/anilist-nextjs

const Navbar = () => {

    return ( 
        <nav>
        <div className="leftel">
        
        <Link href="/">
                <a><Image src="/logo.png" width={78} height={35}/></a>
        </Link>
        
            <input 
                className="searchBar"
                placeholder="Search here..."/>

        </div>
        <div class="rightel">
            <a> 
                
                <Link href="/connections">
                    <Image src="/connect.png" width={41} height={35}/>
                </Link>
                &emsp;
                <Link href="/profile">
                    <Image src="/account.png" width={23} height={35}/>
                </Link>
                &emsp;
                <Link href="/login">
                    <Image src="/login.png" width={36} height={35}/>
                </Link>
            </a>
        </div>
        </nav>
     );
}
 
export default Navbar;