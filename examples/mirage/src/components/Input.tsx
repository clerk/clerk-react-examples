import React from "react";
import styles from "./Input.module.css";

export const Input = React.forwardRef<HTMLInputElement>((props, ref) => {
  return <input className={styles.input} ref={ref} {...props} />;
});
