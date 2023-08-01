import styled from 'styled-components';

export const StyledTabBar = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const StyledTabBarContent = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;

  &:hover {
    background: #ddd;
    border-radius: 50px;
  }
`;

export const StyledNavItemsIcon = styled.div`
  display: flex;
`;

export const StyledIcon = styled.div``;

export const StyledNavItemsText = styled.div`
  margin: 0 16px 0 20px;
`;

export const StyledText = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
