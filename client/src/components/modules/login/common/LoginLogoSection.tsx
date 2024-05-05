import { FC } from "react";

import IMAGES from "../../../../assets/themes/images/images";
import styles from "../login.module.scss";

const LoginLogoSection: FC = () => {
  
  return (
    <div className={styles.logoWrap}>
      <img className={styles.logoLogin} src={IMAGES.Logo} alt="logo" />
    </div>
  );
};

export default LoginLogoSection;
