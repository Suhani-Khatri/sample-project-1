import React from 'react';

import SideBarMenu from '../SideBarMenuItem';

import {
  StyledContainer,
  StyledContent,
  StyledLogo,
  StyledLogoBlock,
  StyledNavContent,
  StyledNavItem,
  StyledProfileBlock,
  StyledWrapper,
} from './SideBar.styled';

import { SIDEBAR_DETAILS } from '#/constants/SideBarNavContent';

const SideBar = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledContent>
          <StyledNavItem>
            <StyledLogoBlock>
              <StyledLogo> logo</StyledLogo>
            </StyledLogoBlock>
            <StyledNavContent>
              {SIDEBAR_DETAILS.map(({ icons, text }) => (
                <SideBarMenu key={icons} icons={icons} text={text} />
              ))}
            </StyledNavContent>
          </StyledNavItem>
          <StyledProfileBlock />
        </StyledContent>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default SideBar;
