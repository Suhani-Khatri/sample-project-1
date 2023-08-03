import React from 'react';

import { BsThreeDots } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';

import SocialMediaHandles from '../SocialMediaHandles';

import {
  CurrentDateTime,
  DescriptionText,
  DotBlock,
  HandleWrapper,
  HashTagText,
  HashTags,
  PostImage,
  ProfileAvatar,
  StyledBlueTick,
  StyledInnerContainer,
  StyledMainUserNames,
  StyledProfileContainer,
  StyledTweetContainer,
  StyledTweetContent,
  StyledTweetWrapper,
  StyledUserInfo,
  StyledUserNameDetails,
  StyledUserProfile,
  TweetDescription,
  TweetImageBlock,
  UserInfoBlock,
  UserName,
  UserNameText,
  ViewMore,
} from './Tweets.styled';

import ModiPost from '#/assets/images/ModiPost.jpeg';
import indiaTvLogo from '#/assets/images/indiaTvLogo.jpeg';
import { SOCIAL_MEDIA_HANDLE } from '#/constants/SocialMediaHandles';

const Tweets = () => {
  return (
    <StyledTweetWrapper>
      <StyledTweetContainer>
        <StyledInnerContainer>
          <StyledProfileContainer>
            <StyledUserProfile>
              <ProfileAvatar src={indiaTvLogo} />
            </StyledUserProfile>
          </StyledProfileContainer>
          <StyledTweetContent>
            <StyledUserInfo>
              <UserInfoBlock>
                <StyledMainUserNames>
                  <UserName>India TV</UserName>
                  <StyledBlueTick>
                    <MdVerified size={18} color="blue" />
                  </StyledBlueTick>
                </StyledMainUserNames>
                <StyledUserNameDetails>
                  <UserNameText>@indiatvnews</UserNameText>
                  <DotBlock>.</DotBlock>
                  <CurrentDateTime title="Jul 30, 2023">Jul30</CurrentDateTime>
                </StyledUserNameDetails>
              </UserInfoBlock>
              <ViewMore>
                <BsThreeDots />
              </ViewMore>
            </StyledUserInfo>
            <TweetDescription>
              <DescriptionText>
                भारत और वेस्ट इंडीज के बीच तीसरा वनडे आज.. पोर्ट ऑफ स्पेन में शाम 7 बजे से शुरू होगा मुकाबला.. सीरीज में
                दोनों टीमें 1-1 की बराबरी पर हैं.. आज जीतने वाली टीम सीरीज पर करेगी कब्जा
              </DescriptionText>
              <HashTags>
                <HashTagText to="#">#NuhVoilence</HashTagText>
                <HashTagText to="#">#Mewat </HashTagText>
                <HashTagText to="#">#StonePelting </HashTagText>
                <HashTagText to="#">#HaryanaPolice </HashTagText>
              </HashTags>
            </TweetDescription>
            <TweetImageBlock>
              <PostImage src={ModiPost} />
            </TweetImageBlock>
            <HandleWrapper>
              {SOCIAL_MEDIA_HANDLE.map(({ icon, count, title, background, color, size }) => (
                <SocialMediaHandles
                  key={icon}
                  icon={icon}
                  count={count}
                  title={title}
                  background={background}
                  color={color}
                  size={size}
                />
              ))}
            </HandleWrapper>
          </StyledTweetContent>
        </StyledInnerContainer>
      </StyledTweetContainer>
    </StyledTweetWrapper>
  );
};

export default Tweets;
