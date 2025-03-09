"use client";

import { useEffect, useState } from "react";
import Login from "@/components/login";
import AppBar from "@/components/app-bar";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLogin = () => {
    // Pega os cookies no cliente
    const cookieStore = document.cookie
      .split("; ")
      .reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = value;
        return acc;
      }, {} as Record<string, string>);

    const userEmail = cookieStore["user_email"];
    const userPassword = cookieStore["user_password"];

    setIsLoggedIn(userEmail === "rafael.holler@gmail.com" && userPassword === "123");
  };

  useEffect(() => {
    checkLogin();
  }, []);

  if (!isLoggedIn) {
    return <Login onLogin={checkLogin} />;
  }

  return <AppBar />;
}
