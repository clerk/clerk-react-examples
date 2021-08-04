import { ReactComponent as LogoIcon } from "../assets/svg/logo.svg";
import { Button } from "./Button";
import { Card } from "./layout/Card";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Card style={{ alignSelf: "center" }}>
      <LogoIcon height={64} width={280} />
      <Link style={{ margin: "64px 0" }} to="/sign-up-form">
        <Button>Sign up</Button>
      </Link>
    </Card>
  );
}
