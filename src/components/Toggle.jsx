import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Toggle = ({label}) => {
  return (
      <ToggleContainer>
          <ToggleButton>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
              >
                  <path
                      d="M16 1.33337V4.00004M16 28V30.6667M30.6667 16H28M4.00004 16H1.33337M26.3709 5.62914L24.4853 7.51476M7.51476 24.4853L5.62914 26.3709M26.3709 26.3709L24.4853 24.4853M7.51476 7.51476L5.62914 5.62914M24 16C24 20.4183 20.4183 24 16 24C11.5818 24 8.00004 20.4183 8.00004 16C8.00004 11.5818 11.5818 8.00004 16 8.00004C20.4183 8.00004 24 11.5818 24 16Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                  />
              </svg>
          </ToggleButton>
          <ToggleLabel>{label}</ToggleLabel>
      </ToggleContainer>
  );
}

export default Toggle;

Toggle.propTypes = {
    label: PropTypes.string.isRequired,
};

Toggle.defaultProps = {
    label: 'Light mode',
};

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 17px;
`;

const ToggleButton = styled.button`
    fill: rgba(255, 255, 255, 0.01);

    backdrop-filter: blur(43.5px);
    border-radius: 50%;
    border: none;
    width: 73px;
    height: 73px;
    cursor: pointer;
`;
const ToggleLabel = styled.label`
    color: #dadada;

    font-size: 17px;
    font-weight: 500;
    text-transform: capitalize;
`;