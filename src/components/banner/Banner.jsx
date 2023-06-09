import React from "react";
import styles from "./Banner.module.css";
import blue_arrow from "../img/blue_Arrow.svg";
import blue_logo from "../img/blue_logo.svg";
import yellow_arrow from "../img/yellow_arrow.svg";
import yellow_logo from "../img/yellow_logo.svg";
import main_logo from "../img/main_logo.svg";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main_section}>
        <p>the future of the internet</p>
        <div className={styles.main_title}>
          <h1>EXPLORING WEB3 TECHNOLOGY</h1>
        </div>
        <div className={styles.sub_logo}>
          <p className={styles.sub_para}>
            it is an umbrella term that encompasses various <br /> technologies
            and protocols that aim to create a <br /> more open, transparent,
            and decentralized web
          </p>
          <img src={main_logo} className={styles.main_img} alt="" />
        </div>
      </div>

      {/*   subsection part */}
      <div className={styles.sub_container}>
        <div className={styles.sub_section1}>
          <div className={styles.sub_logo}>
            <h2 className={styles.heading}>
              OUR FUTURE <br /> WITH WEB3
            </h2>
            <img className={styles.sub_img} src={blue_arrow} alt="/" />
          </div>
          <div className={styles.main_title}>
            <div className={styles.sub_logo}>
              <p>
                Technologies have the potential to <br /> revolutionize many
                industries and <br /> aspects of our live
              </p>
              <img src={blue_logo} size={5} alt="/" />
            </div>
          </div>
        </div>

        <div className={styles.sub_section2}>
          <div className={styles.sub_logo}>
            <h2>WEB3, ETHEREUM AND OTHER BLOCKCHAIN NETWORKS</h2>
            <img className={styles.secondary_img} src={yellow_arrow} alt="/" />
          </div>
          <div className={styles.main_title}>
            <div className={styles.sub_logo}>
              <p>
                Web3 is a set of tools and protocols that <br /> allow
                decentralized applications to <br /> interact with the
                blockchain
              </p>
              <img src={yellow_logo} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
