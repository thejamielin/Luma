import React from "react";
import Friend from "./friendListItem.js";
import styles from "../styles/connections.module.css";

const friendArray = [
  { name: "Friend1", fav: true },
  { name: "Friend2", fav: false },
  { name: "Friend3", fav: true },
  { name: "Friend4", fav: true }
];

export default function UserList(props) {
  return (
    <div className={styles.userList}>
      <h2 className={styles.h2}>{props.listName}</h2>
      <div className={styles.friendli}>
        <ol>
          {friendArray.map((friend) => (
            <Friend name={friend.name}></Friend>
          ))}
        </ol>
      </div>
    </div>
  );
}
