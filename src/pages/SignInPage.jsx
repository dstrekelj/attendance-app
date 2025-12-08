import { SignInForm } from "../components/SignInForm";

export function SignInPage() {
  const handleSignIn = (email, password) => {
    console.log("Signing in with", email, password);
  };

  return (
    <div>
      <div>Sign In Page</div>
      <SignInForm onSignIn={handleSignIn} />
    </div>
  );
}
