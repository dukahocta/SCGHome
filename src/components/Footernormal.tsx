import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footernormal.module.css";

type FooternormalType = {
  group3?: string;
  icEmail?: string;
  icEmailCopy?: string;
  youtube?: string;

  /** Style props */
  footernormalPosition?: CSSProperties["position"];
  footernormalTop?: CSSProperties["top"];
  footernormalLeft?: CSSProperties["left"];
  contactscgcomFontWeight?: CSSProperties["fontWeight"];
  divFontWeight?: CSSProperties["fontWeight"];
  divFontWeight1?: CSSProperties["fontWeight"];
  sCGHomeFontWeight?: CSSProperties["fontWeight"];
  divFontWeight2?: CSSProperties["fontWeight"];
  divFontWeight3?: CSSProperties["fontWeight"];
  divFontWeight4?: CSSProperties["fontWeight"];
  sCGHomeOfficialFontWeight?: CSSProperties["fontWeight"];
  sCGHomeCopyFontWeight?: CSSProperties["fontWeight"];
  scghomeFontWeight?: CSSProperties["fontWeight"];
  scghomeFontWeight1?: CSSProperties["fontWeight"];
  divFontWeight5?: CSSProperties["fontWeight"];
  divFontWeight6?: CSSProperties["fontWeight"];
  divFontWeight7?: CSSProperties["fontWeight"];
  sCGHome2019FontWeight?: CSSProperties["fontWeight"];
  divFontWeight8?: CSSProperties["fontWeight"];
  divFontWeight9?: CSSProperties["fontWeight"];
  divFontWeight10?: CSSProperties["fontWeight"];
  divFontWeight11?: CSSProperties["fontWeight"];
  divFontWeight12?: CSSProperties["fontWeight"];
};

