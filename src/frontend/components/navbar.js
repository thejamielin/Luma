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
                <Boop scale={1.1} timing={200}>
                <Link href="/connections">
                    <Image src="/connect.png" width={41} height={35}/>
                </Link>
                </Boop>

                <Boop y = {-5} timing={200}>
                <Link href="/profile">
                    <Image src="/account.png" width={23} height={35}/>
                </Link>
                </Boop>
                
                <Boop rotation={25} timing={200}>
                <Link href="/settings">
                    <Image src="/settings.png" width={37} height={35}/>
                </Link>
                </Boop>
            </a>
        </nav>
     );
}
 
export default Navbar;


// tutorial: https://www.joshwcomeau.com/react/boop/
const Boop = ({ x = 0, y = 0, rotation = 0, scale = 1, timing = 150, children, }) => {
    const [isBooped, setIsBooped] = React.useState(false);
    const style = {
      display: 'inline-block',
      backfaceVisibility: 'hidden',
      transform: isBooped
        ? `translate(${x}px, ${y}px)
          rotate(${rotation}deg)
          scale(${scale})`
        : `translate(0px, 0px)
          rotate(0deg)
          scale(1)`,
      transition: `transform ${timing}ms`,
    };
    React.useEffect(() => {
      if (!isBooped) {
        return;
      }
      const timeoutId = window.setTimeout(() => {
        setIsBooped(false);
      }, timing);
      return () => {
        window.clearTimeout(timeoutId);
      };
    }, [isBooped, timing]);
    const trigger = () => {
      setIsBooped(true);
    };
    return (
      <span onMouseEnter={trigger} style={style}>
        {children}
      </span>
    );
  };

