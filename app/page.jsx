"use client";
import { useEffect, useState } from "react";
import MainWelcomeScreen from "./screens/main_welcome_screen/page";
import MainHomeScreen from "./screens/main_home_screen/page";

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    setIsLoggedIn(user === "true");
  }, []);

  return <main>{isLoggedIn ? <MainHomeScreen /> : <MainWelcomeScreen />}</main>;

}
