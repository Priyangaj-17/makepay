import "./App.css";
import { AuthRoutes } from "./pages/Auth/AuthRoutes";

function App() {
  const host = window.location.host.split(".");
  const hello = "Hello world";
  console.log(hello);
  if (host.length <= 3 && host[0] === "accounts") {
    return <AuthRoutes />;
  }
  return (
    <>
      <AuthRoutes />
    </>
  );
}

export default App;
