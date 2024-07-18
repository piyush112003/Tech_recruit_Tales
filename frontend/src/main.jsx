import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({
  isAuthenticated: false,
});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [mode, setMode] = useState("dark");

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        blogs,
        setBlogs,
        mode,
        setMode,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <App />
    </Context.Provider>
  );
};


// projetc yaha se render hoga yaha isiliye nhi likha app and bki sb ke idhr se hum values chnge nhi kr skte jo ki hum useState se kr rhe
ReactDOM.createRoot(document.getElementById("root")).render(
  // // rect strictmode used to fetch the issues in code possible memory leak etc
  <React.StrictMode> 
    <AppWrapper />
  </React.StrictMode>
);
