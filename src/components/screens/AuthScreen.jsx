"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useRouter } from "next/navigation";

const AuthScreen = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/auth/login");
    };

    const handleRegister = () => {
        router.push("/auth/register");
    };
    return (
        <AuthScreenContainer>
            <AuthScreenContent>
                <Image
                    src="/logo-light.svg"
                    alt="logo"
                    height={100}
                    width={200}
                />
                <div className="">
                    <h2>Enjoy listening to music</h2>
                    <p>
                        Spotify is a proprietary Swedish audio streaming and
                        media services provider
                    </p>
                    <AuthScreenButtonContainer>
                        <Button
                            label={"Register"}
                            onClick={handleRegister}
                        ></Button>
                        <Button label={"Login"} onClick={handleLogin}></Button>
                    </AuthScreenButtonContainer>
                </div>
            </AuthScreenContent>
        </AuthScreenContainer>
    );
};

export default AuthScreen;

const AuthScreenContainer = styled.div`
    padding-block-start: 60px;
    padding-inline: 20px;
`;
const AuthScreenContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 35px;

    height: 80vh;

    h2 {
        font-size: 26px;
        font-weight: 700;
        text-transform: capitalize;
        margin-block-end: 21px;
    }

    p {
        color: #797979;
        text-align: center;
        font-size: 17px;
        font-weight: 400;
        margin-block-end: 21px;
    }
`;

const AuthScreenButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
`;
