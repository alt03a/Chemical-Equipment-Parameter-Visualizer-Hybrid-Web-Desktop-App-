import { useEffect, useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => { fetch("/api/user").then(r => r.json()).then(setUser); }, []);
  return user ? <Dashboard /> : <Login onLogin={setUser} />;
}
