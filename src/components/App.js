
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./AuthContext";
import Auth from "./Auth";
import './../styles/App.css';

const App = () => {
  return (
    <div>
    <AuthProvider>
      <Auth />
    </AuthProvider>
    </div>
  )
}

export default App
