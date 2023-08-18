import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardProductBoutique.module.css";

type CardProductBoutiqueType = {
  handbag01S?: string;
  prop?: string;
  productCTAnormal?: string;
  sCGBoutique?: string;
  o?: string;
  prop1?: string;
  showComparenormaldisplayed?: boolean;
  comparenormal?: boolean;
  showDiv?: boolean;
  showRectangle?: boolean;
  productCTAnormalIcon?: boolean;
  showComparenormal?: boolean;
  showProductCTAnormalIcon?: boolean;

  /** Style props */
  cardProductBoutiquePosition?: CSSProperties["position"];
  cardProductBoutiqueWidth?: CSSProperties["width"];
  cardProductBoutiqueHeight?: CSSProperties["height"];
  cardProductBoutiqueTop?: CSSProperties["top"];
  cardProductBoutiqueLeft?: CSSProperties["left"];
  handbag01STop?: CSSProperties["top"];
  handbag01SFontWeight?: CSSProperties["fontWeight"];
  comparenormaldisplayedPosition?: CSSProperties["position"];
  comparenormaldisplayedHeight?: CSSProperties["height"];
  comparenormaldisplayedWidth?: CSSProperties["width"];
  comparenormaldisplayedTop?: CSSProperties["top"];
  comparenormaldisplayedRight?: CSSProperties["right"];
  comparenormaldisplayedBottom?: CSSProperties["bottom"];
  comparenormaldisplayedLeft?: CSSProperties["left"];
  comparenormaldisplayedMargin?: CSSProperties["margin"];
  comparenormalPosition?: CSSProperties["position"];
  comparenormalHeight?: CSSProperties["height"];
  comparenormalWidth?: CSSProperties["width"];
  comparenormalTop?: CSSProperties["top"];
  comparenormalRight?: CSSProperties["right"];
  comparenormalBottom?: CSSProperties["bottom"];
  comparenormalLeft?: CSSProperties["left"];
  comparePosition?: CSSProperties["position"];
  compareHeight?: CSSProperties["height"];
  compareWidth?: CSSProperties["width"];
  compareTop?: CSSProperties["top"];
  compareRight?: CSSProperties["right"];
  compareBottom?: CSSProperties["bottom"];
  compareLeft?: CSSProperties["left"];
  compareOverflow?: CSSProperties["overflow"];
  compareMargin?: CSSProperties["margin"];
  divTop?: CSSProperties["top"];
  divLeft?: CSSProperties["left"];
  divFontSize?: CSSProperties["fontSize"];
  divLineHeight?: CSSProperties["lineHeight"];
  divFontWeight?: CSSProperties["fontWeight"];
  divFontFamily?: CSSProperties["fontFamily"];
  divColor?: CSSProperties["color"];
  divTextAlign?: CSSProperties["textAlign"];
  divHeight?: CSSProperties["height"];
  divWidth?: CSSProperties["width"];
  divRight?: CSSProperties["right"];
  divBottom?: CSSProperties["bottom"];
  rectangleTop?: CSSProperties["top"];
  rectangleLeft?: CSSProperties["left"];
  rectangleBorderRadius?: CSSProperties["borderRadius"];
  rectangleBorder?: CSSProperties["border"];
  rectangleBoxSizing?: CSSProperties["boxSizing"];
  rectangleWidth?: CSSProperties["width"];
  rectangleHeight?: CSSProperties["height"];
  rectangleRight?: CSSProperties["right"];
  rectangleBottom?: CSSProperties["bottom"];
  productCTAnormalIconHeight?: CSSProperties["height"];
  productCTAnormalIconBottom?: CSSProperties["bottom"];
  productCTAnormalIconMaxWidth?: CSSProperties["maxWidth"];
  productCTAnormalIconMaxHeight?: CSSProperties["maxHeight"];
  sCGBoutiqueTop?: CSSProperties["top"];
  sCGBoutiqueFontWeight?: CSSProperties["fontWeight"];
  sCGBoutiqueLeft?: CSSProperties["left"];
  sCGBoutiqueOpacity?: CSSProperties["opacity"];
  sCGBoutiqueMixBlendMode?: CSSProperties["mixBlendMode"];
  sCGBoutiqueMargin?: CSSProperties["margin"];
  sCGBoutiquePosition?: CSSProperties["position"];
  sCGBoutiqueTop1?: CSSProperties["top"];
  sCGBoutiqueLeft1?: CSSProperties["left"];
  sCGBoutiqueBorderRadius?: CSSProperties["borderRadius"];
  sCGBoutiqueBorder?: CSSProperties["border"];
  sCGBoutiqueBoxSizing?: CSSProperties["boxSizing"];
  sCGBoutiqueWidth?: CSSProperties["width"];
  sCGBoutiqueHeight?: CSSProperties["height"];
  sCGBoutiqueRight?: CSSProperties["right"];
  sCGBoutiqueBottom?: CSSProperties["bottom"];
  sCGBoutiqueMaxWidth?: CSSProperties["maxWidth"];
  sCGBoutiqueOverflow?: CSSProperties["overflow"];
  sCGBoutiqueMaxHeight?: CSSProperties["maxHeight"];
  sCGBoutiqueObjectFit?: CSSProperties["objectFit"];
  oIconHeight?: CSSProperties["height"];
  oIconWidth?: CSSProperties["width"];
  oIconTop?: CSSProperties["top"];
  oIconRight?: CSSProperties["right"];
  oIconBottom?: CSSProperties["bottom"];
  oIconLeft?: CSSProperties["left"];
  oIconMaxWidth?: CSSProperties["maxWidth"];
  oIconOverflow?: CSSProperties["overflow"];
  oIconMaxHeight?: CSSProperties["maxHeight"];
  oIconObjectFit?: CSSProperties["objectFit"];
  oIconFontSize?: CSSProperties["fontSize"];
  oIconLineHeight?: CSSProperties["lineHeight"];
  oIconDisplay?: CSSProperties["display"];
  oIconFontFamily?: CSSProperties["fontFamily"];
  oIconColor?: CSSProperties["color"];
  oIconTextAlign?: CSSProperties["textAlign"];
  oIconOpacity?: CSSProperties["opacity"];
  oIconMixBlendMode?: CSSProperties["mixBlendMode"];
  oIconFontWeight?: CSSProperties["fontWeight"];
  oIconPosition?: CSSProperties["position"];
  oIconMargin?: CSSProperties["margin"];
  pricenormalTop?: CSSProperties["top"];
  pricenormalPosition?: CSSProperties["position"];
  pricenormalLeft?: CSSProperties["left"];
  pricenormalWidth?: CSSProperties["width"];
  pricenormalHeight?: CSSProperties["height"];
  pricenormalMargin?: CSSProperties["margin"];
  pricenormalRight?: CSSProperties["right"];
  pricenormalBottom?: CSSProperties["bottom"];
  pricenormalMaxWidth?: CSSProperties["maxWidth"];
  pricenormalOverflow?: CSSProperties["overflow"];
  pricenormalMaxHeight?: CSSProperties["maxHeight"];
  pricenormalObjectFit?: CSSProperties["objectFit"];
  pricenormalFontSize?: CSSProperties["fontSize"];
  pricenormalLineHeight?: CSSProperties["lineHeight"];
  pricenormalDisplay?: CSSProperties["display"];
  pricenormalFontFamily?: CSSProperties["fontFamily"];
  pricenormalColor?: CSSProperties["color"];
  pricenormalTextAlign?: CSSProperties["textAlign"];
  pricenormalFontWeight?: CSSProperties["fontWeight"];
  divFontWeight1?: CSSProperties["fontWeight"];
  divPosition?: CSSProperties["position"];
  divTop1?: CSSProperties["top"];
  divLeft1?: CSSProperties["left"];
  divFontSize1?: CSSProperties["fontSize"];
  divLineHeight1?: CSSProperties["lineHeight"];
  divFontFamily1?: CSSProperties["fontFamily"];
  divColor1?: CSSProperties["color"];
  divTextAlign1?: CSSProperties["textAlign"];
  divDisplay?: CSSProperties["display"];
  divWidth1?: CSSProperties["width"];
  divHeight1?: CSSProperties["height"];
  divFontWeight2?: CSSProperties["fontWeight"];
  divPosition1?: CSSProperties["position"];
  divTop2?: CSSProperties["top"];
  divLeft2?: CSSProperties["left"];
  divFontSize2?: CSSProperties["fontSize"];
  divLineHeight2?: CSSProperties["lineHeight"];
  divFontFamily2?: CSSProperties["fontFamily"];
  divColor2?: CSSProperties["color"];
  divTextAlign2?: CSSProperties["textAlign"];
  divDisplay1?: CSSProperties["display"];
  divWidth2?: CSSProperties["width"];
  divMargin?: CSSProperties["margin"];
  divHeight2?: CSSProperties["height"];
  divRight1?: CSSProperties["right"];
  divBottom1?: CSSProperties["bottom"];
  divMaxWidth?: CSSProperties["maxWidth"];
  divOverflow?: CSSProperties["overflow"];
  divMaxHeight?: CSSProperties["maxHeight"];
  divObjectFit?: CSSProperties["objectFit"];
};

