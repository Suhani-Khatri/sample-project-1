import React from 'react';

import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { LuShare } from 'react-icons/lu';
import { RiBarChartGroupedLine } from 'react-icons/ri';

export const SOCIAL_MEDIA_HANDLE = [
  {
    icon: <FaRegComment size={18} />,
    title: 'Reply',
    count: '4,085',
    background: 'buttonBlue',
    color: 'celestialBlue',
  },
  {
    icon: <FaRetweet size={18} />,
    title: 'Retweet',
    count: '3,561',
    background: 'teaGreen',
    color: 'olivine',
  },
  {
    icon: <AiOutlineHeart size={18} />,
    title: 'Like',
    count: '14.3K',
    background: 'lavenderBlush',
    color: 'middlePurple',
  },
  {
    icon: <RiBarChartGroupedLine size={18} />,
    title: 'View',
    count: '1.5M',
    background: 'buttonBlue',
    color: 'celestialBlue',
  },
  { icon: <LuShare size={18} />, title: 'Share', background: 'buttonBlue', color: 'celestialBlue' },
];
