import React from 'react';

import PropTypes from 'prop-types';

import { HandleCounts, HandleIcon, HandleIconWrapper, StyledHandleBlock } from './SocialMediaHandles.styled';

const SocialMediaHandles = ({ icon, count, title, background, color, size }) => {
  console.log(size);

  return (
    <StyledHandleBlock title={title}>
      <HandleIconWrapper background={background} color={color}>
        {icon && <HandleIcon color={color}>{icon}</HandleIcon>}
      </HandleIconWrapper>
      <HandleCounts color={color}>{count}</HandleCounts>
    </StyledHandleBlock>
  );
};

SocialMediaHandles.defaultProps = {
  icon: null,
  title: null,
  background: null,
  color: null,
  size: null,
};

SocialMediaHandles.propTypes = {
  icon: PropTypes.node,
  count: PropTypes.string.isRequired,
  title: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default SocialMediaHandles;
