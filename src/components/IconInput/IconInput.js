import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    thickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    thickness: 2,
    height: 36,
  },
};
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const style = SIZES[size];
  if(!style) {
    throw new Error(`A valid size must be provided. Current size: ${size}`)
  }
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': style.iconSize + 'px'}}>
        <Icon id={icon} size={style.iconSize} strokeWidth={style.thickness}/>
      </IconWrapper>
      <StyledTextInput
        type="text"
        style={{
          '--width': width + 'px',
          '--borderThickness': style.thickness + 'px',
          '--fontSize': style.fontSize / 16 + 'rem',
          '--height': style.height / 16 + 'rem',
        }}
        {...delegated}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const StyledTextInput = styled.input`
  color: inherit;
  font-weight: 700;
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  font-size: var(--fontSize);
  padding-left: var(--height);
  height: var(--height);
  width: var(--width);
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
