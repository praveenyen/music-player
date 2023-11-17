"use client"

import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';

const SplashScreen = () => {
  return (
      <SplashScreenContainer>
          <Image src="/logo-light.svg" alt="logo" height={100} width={200} />
      </SplashScreenContainer>
  );
}

export default SplashScreen

const SplashScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;