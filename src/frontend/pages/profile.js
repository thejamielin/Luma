import Head from "next/head";
import styles from "../styles/profile.module.css";
import Image from 'next/image';
import Link from "next/link";
import dynamic from 'next/dynamic';
import { Button } from '../components/Button'

const Post = dynamic(() => import('../components/post'))

export default function Home() {
  return (
    <>
      <Head>
        <title>Luma | Profile</title>
        <meta name="keywords" content="luma" />
      </Head>
      <div className={styles.banner} />
      <div className={styles.profilebar} />

      <div className={styles.biodrop}>
         <Image className={styles.pfp} src="/defaultpfp.jpg" width={200} height={200}/> 

      <div className="App">
        <Button>Wave</Button>
      </div>

         <h3 className={styles.category}> biography </h3>
         <p className={styles.sidebartext}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

         <h3 className={styles.category}> experience </h3>
         <p className={styles.sidebartext}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

         <h3 className={styles.category}> contact information </h3>
         <p className={styles.sidebartext}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div>

      <div className={styles.content}>
        <Post date={"March 24"} text={"This is my latest update"}/>
        <Post date={"January 1"} text={"Happy new year!"}/>
        <Post date={"October 11"} text={"This is my first post!"}/>
      </div>
    </>
  );
}