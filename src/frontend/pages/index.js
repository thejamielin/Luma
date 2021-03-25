import Head from "next/head";
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Sidebar from '../components/sidebar';
import React, { useState, useEffect} from 'react';
// Tabs courtesy of: https://github.com/reactjs/react-tabs

export default function Home() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(new Set());
  const [genres, setGenres] = useState(["pop", "classical", "jazz", "R & B", "indie", "EDM"])
  const [instruments, setInstruments] = useState(["violin", "cello", "bass", "guitar", "piano", "voice", "flute", "clarinet"])
  
  return (
    <>
      <Head>
        <title>Luma | Home</title>
        <meta name="keywords" content="luma" />
      </Head>
      <Sidebar selectedCheckboxes = {selectedCheckboxes}
            genres = {genres} instruments = {instruments}/>
      <div>
      <Sidebar selectedCheckboxes={selectedCheckboxes} genres={genres} instruments={instruments}/>
      <Tabs 
      className={styles.tab}
      selectedTabClassName={styles.tabSelected}>
        <TabList
        className={styles.tabList}>
          <Tab>
            Musicians
            <homeData />
          </Tab>
          <Tab>Producers</Tab>
          <Tab>Writers</Tab>
        </TabList>
        {/* Musicians */}
        <TabPanel>
          <h2>
            Musician Content
          </h2>
        </TabPanel>

        {/* Producers  */}
        <TabPanel>
          <h2>Producer Content</h2>
        </TabPanel>

        {/* Writers */}
        <TabPanel>
          <h2>Writer content</h2>
        </TabPanel>
      </Tabs>
      </div>
      <div>
        <Link href="/about">
          <a className={styles.btn}>Who are we?</a>
        </Link>
      </div>
    </>
  );
}