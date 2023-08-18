import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SectionListnormal1.module.css";

type SectionListnormal1Type = {
  promotionAndDealsText?: string;

  /** Style props */
  sectionListnormalPosition?: CSSProperties["position"];
  sectionListnormalTop?: CSSProperties["top"];
  sectionListnormalLeft?: CSSProperties["left"];
  divRight?: CSSProperties["right"];
};

const SectionListnormal1: FunctionComponent<SectionListnormal1Type> = ({
  promotionAndDealsText,
  sectionListnormalPosition,
  sectionListnormalTop,
  sectionListnormalLeft,
  divRight,
}) => {
  const sectionListnormal1Style: CSSProperties = useMemo(() => {
    return {
      position: sectionListnormalPosition,
      top: sectionListnormalTop,
      left: sectionListnormalLeft,
    };
  }, [sectionListnormalPosition, sectionListnormalTop, sectionListnormalLeft]);

  const div35Style: CSSProperties = useMemo(() => {
    return {
      right: divRight,
    };
  }, [divRight]);

  return (
    <div className={styles.sectionlistnormal} style={sectionListnormal1Style}>
      <div className={styles.seeallnormal}>
        <div className={styles.div} style={div35Style}>
          ดูทั้งหมด
        </div>
        <div className={styles.div1}>{`>`}</div>
      </div>
      <div className={styles.div2}>{promotionAndDealsText}</div>
      <img className={styles.path2Copy} alt="" src="/path-2-copy.svg" />
      <div className={styles.seeallnormal1}>
        <div className={styles.div3}>ดูทั้งหมด</div>
        <div className={styles.div4}>{`>`}</div>
      </div>
    </div>
  );
};

export default SectionListnormal1;
