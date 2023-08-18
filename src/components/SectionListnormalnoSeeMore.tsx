import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SectionListnormalnoSeeMore.module.css";

type SectionListnormalnoSeeMoreType = {
  promotionAndSpecialDealsR?: string;

  /** Style props */
  sectionListnormalnoSeeMorPosition?: CSSProperties["position"];
  sectionListnormalnoSeeMorTop?: CSSProperties["top"];
  sectionListnormalnoSeeMorLeft?: CSSProperties["left"];
  divRight?: CSSProperties["right"];
};

const SectionListnormalnoSeeMore: FunctionComponent<
  SectionListnormalnoSeeMoreType
> = ({
  promotionAndSpecialDealsR,
  sectionListnormalnoSeeMorPosition,
  sectionListnormalnoSeeMorTop,
  sectionListnormalnoSeeMorLeft,
  divRight,
}) => {
  const sectionListnormalnoSeeMoreStyle: CSSProperties = useMemo(() => {
    return {
      position: sectionListnormalnoSeeMorPosition,
      top: sectionListnormalnoSeeMorTop,
      left: sectionListnormalnoSeeMorLeft,
    };
  }, [
    sectionListnormalnoSeeMorPosition,
    sectionListnormalnoSeeMorTop,
    sectionListnormalnoSeeMorLeft,
  ]);

  const div32Style: CSSProperties = useMemo(() => {
    return {
      right: divRight,
    };
  }, [divRight]);

  return (
    <div
      className={styles.sectionlistnormalnoSeeMore}
      style={sectionListnormalnoSeeMoreStyle}
    >
      <div className={styles.seeallnormal}>
        <div className={styles.div} style={div32Style}>
          ดูทั้งหมด
        </div>
        <div className={styles.div1}>{`>`}</div>
      </div>
      <div className={styles.div2}>{promotionAndSpecialDealsR}</div>
      <img className={styles.path2Copy} alt="" src="/path-2-copy.svg" />
    </div>
  );
};

export default SectionListnormalnoSeeMore;
