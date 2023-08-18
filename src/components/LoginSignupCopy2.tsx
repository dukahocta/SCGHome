import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LoginSignupCopy2.module.css";

type LoginSignupCopy2Type = {
  /** Style props */
  loginSignupCopy2Position?: CSSProperties["position"];
  loginSignupCopy2Width?: CSSProperties["width"];
  loginSignupCopy2Height?: CSSProperties["height"];
  loginSignupCopy2Top?: CSSProperties["top"];
  loginSignupCopy2Right?: CSSProperties["right"];
  loginSignupCopy2Bottom?: CSSProperties["bottom"];
  loginSignupCopy2Left?: CSSProperties["left"];
  divFontWeight?: CSSProperties["fontWeight"];
  divFontWeight1?: CSSProperties["fontWeight"];
};

const LoginSignupCopy2: FunctionComponent<LoginSignupCopy2Type> = ({
  loginSignupCopy2Position,
  loginSignupCopy2Width,
  loginSignupCopy2Height,
  loginSignupCopy2Top,
  loginSignupCopy2Right,
  loginSignupCopy2Bottom,
  loginSignupCopy2Left,
  divFontWeight,
  divFontWeight1,
}) => {
  const loginSignupCopy2Style: CSSProperties = useMemo(() => {
    return {
      position: loginSignupCopy2Position,
      width: loginSignupCopy2Width,
      height: loginSignupCopy2Height,
      top: loginSignupCopy2Top,
      right: loginSignupCopy2Right,
      bottom: loginSignupCopy2Bottom,
      left: loginSignupCopy2Left,
    };
  }, [
    loginSignupCopy2Position,
    loginSignupCopy2Width,
    loginSignupCopy2Height,
    loginSignupCopy2Top,
    loginSignupCopy2Right,
    loginSignupCopy2Bottom,
    loginSignupCopy2Left,
  ]);

  const div36Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight,
    };
  }, [divFontWeight]);

  const div37Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: divFontWeight1,
    };
  }, [divFontWeight1]);

  return (
    <div className={styles.loginSignupCopy2} style={loginSignupCopy2Style}>
      <img className={styles.logOutIcon} alt="" src="/logout.svg" />
      <div className={styles.rectangle} />
      <div className={styles.div} style={div36Style}>
        เข้าสู่ระบบ
      </div>
      <div className={styles.div1} style={div37Style}>
        สมัครสมาชิก
      </div>
      <img className={styles.loginSignupCopy2Child} alt="" src="/line-3.svg" />
    </div>
  );
};

export default LoginSignupCopy2;
