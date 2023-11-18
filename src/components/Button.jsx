import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ label, onClick }) => {
    return <ButtonContainer onClick={onClick}>{label}</ButtonContainer>;
};

export default Button;

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    label: "Get Started",
    onClick: () => {},
};

const ButtonContainer = styled.button`
    background-color: #42c83c;
    border: none;
    border-radius: 30px;
    padding-block: 31px;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: #42c43c;
    }

    &:focus {
        outline: none;
    }

    color: #f6f6f6;

    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`;
