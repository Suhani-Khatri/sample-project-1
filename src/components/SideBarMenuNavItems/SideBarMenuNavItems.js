import React from 'react';

import SideTabBarBlock from '../SideTabBarBlock';

import {
  StyledLogo,
  StyledLogoBlock,
  StyledNavContent,
  StyledNavItem,
  StyledProfileBlock,
  StyledSidebarContainer,
  StyledSidebarContent,
  StyledSidebarWrapper,
} from './SideBarMenuNavItems.styled';

import { SIDEBAR_DETAILS } from '#/constants/SideBarNavContent';

const SideBarMenuNavItems = () => {
  return (
    <StyledSidebarWrapper>
      <StyledSidebarContainer>
        <StyledSidebarContent>
          <StyledNavItem>
            <StyledLogoBlock>
              <StyledLogo> logo</StyledLogo>
            </StyledLogoBlock>
            <StyledNavContent>
              {SIDEBAR_DETAILS.map(({ icons, text }) => (
                <SideTabBarBlock key={icons} icons={icons} text={text} />
              ))}
            </StyledNavContent>
          </StyledNavItem>
          <StyledProfileBlock />
        </StyledSidebarContent>
      </StyledSidebarContainer>
    </StyledSidebarWrapper>
  );
};

export default SideBarMenuNavItems;
