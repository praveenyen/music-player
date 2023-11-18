"use client";

import React from "react";
import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import Image from "next/image";
import PropTypes from "prop-types";

const TopNav = ({ showMenu, showLogo, pageTitle, onBack }) => {
    return (
        <TopNavContainer>
            <TopNavContent>
                <BiChevronLeft onClick={onBack} />
                {showLogo ? (
                    <Image
                        src="http://localhost:3000/logo-light.svg"
                        alt="logo"
                        height={60}
                        width={100}
                    />
                ) : (
                    <p>{pageTitle}</p>
                )}
                {showMenu ? <PiDotsThreeVerticalBold /> : <span></span>}
            </TopNavContent>
        </TopNavContainer>
    );
};

export default TopNav;

TopNav.propTypes = {
    showMenu: PropTypes.bool,
    showLogo: PropTypes.bool,
    pageTitle: PropTypes.string,
    onBack: PropTypes.func,
};
TopNav.defaultProps = {
    showMenu: false,
    showLogo: true,
    pageTitle: "Page Title",
    onBack: () => {},
};

const TopNavContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const TopNavContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 20px;
    min-height: 60px;

    p {
        font-size: 18px;
        font-weight: 700;
    }
`;

const TopNavIcon = styled.span`
    background-color: rgba(0, 0, 0, 0.04);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 7px;
    border-radius: 50%;
`;
