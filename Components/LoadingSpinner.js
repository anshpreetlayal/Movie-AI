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
  height: 100px;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #333;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spinAnimation} 1s linear infinite;
`;