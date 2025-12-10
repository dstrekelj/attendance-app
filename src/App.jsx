import { Router } from "./pages/Router";
import { AuthContextProvider } from "./providers/AuthContextProvider";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </div>
  );
}

export default App;
