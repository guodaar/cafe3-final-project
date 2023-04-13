import Routes from "./routes/Routes";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
