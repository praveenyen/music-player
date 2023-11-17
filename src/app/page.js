"use client";
import GetStartedPage from "@/components/GetStarted";
import MobileLayout from "@/components/MobileLayout";
import SplashScreen from "@/components/SplashScreen";
import { useEffect, useState } from "react";

export default function Home() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        // below code will be exectud after 2 seconds
        setShowSplash(false);
      }, 2000)
    }, [])

    return (
        <MobileLayout>
            {showSplash ? <SplashScreen /> : <GetStartedPage />}
        </MobileLayout>
    );
}
