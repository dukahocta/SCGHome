import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Pricenormal.module.css";

type PricenormalType = {
  priceText?: string;
  bagTextPieceText?: string;

  /** Style props */
  pricenormalPosition?: CSSProperties["position"];
  pricenormalWidth?: CSSProperties["width"];
  pricenormalTop?: CSSProperties["top"];
  pricenormalLeft?: CSSProperties["left"];
  divTop?: CSSProperties["top"];
  divFontWeight?: CSSProperties["fontWeight"];
  divTop1?: CSSProperties["top"];
  divFontWeight1?: CSSProperties["fontWeight"];
};

const Pricenormal: FunctionComponent<PricenormalType> = ({
  priceText,
  bagTextPieceText,
  pricenormalPosition,
  pricenormalWidth,
  pricenormalTop,
  pricenormalLeft,
  divTop,
  divFontWeight,
  divTop1,
  divFontWeight1,
}) => {
  const pricenormalStyle: CSSProperties = useMemo(() => {
    return {
      position: pricenormalPosition,
      width: pricenormalWidth,
      top: pricenormalTop,
      left: pricenormalLeft,
    };
  }, [pricenormalPosition, pricenormalWidth, pricenormalTop, pricenormalLeft]);

  const div10Style: CSSProperties = useMemo(() => {
    return {
      top: divTop,
      fontWeight: divFontWeight,
    };
  }, [divTop, divFontWeight]);

  const div11Style: CSSProperties = useMemo(() => {
    return {
      top: divTop1,
      fontWeight: divFontWeight1,
    };
  }, [divTop1, divFontWeight1]);

  return (
    <div className={styles.pricenormal} style={pricenormalStyle}>
      <div className={styles.div} style={div10Style}>
        {priceText}
      </div>
      <div className={styles.div1} style={div11Style}>
        {bagTextPieceText}
      </div>
    </div>
  );
};

export default Pricenormal;
