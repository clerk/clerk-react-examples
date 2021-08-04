import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import styles from "./SignUpFormLayout.module.css";

export function SignUpFormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <LogoIcon height={48} width={212} />
      </div>
      {children}
    </div>
  );
}
