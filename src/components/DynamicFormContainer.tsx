import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DynamicFormContainer.module.css";

type DynamicFormContainerType = {
  /** Style props */
  propTop?: CSSProperties["top"];
};

const DynamicFormContainer: FunctionComponent<DynamicFormContainerType> = ({
  propTop,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.rectangleParent} style={groupDiv1Style}>
      <div className={styles.groupChild} />
      <div className={styles.coverPhoto01} />
      <div className={styles.div}>ลดสูงสุด 30%</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <img className={styles.image57Icon} alt="" src="/image-57@2x.png" />
      </div>
    </div>
  );
};

export default DynamicFormContainer;
