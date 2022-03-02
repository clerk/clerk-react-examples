import React from "react";
import styles from "./Button.module.css";

export function Button({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" {...rest} className={styles.button}>
      {children}
    </button>
  );
}
