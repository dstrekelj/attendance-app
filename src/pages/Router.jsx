import { useContext } from "react";
import { DashboardPage } from "./DashboardPage";
import { SignInPage } from "./SignInPage";
import { AuthContext } from "../contexts/AuthContext";

export function Router() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {!user && <SignInPage />}
      {user && <DashboardPage />}
    </>
  );
}