const CardProductBoutique: FunctionComponent<CardProductBoutiqueType> = ({
  handbag01S,
  prop,
  productCTAnormal,
  sCGBoutique,
  o,
  prop1,
  showComparenormaldisplayed,
  comparenormal,
  showDiv,
  showRectangle,
  productCTAnormalIcon,
  cardProductBoutiquePosition,
  cardProductBoutiqueWidth,
  cardProductBoutiqueHeight,
  cardProductBoutiqueTop,
  cardProductBoutiqueLeft,
  handbag01STop,
  handbag01SFontWeight,
  comparenormaldisplayedPosition,
  comparenormaldisplayedHeight,
  comparenormaldisplayedWidth,
  comparenormaldisplayedTop,
  comparenormaldisplayedRight,
  comparenormaldisplayedBottom,
  comparenormaldisplayedLeft,
  comparenormaldisplayedMargin,
  comparenormalPosition,
  comparenormalHeight,
  comparenormalWidth,
  comparenormalTop,
  comparenormalRight,
  comparenormalBottom,
  comparenormalLeft,
  comparePosition,
  compareHeight,
  compareWidth,
  compareTop,
  compareRight,
  compareBottom,
  compareLeft,
  compareOverflow,
  compareMargin,
  divTop,
  divLeft,
  divFontSize,
  divLineHeight,
  divFontWeight,
  divFontFamily,
  divColor,
  divTextAlign,
  divHeight,
  divWidth,
  divRight,
  divBottom,
  rectangleTop,
  rectangleLeft,
  rectangleBorderRadius,
  rectangleBorder,
  rectangleBoxSizing,
  rectangleWidth,
  rectangleHeight,
  rectangleRight,
  rectangleBottom,
  productCTAnormalIconHeight,
  productCTAnormalIconBottom,
  productCTAnormalIconMaxWidth,
  productCTAnormalIconMaxHeight,
  sCGBoutiqueTop,
  sCGBoutiqueFontWeight,
  sCGBoutiqueLeft,
  sCGBoutiqueOpacity,
  sCGBoutiqueMixBlendMode,
  sCGBoutiqueMargin,
  sCGBoutiquePosition,
  sCGBoutiqueTop1,
  sCGBoutiqueLeft1,
  sCGBoutiqueBorderRadius,
  sCGBoutiqueBorder,
  sCGBoutiqueBoxSizing,
  sCGBoutiqueWidth,
  sCGBoutiqueHeight,
  sCGBoutiqueRight,
  sCGBoutiqueBottom,
  sCGBoutiqueMaxWidth,
  sCGBoutiqueOverflow,
  sCGBoutiqueMaxHeight,
  sCGBoutiqueObjectFit,
  oIconHeight,
  oIconWidth,
  oIconTop,
  oIconRight,
  oIconBottom,
  oIconLeft,
  oIconMaxWidth,
  oIconOverflow,
  oIconMaxHeight,
  oIconObjectFit,
  oIconFontSize,
  oIconLineHeight,
  oIconDisplay,
  oIconFontFamily,
  oIconColor,
  oIconTextAlign,
  oIconOpacity,
  oIconMixBlendMode,
  oIconFontWeight,
  oIconPosition,
  oIconMargin,
  pricenormalTop,
  pricenormalPosition,
  pricenormalLeft,
  pricenormalWidth,
  pricenormalHeight,
  pricenormalMargin,
  pricenormalRight,
  pricenormalBottom,
  pricenormalMaxWidth,
  pricenormalOverflow,
  pricenormalMaxHeight,
  pricenormalObjectFit,
  pricenormalFontSize,
  pricenormalLineHeight,
  pricenormalDisplay,
  pricenormalFontFamily,
  pricenormalColor,
  pricenormalTextAlign,
  pricenormalFontWeight,
  divFontWeight1,
  divPosition,
  divTop1,
  divLeft1,
  divFontSize1,
  divLineHeight1,
  divFontFamily1,
  divColor1,
  divTextAlign1,
  divDisplay,
  divWidth1,
  divHeight1,
  divFontWeight2,
  divPosition1,
  divTop2,
  divLeft2,
  divFontSize2,
  divLineHeight2,
  divFontFamily2,
  divColor2,
  divTextAlign2,
  divDisplay1,
  divWidth2,
  divMargin,
  divHeight2,
  divRight1,
  divBottom1,
  divMaxWidth,
  divOverflow,
  divMaxHeight,
  divObjectFit,
  showComparenormal,
  showProductCTAnormalIcon,
}) => {
  const cardProductBoutiqueStyle: CSSProperties = useMemo(() => {
    return {
      position: cardProductBoutiquePosition,
      width: cardProductBoutiqueWidth,
      height: cardProductBoutiqueHeight,
      top: cardProductBoutiqueTop,
      left: cardProductBoutiqueLeft,
    };
  }, [
    cardProductBoutiquePosition,
    cardProductBoutiqueWidth,
    cardProductBoutiqueHeight,
    cardProductBoutiqueTop,
    cardProductBoutiqueLeft,
  ]);

  const handbag01SStyle: CSSProperties = useMemo(() => {
    return {
      top: handbag01STop,
      fontWeight: handbag01SFontWeight,
    };
  }, [handbag01STop, handbag01SFontWeight]);

  const comparenormaldisplayedStyle: CSSProperties = useMemo(() => {
    return {
      position: comparenormaldisplayedPosition,
      height: comparenormaldisplayedHeight,
      width: comparenormaldisplayedWidth,
      top: comparenormaldisplayedTop,
      right: comparenormaldisplayedRight,
      bottom: comparenormaldisplayedBottom,
      left: comparenormaldisplayedLeft,
      margin: comparenormaldisplayedMargin,
    };
  }, [
    comparenormaldisplayedPosition,
    comparenormaldisplayedHeight,
    comparenormaldisplayedWidth,
    comparenormaldisplayedTop,
    comparenormaldisplayedRight,
    comparenormaldisplayedBottom,
    comparenormaldisplayedLeft,
    comparenormaldisplayedMargin,
  ]);

  const comparenormalStyle: CSSProperties = useMemo(() => {
    return {
      position: comparenormalPosition,
      height: comparenormalHeight,
      width: comparenormalWidth,
      top: comparenormalTop,
      right: comparenormalRight,
      bottom: comparenormalBottom,
      left: comparenormalLeft,
    };
  }, [
    comparenormalPosition,
    comparenormalHeight,
    comparenormalWidth,
    comparenormalTop,
    comparenormalRight,
    comparenormalBottom,
    comparenormalLeft,
  ]);

  const compareStyle: CSSProperties = useMemo(() => {
    return {
      position: comparePosition,
      height: compareHeight,
      width: compareWidth,
      top: compareTop,
      right: compareRight,
      bottom: compareBottom,
      left: compareLeft,
      overflow: compareOverflow,
      margin: compareMargin,
    };
  }, [
    comparePosition,
    compareHeight,
    compareWidth,
    compareTop,
    compareRight,
    compareBottom,
    compareLeft,
    compareOverflow,
    compareMargin,
  ]);

  const div12Style: CSSProperties = useMemo(() => {
    return {
      top: divTop,
      left: divLeft,
      fontSize: divFontSize,
      lineHeight: divLineHeight,
      fontWeight: divFontWeight,
      fontFamily: divFontFamily,
      color: divColor,
      textAlign: divTextAlign,
      height: divHeight,
      width: divWidth,
      right: divRight,
      bottom: divBottom,
    };
  }, [
    divTop,
    divLeft,
    divFontSize,
    divLineHeight,
    divFontWeight,
    divFontFamily,
    divColor,
    divTextAlign,
    divHeight,
    divWidth,
    divRight,
    divBottom,
  ]);

  const rectangle1Style: CSSProperties = useMemo(() => {
    return {
      top: rectangleTop,
      left: rectangleLeft,
      borderRadius: rectangleBorderRadius,
      border: rectangleBorder,
      boxSizing: rectangleBoxSizing,
      width: rectangleWidth,
      height: rectangleHeight,
      right: rectangleRight,
      bottom: rectangleBottom,
    };
  }, [
    rectangleTop,
    rectangleLeft,
    rectangleBorderRadius,
    rectangleBorder,
    rectangleBoxSizing,
    rectangleWidth,
    rectangleHeight,
    rectangleRight,
    rectangleBottom,
  ]);

  const productCTAnormalIconStyle: CSSProperties = useMemo(() => {
    return {
      height: productCTAnormalIconHeight,
      bottom: productCTAnormalIconBottom,
      maxWidth: productCTAnormalIconMaxWidth,
      maxHeight: productCTAnormalIconMaxHeight,
    };
  }, [
    productCTAnormalIconHeight,
    productCTAnormalIconBottom,
    productCTAnormalIconMaxWidth,
    productCTAnormalIconMaxHeight,
  ]);

  const sCGBoutiqueStyle: CSSProperties = useMemo(() => {
    return {
      top: sCGBoutiqueTop,
      fontWeight: sCGBoutiqueFontWeight,
      left: sCGBoutiqueLeft,
      opacity: sCGBoutiqueOpacity,
      mixBlendMode: sCGBoutiqueMixBlendMode,
    };
  }, [
    sCGBoutiqueTop,
    sCGBoutiqueFontWeight,
    sCGBoutiqueLeft,
    sCGBoutiqueOpacity,
    sCGBoutiqueMixBlendMode,
  ]);

  const sCGBoutique1Style: CSSProperties = useMemo(() => {
    return {
      margin: sCGBoutiqueMargin,
      position: sCGBoutiquePosition,
      top: sCGBoutiqueTop1,
      left: sCGBoutiqueLeft1,
      borderRadius: sCGBoutiqueBorderRadius,
      border: sCGBoutiqueBorder,
      boxSizing: sCGBoutiqueBoxSizing,
      width: sCGBoutiqueWidth,
      height: sCGBoutiqueHeight,
      right: sCGBoutiqueRight,
      bottom: sCGBoutiqueBottom,
      maxWidth: sCGBoutiqueMaxWidth,
      overflow: sCGBoutiqueOverflow,
      maxHeight: sCGBoutiqueMaxHeight,
      objectFit: sCGBoutiqueObjectFit,
    };
  }, [
    sCGBoutiqueMargin,
    sCGBoutiquePosition,
    sCGBoutiqueTop1,
    sCGBoutiqueLeft1,
    sCGBoutiqueBorderRadius,
    sCGBoutiqueBorder,
    sCGBoutiqueBoxSizing,
    sCGBoutiqueWidth,
    sCGBoutiqueHeight,
    sCGBoutiqueRight,
    sCGBoutiqueBottom,
    sCGBoutiqueMaxWidth,
    sCGBoutiqueOverflow,
    sCGBoutiqueMaxHeight,
    sCGBoutiqueObjectFit,
  ]);

  const oIconStyle: CSSProperties = useMemo(() => {
    return {
      height: oIconHeight,
      width: oIconWidth,
      top: oIconTop,
      right: oIconRight,
      bottom: oIconBottom,
      left: oIconLeft,
      maxWidth: oIconMaxWidth,
      overflow: oIconOverflow,
      maxHeight: oIconMaxHeight,
      objectFit: oIconObjectFit,
      fontSize: oIconFontSize,
      lineHeight: oIconLineHeight,
      display: oIconDisplay,
      fontFamily: oIconFontFamily,
      color: oIconColor,
      textAlign: oIconTextAlign,
      opacity: oIconOpacity,
      mixBlendMode: oIconMixBlendMode,
      fontWeight: oIconFontWeight,
      position: oIconPosition,
      margin: oIconMargin,
    };
  }, [
    oIconHeight,
    oIconWidth,
    oIconTop,
    oIconRight,
    oIconBottom,
    oIconLeft,
    oIconMaxWidth,
    oIconOverflow,
    oIconMaxHeight,
    oIconObjectFit,
    oIconFontSize,
    oIconLineHeight,
    oIconDisplay,
    oIconFontFamily,
    oIconColor,
    oIconTextAlign,
    oIconOpacity,
    oIconMixBlendMode,
    oIconFontWeight,
    oIconPosition,
    oIconMargin,
  ]);

  const pricenormal1Style: CSSProperties = useMemo(() => {
    return {
      top: pricenormalTop,
      position: pricenormalPosition,
      left: pricenormalLeft,
      width: pricenormalWidth,
      height: pricenormalHeight,
      margin: pricenormalMargin,
      right: pricenormalRight,
      bottom: pricenormalBottom,
      maxWidth: pricenormalMaxWidth,
      overflow: pricenormalOverflow,
      maxHeight: pricenormalMaxHeight,
      objectFit: pricenormalObjectFit,
      fontSize: pricenormalFontSize,
      lineHeight: pricenormalLineHeight,
      display: pricenormalDisplay,
      fontFamily: pricenormalFontFamily,
      color: pricenormalColor,
      textAlign: pricenormalTextAlign,
      fontWeight: pricenormalFontWeight,
    };
  }, [
    pricenormalTop,
    pricenormalPosition,
    pricenormalLeft,
    pricenormalWidth,
    pricenormalHeight,
    pricenormalMargin,
    pricenormalRight,
    pricenormalBottom,
    pricenormalMaxWidth,
    pricenormalOverflow,
    pricenormalMaxHeight,
    pricenormalObjectFit,
    pricenormalFontSize,
    pricenormalLineHeight,
    pricenormalDisplay,
    pricenormalFontFamily,
    pricenormalColor,
    pricenormalTextAlign,
    pricenormalFontWeight,
  ]);

  const div13Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight1,
      position: divPosition,
      top: divTop1,
      left: divLeft1,
      fontSize: divFontSize1,
      lineHeight: divLineHeight1,
      fontFamily: divFontFamily1,
      color: divColor1,
      textAlign: divTextAlign1,
      display: divDisplay,
      width: divWidth1,
      height: divHeight1,
    };
  }, [
    divFontWeight1,
    divPosition,
    divTop1,
    divLeft1,
    divFontSize1,
    divLineHeight1,
    divFontFamily1,
    divColor1,
    divTextAlign1,
    divDisplay,
    divWidth1,
    divHeight1,
  ]);

  const div14Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight2,
      position: divPosition1,
      top: divTop2,
      left: divLeft2,
      fontSize: divFontSize2,
      lineHeight: divLineHeight2,
      fontFamily: divFontFamily2,
      color: divColor2,
      textAlign: divTextAlign2,
      display: divDisplay1,
      width: divWidth2,
      margin: divMargin,
      height: divHeight2,
      right: divRight1,
      bottom: divBottom1,
      maxWidth: divMaxWidth,
      overflow: divOverflow,
      maxHeight: divMaxHeight,
      objectFit: divObjectFit,
    };
  }, [
    divFontWeight2,
    divPosition1,
    divTop2,
    divLeft2,
    divFontSize2,
    divLineHeight2,
    divFontFamily2,
    divColor2,
    divTextAlign2,
    divDisplay1,
    divWidth2,
    divMargin,
    divHeight2,
    divRight1,
    divBottom1,
    divMaxWidth,
    divOverflow,
    divMaxHeight,
    divObjectFit,
  ]);

  return (
    <div
      className={styles.cardproductBoutique}
      style={cardProductBoutiqueStyle}
    >
      <div className={styles.handbag01S} style={handbag01SStyle}>
        {handbag01S}
      </div>
      {showComparenormaldisplayed && (
        <div
          className={styles.comparenormaldisplayed}
          style={comparenormaldisplayedStyle}
        >
          {!comparenormal && (
            <div className={styles.comparenormal} style={comparenormalStyle}>
              <div className={styles.compare} style={compareStyle}>
                {showDiv && (
                  <div className={styles.div} style={div12Style}>
                    {prop}
                  </div>
                )}
                {showRectangle && (
                  <div className={styles.rectangle} style={rectangle1Style} />
                )}
              </div>
            </div>
          )}
          {!productCTAnormalIcon && (
            <img
              className={styles.productctanormalIcon}
              alt=""
              src={productCTAnormal}
              style={productCTAnormalIconStyle}
            />
          )}
        </div>
      )}
      <div className={styles.scgBoutique} style={sCGBoutiqueStyle}>
        <p className={styles.scgBoutique1} style={sCGBoutique1Style}>
          {sCGBoutique}
        </p>
      </div>
      <img className={styles.oIcon} alt="" src={o} style={oIconStyle} />
      <div className={styles.pricenormal} style={pricenormal1Style}>
        <div className={styles.div1} style={div13Style}>
          690 บาท
        </div>
        <div className={styles.div2} style={div14Style}>
          {prop1}
        </div>
      </div>
    </div>
  );
};

export default CardProductBoutique;
