import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for the spinner rotation
const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// component for the spinner container
const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px; /* Adjust the height as needed */
`;
