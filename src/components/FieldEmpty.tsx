import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FieldEmpty.module.css";

type FieldEmptyType = {
  icDone?: string;
  prop?: string;

  /** Style props */
  fieldEmptyPosition?: CSSProperties["position"];
  fieldEmptyWidth?: CSSProperties["width"];
  fieldEmptyTop?: CSSProperties["top"];
  fieldEmptyLeft?: CSSProperties["left"];
  rectangleCopy6Height?: CSSProperties["height"];
  rectangleCopy6Width?: CSSProperties["width"];
  rectangleCopy6Top?: CSSProperties["top"];
  rectangleCopy6Right?: CSSProperties["right"];
  rectangleCopy6Bottom?: CSSProperties["bottom"];
  rectangleCopy6Left?: CSSProperties["left"];
  rectangleCopy6Border?: CSSProperties["border"];
  rectangleCopy6BoxSizing?: CSSProperties["boxSizing"];
  divFontWeight?: CSSProperties["fontWeight"];
  divFontFamily?: CSSProperties["fontFamily"];
  divOpacity?: CSSProperties["opacity"];
};

const FieldEmpty: FunctionComponent<FieldEmptyType> = ({
  icDone,
  prop,
  fieldEmptyPosition,
  fieldEmptyWidth,
  fieldEmptyTop,
  fieldEmptyLeft,
  rectangleCopy6Height,
  rectangleCopy6Width,
  rectangleCopy6Top,
  rectangleCopy6Right,
  rectangleCopy6Bottom,
  rectangleCopy6Left,
  rectangleCopy6Border,
  rectangleCopy6BoxSizing,
  divFontWeight,
  divFontFamily,
  divOpacity,
}) => {
  const fieldEmptyStyle: CSSProperties = useMemo(() => {
    return {
      position: fieldEmptyPosition,
      width: fieldEmptyWidth,
      top: fieldEmptyTop,
      left: fieldEmptyLeft,
    };
  }, [fieldEmptyPosition, fieldEmptyWidth, fieldEmptyTop, fieldEmptyLeft]);

  const rectangleCopy6Style: CSSProperties = useMemo(() => {
    return {
      height: rectangleCopy6Height,
      width: rectangleCopy6Width,
      top: rectangleCopy6Top,
      right: rectangleCopy6Right,
      bottom: rectangleCopy6Bottom,
      left: rectangleCopy6Left,
      border: rectangleCopy6Border,
      boxSizing: rectangleCopy6BoxSizing,
    };
  }, [
    rectangleCopy6Height,
    rectangleCopy6Width,
    rectangleCopy6Top,
    rectangleCopy6Right,
    rectangleCopy6Bottom,
    rectangleCopy6Left,
    rectangleCopy6Border,
    rectangleCopy6BoxSizing,
  ]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight,
      fontFamily: divFontFamily,
      opacity: divOpacity,
    };
  }, [divFontWeight, divFontFamily, divOpacity]);

  return (
    <div className={styles.fieldempty} style={fieldEmptyStyle}>
      <div className={styles.rectangleCopy6} style={rectangleCopy6Style} />
      <img className={styles.icDoneIcon} alt="" src={icDone} />
      <div className={styles.div} style={divStyle}>
        {prop}
      </div>
    </div>
  );
};

export default FieldEmpty;
