import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SectionListnormalSredLine.module.css";

type SectionListnormalSredLineType = {
  promotionAndSpecialDealsB?: string;
  itemCount?: string;
  imageDescription?: string;
  viewAllButtonText?: string;
  buttonText?: string;
  showDiv?: boolean;

  /** Style props */
  sectionListnormalSredLinePosition?: CSSProperties["position"];
  sectionListnormalSredLineTop?: CSSProperties["top"];
  sectionListnormalSredLineLeft?: CSSProperties["left"];
  divRight?: CSSProperties["right"];
  rectangleBackgroundColor?: CSSProperties["backgroundColor"];
  divRight1?: CSSProperties["right"];
  divRight2?: CSSProperties["right"];
};

const SectionListnormalSredLine: FunctionComponent<
  SectionListnormalSredLineType
> = ({
  promotionAndSpecialDealsB,
  itemCount,
  imageDescription,
  viewAllButtonText,
  buttonText,
  showDiv,
  sectionListnormalSredLinePosition,
  sectionListnormalSredLineTop,
  sectionListnormalSredLineLeft,
  divRight,
  rectangleBackgroundColor,
  divRight1,
  divRight2,
}) => {
  const sectionListnormalSredLineStyle: CSSProperties = useMemo(() => {
    return {
      position: sectionListnormalSredLinePosition,
      top: sectionListnormalSredLineTop,
      left: sectionListnormalSredLineLeft,
    };
  }, [
    sectionListnormalSredLinePosition,
    sectionListnormalSredLineTop,
    sectionListnormalSredLineLeft,
  ]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      right: divRight,
    };
  }, [divRight]);

  const rectangleStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleBackgroundColor,
    };
  }, [rectangleBackgroundColor]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      right: divRight1,
    };
  }, [divRight1]);

  const div3Style: CSSProperties = useMemo(() => {
    return {
      right: divRight2,
    };
  }, [divRight2]);

  return (
    <div
      className={styles.sectionlistnormalsredline}
      style={sectionListnormalSredLineStyle}
    >
      <div className={styles.seeallnormal}>
        <div className={styles.div} style={div1Style}>
          ดูทั้งหมด
        </div>
        <div className={styles.div1}>{`>`}</div>
      </div>
      <div className={styles.div2}>{promotionAndSpecialDealsB}</div>
      {showDiv && <div className={styles.div3}>{itemCount}</div>}
      <img className={styles.path2Copy} alt="" src={imageDescription} />
      <div className={styles.rectangle} style={rectangleStyle} />
      <div className={styles.seeallnormal1}>
        <div className={styles.div4} style={div2Style}>
          {viewAllButtonText}
        </div>
        <div className={styles.div5} style={div3Style}>
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default SectionListnormalSredLine;
