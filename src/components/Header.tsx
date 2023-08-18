import { FunctionComponent } from "react";
import LoginSignupCopy2 from "./LoginSignupCopy2";
import styles from "./Header.module.css";
const Header: FunctionComponent = () => {
  return (
    <div className={styles.navtab4tab2ndmenuv22}>
      <div className={styles.rectangle} />
      <LoginSignupCopy2
        loginSignupCopy2Position="absolute"
        loginSignupCopy2Width="16.04%"
        loginSignupCopy2Height="28.14%"
        loginSignupCopy2Top="0.43%"
        loginSignupCopy2Right="9.51%"
        loginSignupCopy2Bottom="71.43%"
        loginSignupCopy2Left="74.44%"
        divFontWeight="500"
        divFontWeight1="500"
      />
      <div className={styles.frameParent}>
        <div className={styles.wrapper}>
          <div className={styles.div}>เรื่องบ้านน่ารู้</div>
        </div>
        <img
          className={styles.icLightbulbOutlineIcon}
          alt=""
          src="/ic-lightbulb-outline2.svg"
        />
      </div>
      <div className={styles.parent}>
        <div className={styles.div1}>ผู้ช่วยเรื่องบ้าน</div>
        <img
          className={styles.icRecordVoiceOverIcon}
          alt=""
          src="/ic-record-voice-over4.svg"
        />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.group}>
          <div className={styles.div}>โปรโมชั่น/กิจกรรมพิเศษ</div>
        </div>
        <img className={styles.icLoyaltyIcon} alt="" src="/ic-loyalty2.svg" />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle1} />
        <img className={styles.fill91Icon} alt="" src="/fill-91.svg" />
        <div className={styles.div3}>คุณกำลังมองหาอะไรอยู่</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.container}>
          <div className={styles.div}>สินค้าทั้งหมด</div>
        </div>
        <img
          className={styles.icShoppingCartCopyIcon}
          alt=""
          src="/ic-shopping-cart-copy1.svg"
        />
      </div>
      <img className={styles.bitmapIcon} alt="" src="/bitmap@2x.png" />
      <div className={styles.group6Copy2Parent}>
        <div className={styles.group6Copy2}>
          <div className={styles.div}>ร้านค้า</div>
        </div>
        <img
          className={styles.icLocationCityIcon}
          alt=""
          src="/ic-location-city2.svg"
        />
      </div>
      <div className={styles.rectangle2} />
      <img className={styles.icSearchIcon} alt="" src="/ic-search3.svg" />
      <div className={styles.div6}>{`ค้นหาสินค้าหรือบริการ `}</div>
      <img
        className={styles.icShoppingCartIcon}
        alt=""
        src="/ic-shopping-cart-copy1.svg"
      />
    </div>
  );
};

export default Header;
