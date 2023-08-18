import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SeeAllnormal.module.css";

type SeeAllnormalType = {
  viewAllButtonText?: string;
  viewMoreButtonText?: string;

  /** Style props */
  seeAllnormalPosition?: CSSProperties["position"];
  seeAllnormalTop?: CSSProperties["top"];
  seeAllnormalRight?: CSSProperties["right"];
  divRight?: CSSProperties["right"];
  divRight1?: CSSProperties["right"];
};

const SeeAllnormal: FunctionComponent<SeeAllnormalType> = ({
  viewAllButtonText,
  viewMoreButtonText,
  seeAllnormalPosition,
  seeAllnormalTop,
  seeAllnormalRight,
  divRight,
  divRight1,
}) => {
  const seeAllnormal2Style: CSSProperties = useMemo(() => {
    return {
      position: seeAllnormalPosition,
      top: seeAllnormalTop,
      right: seeAllnormalRight,
    };
  }, [seeAllnormalPosition, seeAllnormalTop, seeAllnormalRight]);

  const div33Style: CSSProperties = useMemo(() => {
    return {
      right: divRight,
    };
  }, [divRight]);

  const div34Style: CSSProperties = useMemo(() => {
    return {
      right: divRight1,
    };
  }, [divRight1]);

  return (
    <div className={styles.seeallnormal} style={seeAllnormal2Style}>
      <div className={styles.div} style={div33Style}>
        {viewAllButtonText}
      </div>
      <div className={styles.div1} style={div34Style}>
        {viewMoreButtonText}
      </div>
    </div>
  );
};

export default SeeAllnormal;
