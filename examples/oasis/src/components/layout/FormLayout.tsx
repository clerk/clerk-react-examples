import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import { CustomLink } from "../CustomLink";
import styles from "./FormLayout.module.css";

type FormType = "sign-up" | "sign-in";

export function FormLayout({
  children,
  type,
}: {
  children: React.ReactNode;
  type: FormType;
}) {
  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <LogoIcon height={48} width={212} />
      </div>
      {children}
      {type === "sign-in" ? <SignUpLink /> : <SignInLink />}
    </div>
  );
}

const SignUpLink = () => (
  <p className={styles.text}>
    No account? <CustomLink to="/sign-up-form">Sign up</CustomLink>
  </p>
);

const SignInLink = () => (
  <p className={styles.text}>
    Already have an account? <CustomLink to="/sign-in-form">Sign in</CustomLink>
  </p>
);
