import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main_section}>
        <p>the future of the internet</p>
        <div className={styles.main_title}>
          <h1>EXPLORING WEB3 TECHNOLOGY</h1>
        </div>
        <p>
          it is an umbrella term that encompasses various technologies and
          protocols that aim to create a more open, transparent, and
          decentralized web
        </p>
      </div>

      {/*   subsection part */}
      <div className={styles.sub_container}>
        <div className={styles.sub_section1}>
          <h2>OUR FUTURE WITH WEB3</h2>
          <div className={styles.main_title}>
            <p>
              Technologies have the potential to revolutionize many industries
              and aspects of our live
            </p>
          </div>
        </div>

        <div className={styles.sub_section2}>
          <h2>WEB3, ETHEREUM AND OTHER BLOCKCHAIN NETWORKS</h2>
          <div className={styles.main_title}>
            <p>
              Web3 is a set of tools and protocols that allow decentralized
              applications to interact with the blockchain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
