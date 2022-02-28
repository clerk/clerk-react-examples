import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { MainLayout } from "./components/layout/MainLayout";
import { SignInFormWithClerk } from "./components/SignInForm";
import { SignUp } from "./components/SignUp";
import { SignUpFormWithClerk } from "./components/SignUpForm";

function App() {
  return (
    <MainLayout>
      <Router>
        <ClerkProviderWithNavigate>
          <Switch>
            <Route exact path="/">
              <SignedIn>
                <Home />
              </SignedIn>
              <SignedOut>
                <Redirect to="/sign-up" />
              </SignedOut>
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/sign-up-form">
              <SignedOut>
                <SignUpFormWithClerk />
              </SignedOut>
            </Route>
            <Route path="/sign-in-form">
              <SignedOut>
                <SignInFormWithClerk />
              </SignedOut>
            </Route>
          </Switch>
        </ClerkProviderWithNavigate>
      </Router>
    </MainLayout>
  );
}

function ClerkProviderWithNavigate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { push } = useHistory();
  return (
    <ClerkProvider
      frontendApi={process.env.REACT_APP_CLERK_FRONTEND_API}
      navigate={(to) => push(to)}
    >
      {children}
    </ClerkProvider>
  );
}

export default App;
