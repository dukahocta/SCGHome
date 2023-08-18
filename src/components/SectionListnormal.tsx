import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SectionListnormal.module.css";

type SectionListnormalType = {
  prop?: string;
  prop1?: string;
  path2Copy?: string;
  showDiv?: boolean;
  showSeeAllnormal?: boolean;

  /** Style props */
  sectionListnormalPosition?: CSSProperties["position"];
  sectionListnormalWidth?: CSSProperties["width"];
  sectionListnormalHeight?: CSSProperties["height"];
  sectionListnormalTop?: CSSProperties["top"];
  sectionListnormalLeft?: CSSProperties["left"];
  divTop?: CSSProperties["top"];
  seeAllnormalTop?: CSSProperties["top"];
  divRight?: CSSProperties["right"];
  divTop1?: CSSProperties["top"];
  path2CopyHeight?: CSSProperties["height"];
  path2CopyTop?: CSSProperties["top"];
  path2CopyBottom?: CSSProperties["bottom"];
  rectangleTop?: CSSProperties["top"];
  rectangleBackgroundColor?: CSSProperties["backgroundColor"];
  seeAllnormalTop1?: CSSProperties["top"];
};

const SectionListnormal: FunctionComponent<SectionListnormalType> = ({
  prop,
  prop1,
  path2Copy,
  showDiv,
  showSeeAllnormal,
  sectionListnormalPosition,
  sectionListnormalWidth,
  sectionListnormalHeight,
  sectionListnormalTop,
  sectionListnormalLeft,
  divTop,
  seeAllnormalTop,
  divRight,
  divTop1,
  path2CopyHeight,
  path2CopyTop,
  path2CopyBottom,
  rectangleTop,
  rectangleBackgroundColor,
  seeAllnormalTop1,
}) => {
  const sectionListnormalStyle: CSSProperties = useMemo(() => {
    return {
      position: sectionListnormalPosition,
      width: sectionListnormalWidth,
      height: sectionListnormalHeight,
      top: sectionListnormalTop,
      left: sectionListnormalLeft,
    };
  }, [
    sectionListnormalPosition,
    sectionListnormalWidth,
    sectionListnormalHeight,
    sectionListnormalTop,
    sectionListnormalLeft,
  ]);

  const div15Style: CSSProperties = useMemo(() => {
    return {
      top: divTop,
    };
  }, [divTop]);

  const seeAllnormalStyle: CSSProperties = useMemo(() => {
    return {
      top: seeAllnormalTop,
    };
  }, [seeAllnormalTop]);

  const div16Style: CSSProperties = useMemo(() => {
    return {
      right: divRight,
    };
  }, [divRight]);

  const div17Style: CSSProperties = useMemo(() => {
    return {
      top: divTop1,
    };
  }, [divTop1]);

  const path2CopyStyle: CSSProperties = useMemo(() => {
    return {
      height: path2CopyHeight,
      top: path2CopyTop,
      bottom: path2CopyBottom,
    };
  }, [path2CopyHeight, path2CopyTop, path2CopyBottom]);

  const rectangle2Style: CSSProperties = useMemo(() => {
    return {
      top: rectangleTop,
      backgroundColor: rectangleBackgroundColor,
    };
  }, [rectangleTop, rectangleBackgroundColor]);

  const seeAllnormal1Style: CSSProperties = useMemo(() => {
    return {
      top: seeAllnormalTop1,
    };
  }, [seeAllnormalTop1]);

  return (
    <div className={styles.sectionlistnormal} style={sectionListnormalStyle}>
      <div className={styles.div} style={div15Style}>
        {prop}
      </div>
      <div className={styles.seeallnormal} style={seeAllnormalStyle}>
        <div className={styles.div1} style={div16Style}>
          ดูทั้งหมด
        </div>
        <div className={styles.div2}>{`>`}</div>
      </div>
      {showDiv && (
        <div className={styles.div3} style={div17Style}>
          {prop1}
        </div>
      )}
      <img
        className={styles.path2Copy}
        alt=""
        src={path2Copy}
        style={path2CopyStyle}
      />
      <div className={styles.rectangle} style={rectangle2Style} />
      {showSeeAllnormal && (
        <div className={styles.seeallnormal1} style={seeAllnormal1Style}>
          <div className={styles.div4}>ดูทั้งหมด</div>
          <div className={styles.div5}>{`>`}</div>
        </div>
      )}
    </div>
  );
};

export default SectionListnormal;
