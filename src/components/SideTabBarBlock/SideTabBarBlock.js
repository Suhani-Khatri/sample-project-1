import React from 'react';

import PropTypes from 'prop-types';

import {
  StyledNavItemsIcon,
  StyledNavItemsText,
  StyledTabBar,
  StyledTabBarContent,
  StyledText,
} from './SideTabBarBlock.styled';

const SideTabBarBlock = ({ icons, text }) => {
  return (
    <StyledTabBar>
      <StyledTabBarContent>
        {icons && <StyledNavItemsIcon>{icons}</StyledNavItemsIcon>}
        <StyledNavItemsText>
          <StyledText>{text}</StyledText>
        </StyledNavItemsText>
      </StyledTabBarContent>
    </StyledTabBar>
  );
};

export default SideTabBarBlock;

SideTabBarBlock.defaultProps = {
  icons: null,
};

SideTabBarBlock.propTypes = {
  icons: PropTypes.node,
  text: PropTypes.string.isRequired,
};
