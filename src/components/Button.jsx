import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({label}) => {
  return <ButtonContainer>{label}</ButtonContainer>;
}

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  label: 'Get Started',
}

const ButtonContainer = styled.button`
    background-color: #42c83c;
    border: none;
    border-radius: 30px;
    padding-block: 31px;
    width: 100%;

    color: #f6f6f6;

    font-family: Satoshi;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`;