import TopNav from "@/components/TopNav";
import AuthScreen from "@/components/screens/AuthScreen";
import React from "react";

const AuthPage = () => {
    return (
        <div>
            <TopNav showLogo={true} pageTitle="" />
            <AuthScreen></AuthScreen>
        </div>
    );
};

export default AuthPage;
