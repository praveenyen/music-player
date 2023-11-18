"use client";
import GetStartedPage from "@/components/GetStarted";
import MobileLayout from "@/components/MobileLayout";
import SplashScreen from "@/components/SplashScreen";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/get-started");
        }, 1000);
    }, [router]);

    return (
        <MobileLayout>
            <SplashScreen />
        </MobileLayout>
    );
}
