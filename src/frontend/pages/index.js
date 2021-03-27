import Head from "next/head";
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Sidebar from '../components/sidebar';
import React, { useState, useEffect} from 'react';
import InfiniteSpace from '../components/InfiniteSpace';
import homeData from '../components/homeData';
// Tabs courtesy of: https://github.com/reactjs/react-tabs
// Infinite scroll: https://www.digitalocean.com/community/tutorials/react-react-infinite-scroll



export default function Home({ posts }) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(new Set());
  const [genres, setGenres] = useState(["pop", "classical", "jazz", "R & B", "indie", "EDM"])
  const [instruments, setInstruments] = useState(["violin", "cello", "bass", "guitar", "piano", "voice", "flute", "clarinet"])
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  }
  return (
    <>
      <Head>
        <title>Luma | Home</title>
        <meta name="keywords" content="luma" />
      </Head>
      <Sidebar className={styles.sidebar} selectedCheckboxes = {selectedCheckboxes}
            genres = {genres} instruments = {instruments}
            sidebar= {sidebar}
            showSidebar={showSidebar}/>
      <div>
        <Tabs className={sidebar ? styles.tabSidebar :styles.tab} selectedTabClassName={styles.tabSelected}>
          <TabList className={styles.tabList}>
            <Tab>Musicians</Tab>
            <Tab>Producers</Tab>
            <Tab>Writers</Tab>
          </TabList>

          {/* Musicians */}
          <TabPanel>
            <h2>Musician Content</h2>
            <InfiniteSpace />
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
