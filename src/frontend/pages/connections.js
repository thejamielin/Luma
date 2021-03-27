import Head from "next/head";
import styles from "../styles/connections.module.css";
import navbar from "../components/navbar";
import FriendList from "../components/FriendList";

const Connections = () => {
  const logo = "images/luma.jpg";

  return (
    <div className={styles.connections}>
      <Head>
        <navbar />
      </Head>

      <div className={styles.connectContainer}>
        <div className={styles.connections}>
          <h1 className={styles.h1}>Connections</h1>
          <FriendList listName="Favorites"></FriendList>
          <FriendList listName="Connections"></FriendList>
          <FriendList listName="Connected"></FriendList>
        </div>
        <div className={styles.filter}>
          <h2 className={styles.h2Dark}>Filter</h2>
          <div className={styles.filterList}>
            Sort by: 
            <button className={styles.dropdown}>Recently added</button>
            <button className={styles.filterButton}>Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
