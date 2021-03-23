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
      <div className={styles.banner}>
         <p> [ Insert Image Here] </p>
      </div>
      <div className={styles.profilebar} />
      <div className={styles.biodrop}>
         <Image className={styles.pfp} src="/defaultpfp.jpg" width={200} height={200}/> 
      </div>
    </>
  );
}