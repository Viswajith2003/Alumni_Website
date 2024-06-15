"use client";
import { useEffect, useState, useContext } from "react";
import MainWelcomeScreen from "./screens/main_welcome_screen/page";
import MainHomeScreen from "./screens/main_home_screen/page";
// import { AuthContext } from "./backend/AuthContext";

export default function Home() {
  // const { currentUser } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    const user1 = localStorage.getItem("user");
    setIsLoggedIn(user === "true" || user1 === "true");
  }, []);

  return <main>{isLoggedIn ? <MainHomeScreen /> : <MainWelcomeScreen />}</main>;
}
