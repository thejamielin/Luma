import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react';
// Search bar courtesy of https://github.com/mikeyhao/anilist-nextjs

const Navbar = () => {
    const [query, setQuery] = useState(null); // Sets the search query

    /**
     * Sets the search query with error handling
     */

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

            <Link href="/about"><a>About Luma</a></Link>
            <Link href="/connections">
                <a><Image src="/LUMA_Connections.png" width={52} height={52}/></a>
            </Link>
            <Link href="/test"><a>API Test Page</a></Link>
            <Link href="/profile">
                <a><Image src="/LUMA_Profile.png" width={47} height={51}/></a>
            </Link>
        </nav>
     );
}
 
export default Navbar;