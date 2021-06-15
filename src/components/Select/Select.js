import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBox>
        <DisplayedText>{displayedValue}</DisplayedText>
        <Icon id="chevron-down" size={24} strokeWidth={2} />
      </PresentationalBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBox = styled.div`
  padding: 12px 16px;
  /* Icon already has some padding */
  padding-right: 10px;
  border-radius: 8px;
  border: none;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  display: flex;
  align-items: center;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const DisplayedText = styled.span`
  padding-right: 12px;
  font-size: 1rem;
`;

export default Select;
