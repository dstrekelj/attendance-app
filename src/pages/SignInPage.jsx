import { useContext, useEffect } from "react";
import { SignInForm } from "../components/SignInForm";
import { AuthContext } from "../contexts/AuthContext";

export function SignInPage() {
  const { user, signIn } = useContext(AuthContext);

  console.log("marker");

  const handleSignIn = (email, password) => {
    signIn(email, password);
    console.log("handleSignIn called");
  };

  useEffect(() => {
    if (!user) return;

    console.log("test");
  }, [user]);
  [];

  return (
    <div>
      <div>Sign In Page</div>
      <SignInForm onSignIn={handleSignIn} />
    </div>
  );
}
