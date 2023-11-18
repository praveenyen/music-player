"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useRouter } from "next/navigation";

const GetStartedScreen = () => {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push("/choose-mode");
    };
    return (
        <GetStartedContainer>
            <GetStartedOverlay />
            <Image src="/logo-light.svg" alt="logo" height={100} width={200} />
            <BottomContainer>
                <strong>Enjoy listening to music</strong>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sagittis enim purus sed phasellus. Cursus ornare id
                    scelerisque aliquam.
                </p>
                <Button onClick={handleGetStarted} />
            </BottomContainer>
        </GetStartedContainer>
    );
};

export default GetStartedScreen;

const GetStartedContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("/background-women.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;

    img {
        position: absolute;
        top: 0;
        left: 50%;
        margin: 20px;
        transform: translateX(-50%);
    }
`;

const GetStartedOverlay = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
`;

const BottomContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 40%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    strong {
        color: #dadada;

        font-family: Satoshi;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
    }

    p {
        color: #797979;
        text-align: center;
        font-family: Satoshi;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;
