import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ButtonAction.module.css";

type ButtonActionType = {
  actionLabel?: string;

  /** Style props */
  buttonActionPosition?: CSSProperties["position"];
  buttonActionWidth?: CSSProperties["width"];
  buttonActionTop?: CSSProperties["top"];
  buttonActionLeft?: CSSProperties["left"];
  divLeft?: CSSProperties["left"];
};

const ButtonAction: FunctionComponent<ButtonActionType> = ({
  actionLabel,
  buttonActionPosition,
  buttonActionWidth,
  buttonActionTop,
  buttonActionLeft,
  divLeft,
}) => {
  const buttonActionStyle: CSSProperties = useMemo(() => {
    return {
      position: buttonActionPosition,
      width: buttonActionWidth,
      top: buttonActionTop,
      left: buttonActionLeft,
    };
  }, [
    buttonActionPosition,
    buttonActionWidth,
    buttonActionTop,
    buttonActionLeft,
  ]);

  const div31Style: CSSProperties = useMemo(() => {
    return {
      left: divLeft,
    };
  }, [divLeft]);

  return (
    <div className={styles.buttonAction} style={buttonActionStyle}>
      <div className={styles.rectangle} />
      <div className={styles.div} style={div31Style}>
        {actionLabel}
      </div>
    </div>
  );
};

export default ButtonAction;
