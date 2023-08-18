import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardgalleryTitleOnly.module.css";

type CardgalleryTitleOnlyType = {
  coverPhoto01?: string;
  fill1?: string;
  prop?: string;
  prop1?: string;
  showGroupDiv?: boolean;
  showP?: boolean;
  showFill146Icon?: boolean;

  /** Style props */
  cardgalleryTitleOnlyPosition?: CSSProperties["position"];
  cardgalleryTitleOnlyTop?: CSSProperties["top"];
  cardgalleryTitleOnlyLeft?: CSSProperties["left"];
  pMargin?: CSSProperties["margin"];
  pPosition?: CSSProperties["position"];
  pWidth?: CSSProperties["width"];
  pHeight?: CSSProperties["height"];
  pOpacity?: CSSProperties["opacity"];
  pMixBlendMode?: CSSProperties["mixBlendMode"];
};

const CardgalleryTitleOnly: FunctionComponent<CardgalleryTitleOnlyType> = ({
  coverPhoto01,
  fill1,
  prop,
  prop1,
  showGroupDiv,
  showP,
  showFill146Icon,
  cardgalleryTitleOnlyPosition,
  cardgalleryTitleOnlyTop,
  cardgalleryTitleOnlyLeft,
  pMargin,
  pPosition,
  pWidth,
  pHeight,
  pOpacity,
  pMixBlendMode,
}) => {
  const cardgalleryTitleOnlyStyle: CSSProperties = useMemo(() => {
    return {
      position: cardgalleryTitleOnlyPosition,
      top: cardgalleryTitleOnlyTop,
      left: cardgalleryTitleOnlyLeft,
    };
  }, [
    cardgalleryTitleOnlyPosition,
    cardgalleryTitleOnlyTop,
    cardgalleryTitleOnlyLeft,
  ]);

  const pStyle: CSSProperties = useMemo(() => {
    return {
      margin: pMargin,
      position: pPosition,
      width: pWidth,
      height: pHeight,
      opacity: pOpacity,
      mixBlendMode: pMixBlendMode,
    };
  }, [pMargin, pPosition, pWidth, pHeight, pOpacity, pMixBlendMode]);

  return (
    <div
      className={styles.cardgalleryTitleOnly}
      style={cardgalleryTitleOnlyStyle}
    >
      <img className={styles.coverPhoto01Icon} alt="" src={coverPhoto01} />
      {showGroupDiv && (
        <div className={styles.fill1Parent}>
          <img className={styles.fill1Icon} alt="" src={fill1} />
          <div className={styles.k}>1.2k</div>
          <div className={styles.view}>view</div>
        </div>
      )}
      <div className={styles.div}>
        {showP && (
          <p className={styles.p} style={pStyle}>
            {prop}
          </p>
        )}
        <p className={styles.p}>{prop1}</p>
      </div>
      {showFill146Icon && (
        <img className={styles.fill146Icon} alt="" src="/fill-146.svg" />
      )}
    </div>
  );
};

export default CardgalleryTitleOnly;
