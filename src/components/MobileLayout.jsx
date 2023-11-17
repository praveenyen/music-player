"use client"

import React from 'react'
import styled from 'styled-components'

const MobileLayout = ({children}) => {
  return <MobileContainer>{children}</MobileContainer>;
}

export default MobileLayout

const MobileContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;