import React from "react";
import * as styles from "./style.scss";

const PageProfile = () => (
  <div className={styles.appContainer}>
    <div className={styles.welcomeHeader}>Hello, World!</div>
    <div className={styles.welcomeMessage}>
      This is your profile page!
    </div>
    <div className={styles.welcomeMessage.concat(" ").concat(styles.emoji)}>
      🚀
    </div>
  </div>
);

export default PageProfile;
