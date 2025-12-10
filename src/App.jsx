import { SignInPage } from "./pages/SignInPage";
import { AuthContextProvider } from "./providers/AuthContextProvider";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <SignInPage />
      </AuthContextProvider>
    </div>
  );
}

export default App;
