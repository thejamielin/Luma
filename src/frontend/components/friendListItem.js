import React from "react";
import styles from "../styles/connections.module.css";

export default function friendBox(props) {
  return (
    <div className="outlineTest">
      <div className={styles.friendItem}>
        <li>
          <div className={styles.container}>
            <button className={styles.favButton} type="button"></button>

            <ul className={styles.friendInfo}>
              <li className={styles.li}></li>
              <li>{props.name}</li>
            </ul>
          </div>
        </li>
      </div>
    </div>
  );
}
