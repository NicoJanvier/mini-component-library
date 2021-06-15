/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--borderRadius': '4px',
  },
  medium: {
    '--height': '12px',
    '--borderRadius': '4px',
  },
  large: {
    '--height': '16px',
    '--borderRadius': '8px',
    '--padding': '4px',
  },
}
const ProgressBar = ({ value = 0, size = 'large' }) => {
  if (value < 0 || value > 100) {
    throw new Error(`ProgressBar can only render values between 0 and 100. Current value: ${value}`)
  }
  const style = SIZES[size];
  if (!style) {
    throw new Error(`ProgressBar can only have a size 'small', 'medium' or 'large'. Current size: ${size}`)
  }
  return (
    <Wrapper role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={value} style={style}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar value={value} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: ${p => p.value}%;
`;

export default ProgressBar;
