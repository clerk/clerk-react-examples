import styles from "./SignUp.module.css";
import { ReactComponent as LogoIcon } from "../assets/svg/logo.svg";
import { Button } from "./Button";
import { Card } from "./layout/Card";
import { Link } from "react-router-dom";
import { CustomLink } from "./CustomLink";

export function SignUp() {
  return (
    <Card style={{ alignSelf: "center" }}>
      <LogoIcon height={64} width={280} />
      <Link style={{ margin: "64px 0px 48px 0px" }} to="/sign-up-form">
        <Button>Sign up</Button>
      </Link>
      <p className={styles.text}>
        Already have an account?{" "}
        <CustomLink to="/sign-in-form">Sign in</CustomLink>
      </p>
    </Card>
  );
}
