import styles from "./CustomLink.module.css";
import { Link, LinkProps } from "react-router-dom";

export function CustomLink(props: LinkProps) {
  return <Link className={styles.link} {...props} />;
}
