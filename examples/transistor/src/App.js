import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";

function AuthLayout({ children }) {
  return (
    <>
      <SignedIn>
        <Home />
      </SignedIn>
      <SignedOut>
        <div className="container">
          <div className="sidebar">{children}</div>
          <div className="cover"></div>
        </div>
      </SignedOut>
    </>
  );
}

function App() {
  const history = useHistory();
  return (
    <ClerkProvider
      navigate={history.push}
      frontendApi={process.env.REACT_APP_CLERK_FRONTEND_API}
    >
      <Switch>
        <Route exact path="/sign-up">
          <AuthLayout>
            <SignUp signInURL="/sign-in" />
          </AuthLayout>
        </Route>
        <Route path="/sign-in">
          <AuthLayout>
            <SignIn routing="path" path="/sign-in" signUpURL="/sign-up" />
          </AuthLayout>
        </Route>
        <Route>
          <AuthLayout>
            <SignUp signInURL="/sign-in" />
          </AuthLayout>
        </Route>
      </Switch>
    </ClerkProvider>
  );
}

export default App;
