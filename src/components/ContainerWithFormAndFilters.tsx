import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContainerWithFormAndFilters.module.css";

type ContainerWithFormAndFiltersType = {
  imageDimensions?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
  propCursor?: CSSProperties["cursor"];

  /** Action props */
  onImage39Click?: () => void;
};

const ContainerWithFormAndFilters: FunctionComponent<
  ContainerWithFormAndFiltersType
> = ({ imageDimensions, propLeft, propTop, propCursor, onImage39Click }) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.groupChild} />
      <div className={styles.coverPhoto01} />
      <div className={styles.div}>ลดสูงสุด 30%</div>
      <img
        className={styles.groupItem}
        alt=""
        src={imageDimensions}
        style={rectangleIconStyle}
        onClick={onImage39Click}
      />
    </div>
  );
};

export default ContainerWithFormAndFilters;
