import styled from 'styled-components';

export const StyledHandleBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const HandleIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background: transperent;

  &:hover {
    border-radius: 50%;
    color: ${({ theme, color }) => theme.colors[color]};
    background: ${({ theme, background }) => theme.colors[background]};
    cursor: pointer;
  }

  @media only screen and (max-width: 470px) {
    padding: 5px;
  }

  @media only screen and (max-width: 390px) {
    padding: 2px;
  }
`;

export const HandleIcon = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;

  color: ${({ theme }) => theme.colors.blackCoral};

  &:hover {
    color: ${({ theme, color }) => theme.colors[color]};
    cursor: pointer;
  }
`;

export const HandleCounts = styled.span`
  font-size: 15px;
  font-weight: 400;
  // padding: 0 12px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.blackCoral};

  &:hover {
    color: ${({ theme, color }) => theme.colors[color]};
    cursor: pointer;
  }
  @media only screen and (max-width: 470px) {
    font-size: 10px;
  }
`;