const Footernormal: FunctionComponent<FooternormalType> = ({
  group3,
  icEmail,
  icEmailCopy,
  youtube,
  footernormalPosition,
  footernormalTop,
  footernormalLeft,
  contactscgcomFontWeight,
  divFontWeight,
  divFontWeight1,
  sCGHomeFontWeight,
  divFontWeight2,
  divFontWeight3,
  divFontWeight4,
  sCGHomeOfficialFontWeight,
  sCGHomeCopyFontWeight,
  scghomeFontWeight,
  scghomeFontWeight1,
  divFontWeight5,
  divFontWeight6,
  divFontWeight7,
  sCGHome2019FontWeight,
  divFontWeight8,
  divFontWeight9,
  divFontWeight10,
  divFontWeight11,
  divFontWeight12,
}) => {
  const footernormalStyle: CSSProperties = useMemo(() => {
    return {
      position: footernormalPosition,
      top: footernormalTop,
      left: footernormalLeft,
    };
  }, [footernormalPosition, footernormalTop, footernormalLeft]);

  const contactscgcomStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: contactscgcomFontWeight,
    };
  }, [contactscgcomFontWeight]);

  const div18Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight,
    };
  }, [divFontWeight]);

  const div19Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight1,
    };
  }, [divFontWeight1]);

  const sCGHomeStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: sCGHomeFontWeight,
    };
  }, [sCGHomeFontWeight]);

  const div20Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight2,
    };
  }, [divFontWeight2]);

  const div21Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight3,
    };
  }, [divFontWeight3]);

  const div22Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight4,
    };
  }, [divFontWeight4]);

  const sCGHomeOfficialStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: sCGHomeOfficialFontWeight,
    };
  }, [sCGHomeOfficialFontWeight]);

  const sCGHomeCopyStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: sCGHomeCopyFontWeight,
    };
  }, [sCGHomeCopyFontWeight]);

  const scghomeStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: scghomeFontWeight,
    };
  }, [scghomeFontWeight]);

  const scghome1Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: scghomeFontWeight1,
    };
  }, [scghomeFontWeight1]);

  const div23Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight5,
    };
  }, [divFontWeight5]);

  const div24Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight6,
    };
  }, [divFontWeight6]);

  const div25Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight7,
    };
  }, [divFontWeight7]);

  const sCGHome2019Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: sCGHome2019FontWeight,
    };
  }, [sCGHome2019FontWeight]);

  const div26Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight8,
    };
  }, [divFontWeight8]);

  const div27Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight9,
    };
  }, [divFontWeight9]);

  const div28Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight10,
    };
  }, [divFontWeight10]);

  const div29Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight11,
    };
  }, [divFontWeight11]);

  const div30Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight12,
    };
  }, [divFontWeight12]);

  return (
    <div className={styles.footernormal} style={footernormalStyle}>
      <div className={styles.rectangle} />
      <div className={styles.contactscgcom} style={contactscgcomStyle}>
        contact@scg.com
      </div>
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="" src={group3} />
        <div className={styles.rectangleCopy72} />
      </div>
      <img className={styles.icEmailIcon} alt="" src={icEmail} />
      <img className={styles.icEmailCopyIcon} alt="" src={icEmailCopy} />
      <div className={styles.div} style={div18Style}>
        ข้อตกลงและเงื่อนไขการใช้บริการ
      </div>
      <div
        className={styles.div1}
        style={div19Style}
      >{`ติดต่อสอบถามเราได้ที่ `}</div>
      <div className={styles.scgHome} style={sCGHomeStyle}>
        SCG Home
      </div>
      <div className={styles.div2} style={div20Style}>
        ช่องทางการขนส่ง
      </div>
      <div className={styles.div3} style={div21Style}>
        ช่องทางการชำระเงิน
      </div>
      <div className={styles.div4} style={div22Style}>
        ช่องทางอื่นๆ
      </div>
      <div className={styles.scghomeofficial} style={sCGHomeOfficialStyle}>
        SCGHomeOfficial
      </div>
      <div className={styles.scgHomeCopy} style={sCGHomeCopyStyle}>
        SCG Home
      </div>
      <div className={styles.scghome} style={scghomeStyle}>
        scg.home
      </div>
      <div className={styles.scghome1} style={scghome1Style}>
        @scghome
      </div>
      <div className={styles.div5} style={div23Style}>
        +662-586-2222
      </div>
      <img className={styles.youtubeIcon} alt="" src={youtube} />
      <img
        className={styles.dpRegistered03Icon}
        alt=""
        src="/dp-registered03@2x.png"
      />
      <div className={styles.div6} style={div24Style}>
        มาตรฐานความปลอดภัย
      </div>
      <div className={styles.div7} style={div25Style}>
        ทะเบียนพาณิชย์อิเล็กทรอนิกส์
      </div>
      <div className={styles.scgHome2019} style={sCGHome2019Style}>
        © SCG Home 2019
      </div>
      <img
        className={styles.dpRegisteredIcon}
        alt=""
        src="/dp-registered@2x.png"
      />
      <img
        className={styles.blackInstagramIcon}
        alt=""
        src="/blackinstagram@2x.png"
      />
      <img className={styles.kerryexBanIcon} alt="" src="/kerryex-ban@2x.png" />
      <img className={styles.thaipostIcon} alt="" src="/thaipost@2x.png" />
      <img className={styles.scgIcon} alt="" src="/scg@2x.png" />
      <img className={styles.thanachartIcon} alt="" src="/thanachart@2x.png" />
      <img className={styles.scbIcon} alt="" src="/scb@2x.png" />
      <img className={styles.kbankIcon} alt="" src="/kbank@2x.png" />
      <img className={styles.krungsriIcon} alt="" src="/krungsri@2x.png" />
      <img className={styles.krungthaiIcon} alt="" src="/krungthai@2x.png" />
      <img className={styles.tmbIcon} alt="" src="/tmb@2x.png" />
      <img className={styles.bualuangIcon} alt="" src="/bualuang@2x.png" />
      <img className={styles.uobIcon} alt="" src="/uob@2x.png" />
      <img className={styles.mastercardIcon} alt="" src="/mastercard@2x.png" />
      <img className={styles.jcbIcon} alt="" src="/jcb@2x.png" />
      <img
        className={styles.visaLogoPngTransparentIcon}
        alt=""
        src="/visalogopngtransparent@2x.png"
      />
      <img className={styles.jcbSecureIcon} alt="" src="/jcbsecure@2x.png" />
      <img
        className={styles.visaVerifiedIcon}
        alt=""
        src="/visa-verified@2x.png"
      />
      <img
        className={styles.mastersecureIcon}
        alt=""
        src="/mastersecure@2x.png"
      />
      <img
        className={styles.businessIdeaIcon}
        alt=""
        src="/business-idea@2x.png"
      />
      <div className={styles.div8} style={div26Style}>
        วิธีการสั่งซื้อสินค้า/ชำระเงิน
      </div>
      <div className={styles.div9} style={div27Style}>
        นโยบายการคืนสินค้า
      </div>
      <div className={styles.div10} style={div28Style}>
        นโยบายความเป็นส่วนตัว
      </div>
      <div className={styles.div11} style={div29Style}>
        นโยบายการใช้คุ้กกี้
      </div>
      <div className={styles.div12} style={div30Style}>
        ใบเสร็จรับเงินและใบกำกับภาษี
      </div>
    </div>
  );
};

export default Footernormal;
