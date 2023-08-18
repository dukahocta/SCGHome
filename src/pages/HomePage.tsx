import { FunctionComponent } from "react";
import styles from "./HomePage.module.css";
const HomePage: FunctionComponent = () => {
  return (
    <b className={styles.homePage}>
      <p className={styles.shopByBrand}>Shop by Brand</p>
    </b>
  );
};

export default HomePage;
