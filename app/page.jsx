"use client";
import { useEffect, useState, useContext } from "react";
import MainWelcomeScreen from "./screens/main_welcome_screen/page";
import MainHomeScreen from "./screens/main_home_screen/page";
import MainAdminScreen from "./screens/main_admin_screen/page";
// import { AuthContext } from "./backend/AuthContext";

export default function Home() {
  // const { currentUser } = useContext(AuthContext);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const admin = localStorage.getItem("admin");
    if (user != null) {
      setIsUserLoggedIn(true);
    }
    if (admin != null) {
      setIsAdminLoggedIn(true);
    }
  }, []);

  return (
    <main>
      {isUserLoggedIn ? (
        <MainHomeScreen />
      ) : isAdminLoggedIn ? (
        <MainAdminScreen />
      ) : (
        <MainWelcomeScreen />
      )}
    </main>
  );
}
