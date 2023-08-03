import React from 'react';

import { BiSolidHomeCircle } from 'react-icons/bi';
import { CiCircleMore } from 'react-icons/ci';
import { FiSearch } from 'react-icons/fi';
import { GrNotification } from 'react-icons/gr';
import { HiOutlineUser, HiUsers } from 'react-icons/hi';
import { MdOutlineVerified } from 'react-icons/md';
import { RiFileListLine } from 'react-icons/ri';
import { SlEnvolope } from 'react-icons/sl';

export const SIDEBAR_DETAILS = [
  { icons: <BiSolidHomeCircle size={24} />, text: 'Home' },
  { icons: <FiSearch size={24} />, text: 'Explore' },
  { icons: <GrNotification size={24} />, text: 'Notifications' },
  { icons: <SlEnvolope size={24} />, text: 'Messages' },
  { icons: <RiFileListLine size={24} />, text: 'List' },
  { icons: <HiUsers size={24} />, text: 'Communities' },
  { icons: <MdOutlineVerified size={24} />, text: 'Verified' },
  { icons: <HiOutlineUser size={24} />, text: 'Profile' },
  { icons: <CiCircleMore size={24} />, text: 'More' },
];
