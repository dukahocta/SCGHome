import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./NavTab4tab.module.css";

type NavTab4tabType = {
  logOut?: string;
  icLightbulbOutline?: string;
  icRecordVoiceOver?: string;
  icShoppingCartCopy?: string;
  icLocationCity?: string;
  icSearch?: string;
  icShoppingCart?: string;
  icLoyalty?: string;
  showRectangle?: boolean;
  showLoginSignupCopy2?: boolean;
  showGroupDiv?: boolean;
  groupDivVisible?: boolean;
  groupDivVisible1?: boolean;
  groupDivVisible2?: boolean;
  groupDivVisible3?: boolean;
  rectangleVisible?: boolean;
  showIcSearchIcon?: boolean;
  showDiv?: boolean;
  showIcShoppingCartIcon?: boolean;
  groupDivVisible4?: boolean;

  /** Style props */
  navTab4tabPosition?: CSSProperties["position"];
  navTab4tabTop?: CSSProperties["top"];
  navTab4tabLeft?: CSSProperties["left"];
  divFontWeight?: CSSProperties["fontWeight"];
  divFontWeight1?: CSSProperties["fontWeight"];
  divFontWeight2?: CSSProperties["fontWeight"];
  divFontWeight3?: CSSProperties["fontWeight"];
  divFontWeight4?: CSSProperties["fontWeight"];
  divFontWeight5?: CSSProperties["fontWeight"];
};

const NavTab4tab: FunctionComponent<NavTab4tabType> = ({
  logOut,
  icLightbulbOutline,
  icRecordVoiceOver,
  icShoppingCartCopy,
  icLocationCity,
  icSearch,
  icShoppingCart,
  icLoyalty,
  showRectangle,
  showLoginSignupCopy2,
  showGroupDiv,
  groupDivVisible,
  groupDivVisible1,
  groupDivVisible2,
  groupDivVisible3,
  rectangleVisible,
  showIcSearchIcon,
  showDiv,
  showIcShoppingCartIcon,
  groupDivVisible4,
  navTab4tabPosition,
  navTab4tabTop,
  navTab4tabLeft,
  divFontWeight,
  divFontWeight1,
  divFontWeight2,
  divFontWeight3,
  divFontWeight4,
  divFontWeight5,
}) => {
  const navTab4tabStyle: CSSProperties = useMemo(() => {
    return {
      position: navTab4tabPosition,
      top: navTab4tabTop,
      left: navTab4tabLeft,
    };
  }, [navTab4tabPosition, navTab4tabTop, navTab4tabLeft]);

  const div4Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight,
    };
  }, [divFontWeight]);

  const div5Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight1,
    };
  }, [divFontWeight1]);

  const div6Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight2,
    };
  }, [divFontWeight2]);

  const div7Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight3,
    };
  }, [divFontWeight3]);

  const div8Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight4,
    };
  }, [divFontWeight4]);

  const div9Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight5,
    };
  }, [divFontWeight5]);

  return (
    <div className={styles.navtab4tab} style={navTab4tabStyle}>
      {showRectangle && <div className={styles.rectangle} />}
      {showLoginSignupCopy2 && (
        <div className={styles.loginSignupCopy2}>
          <img className={styles.logOutIcon} alt="" src={logOut} />
          <div className={styles.rectangle1} />
          <div className={styles.div}>เข้าสู่ระบบ</div>
          <div className={styles.div1}>สมัครสมาชิก</div>
          <img
            className={styles.loginSignupCopy2Child}
            alt=""
            src="/line-3.svg"
          />
        </div>
      )}
      {showGroupDiv && (
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <div className={styles.div2} style={div4Style}>
              เรื่องบ้านน่ารู้
            </div>
          </div>
          <img
            className={styles.icLightbulbOutlineIcon}
            alt=""
            src={icLightbulbOutline}
          />
        </div>
      )}
      {groupDivVisible && (
        <div className={styles.navtab4tabInner}>
          <div className={styles.parent}>
            <div className={styles.div3} style={div5Style}>
              บริการเรื่องบ้าน
            </div>
            <img
              className={styles.icRecordVoiceOverIcon}
              alt=""
              src={icRecordVoiceOver}
            />
          </div>
        </div>
      )}
      {groupDivVisible1 && (
        <div className={styles.rectangleParent}>
          <div className={styles.rectangle2} />
          <img className={styles.fill91Icon} alt="" src="/fill-91.svg" />
          <div className={styles.div4}>คุณกำลังมองหาอะไรอยู่</div>
        </div>
      )}
      {groupDivVisible2 && (
        <div className={styles.frameGroup}>
          <div className={styles.container}>
            <div className={styles.div2} style={div6Style}>
              สินค้าทั้งหมด
            </div>
          </div>
          <img
            className={styles.icShoppingCartCopyIcon}
            alt=""
            src={icShoppingCartCopy}
          />
        </div>
      )}
      {groupDivVisible3 && (
        <div className={styles.groupParent}>
          <div className={styles.group6Copy2Wrapper}>
            <div className={styles.parent}>
              <div className={styles.div2} style={div7Style}>
                ร้านค้า
              </div>
            </div>
          </div>
          <img
            className={styles.icLocationCityIcon}
            alt=""
            src={icLocationCity}
          />
        </div>
      )}
      {rectangleVisible && <div className={styles.rectangle3} />}
      {showIcSearchIcon && (
        <img className={styles.icSearchIcon} alt="" src={icSearch} />
      )}
      {showDiv && (
        <div
          className={styles.div7}
          style={div8Style}
        >{`ค้นหาสินค้าหรือบริการ `}</div>
      )}
      {showIcShoppingCartIcon && (
        <img
          className={styles.icShoppingCartIcon}
          alt=""
          src={icShoppingCart}
        />
      )}
      {groupDivVisible4 && (
        <div className={styles.groupGroup}>
          <div className={styles.group}>
            <div className={styles.div2} style={div9Style}>
              โปรโมชั่น/กิจกรรมพิเศษ
            </div>
          </div>
          <img className={styles.icLoyaltyIcon} alt="" src={icLoyalty} />
        </div>
      )}
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
    </div>
  );
};

export default NavTab4tab;
