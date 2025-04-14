import React, { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import Layout from "../components/layout/Layout";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <Layout />
  );
}
