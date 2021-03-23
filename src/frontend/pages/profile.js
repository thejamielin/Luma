import Head from "next/head";
import styles from "../styles/profile.module.css";
import Image from 'next/image'
import Link from "next/link";

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

         {/* Add wave button here*/}

         <h3 className={styles.category}> biography </h3>

         <h3 className={styles.category}> experience </h3>

         <h3 className={styles.category}> contact information </h3>
      </div>
    </>
  );
}