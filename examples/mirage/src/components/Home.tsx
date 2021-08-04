import styles from "./Home.module.css";
import { ReactComponent as LogoIcon } from "../assets/svg/logo.svg";
import { Card } from "./layout/Card";
import { useClerk, useUser } from "@clerk/clerk-react";
import { Title } from "./Title";
import { Button } from "./Button";

export function Home() {
  const user = useUser();
  const { signOut } = useClerk();

  return (
    <Card className={styles.home}>
      <LogoIcon height={64} width={280} />
      <img alt={user.firstName || ""} src={user.profileImageUrl} />
      <Title>Hey {user.fullName}!</Title>
      <Button onClick={() => signOut()}>Log out</Button>
    </Card>
  );
}
