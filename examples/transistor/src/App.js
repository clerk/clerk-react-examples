import {
  ClerkProvider,
  RedirectToUserProfile,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

function AuthLayout({ children }) {
  return (
    <>
      <SignedIn>
        <RedirectToUserProfile />
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
  return (
    <ClerkProvider frontendApi={process.env.REACT_APP_CLERK_FRONTEND_API}>
      <Router>
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
            <Redirect to="/sign-up" />
          </Route>
        </Switch>
      </Router>
    </ClerkProvider>
  );
}

export default App;
