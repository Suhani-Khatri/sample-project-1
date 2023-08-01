import React from 'react';

import PropTypes from 'prop-types';

import {
  StyledMenuContent,
  StyledMenuItems,
  StyledNavItemsIcon,
  StyledNavItemsText,
  StyledText,
} from './SideBarMenuItem.styled';

const SideBarMenu = ({ icons, text }) => {
  return (
    <StyledMenuItems>
      <StyledMenuContent>
        {icons && <StyledNavItemsIcon>{icons}</StyledNavItemsIcon>}
        <StyledNavItemsText>
          <StyledText>{text}</StyledText>
        </StyledNavItemsText>
      </StyledMenuContent>
    </StyledMenuItems>
  );
};

export default SideBarMenu;

SideBarMenu.defaultProps = {
  icons: null,
};

SideBarMenu.propTypes = {
  icons: PropTypes.node,
  text: PropTypes.string.isRequired,
};
