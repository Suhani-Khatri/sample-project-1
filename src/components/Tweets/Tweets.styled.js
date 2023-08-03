import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledTweetWrapper = styled.div`
  display: flex;
`;

export const StyledTweetContainer = styled.div`
  display: flex;
  max-width: 598px;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;

  &:hover {
    background: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
  }

  @media only screen and (max-width: 361px) {
    display: flex;
    align-items: center;
  }
`;

export const StyledInnerContainer = styled.div`
  display: flex;
  padding: 12px 0;
  box-sizing: border-box;
`;

export const StyledProfileContainer = styled.div`
  display: flex;
  margin-right: 12px;
`;

export const StyledUserProfile = styled.div`
  display: flex;
  max-width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;
  background: gray;
`;

export const ProfileAvatar = styled.img`
  display: flex;
  box-sizing: border-box;
  background: transparent;

  &:hover {
    opacity: 0.8;
    background: ${({ theme }) => theme.colors.graniteGray};
    cursor: pointer;
  }
`;

export const StyledTweetContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const StyledBlueTick = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
`;

export const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2px;

  &:hover {
    cursor: pointer;
  }
`;

export const UserInfoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  @media only screen and (max-width: 360px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const StyledMainUserNames = styled.span`
  display: flex;
  align-items: flex-start;
  font-family: 'TwitterChirp', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
`;

// export const UsernameBlock = styled.span`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

export const UserName = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #0f1419;
  font-family: 'TwitterChirp', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const StyledTickIcon = styled.div`
  display: flex;
`;

export const StyledUserNameDetails = styled.span`
  display: flex;
  align-items: baseline;
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.blackCoral};

  @media only screen and (max-width: 360px) {
    display: flex;
    align-items: flex-start;
    margin: 0;
  }
`;

export const UserNameText = styled.p`
  // display: flex;
  // align-items: center;
  font-size: 15px;
  font-weight: 400;
`;

export const DotBlock = styled.p`
  font-size: 15px;
  font-weight: 400;
  padding: 0 4px;
`;

// export const DotText = styled.p`
//   align-items: center;
// `;

// export const DateTimeBlock = styled.div`
//   display: flex;
//   align-items: center;
// `;

export const CurrentDateTime = styled.p`
  font-size: 15px;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ViewMore = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  background: transperent;

  &:hover {
    border-radius: 100%;
    color: ${({ theme }) => theme.colors.celestialBlue};
    background: ${({ theme }) => theme.colors.buttonBlue};
    cursor: pointer;
  }
`;

export const TweetDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// export const DescriptionContent = styled.span`
//   display: flex;
//   flex-direction: column;
// `;

export const DescriptionText = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

export const HashTags = styled.span`
  display: flex;
  gap: 5px;

  @media only screen and (max-width: 470px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const HashTagText = styled(Link)`
  color: ${({ theme }) => theme.colors.celestialBlue};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const TweetImageBlock = styled.div`
  // width: 512px;
  // height: 512px;
  display: flex;
  margin-top: 12px;
`;

export const PostImage = styled.img`
  display: flex;
  width: 100%;
  object-fit: cover;
`;

export const HandleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  width: 100%;
`;

// export const StyledHandleBlock = styled.div`
//   display: flex;
// `;

// export const HandleIcon = styled.div`
//   display: flex;
//   align-items: flex-end;
// `;

// export const HandleCounts = styled.div`
//   padding: 0 12px;
// `;
