import React from 'react';

import { Typography } from 'antd';
import styled from 'styled-components';

// eslint-disable-next-line import/no-cycle

export const StyledFieldError = styled(({ ...props }) => <Typography mt={0.8} type="span" {...props} />)`
  display: block;
  color: ${({ theme }) => theme.colors.red};

  ${({ position }) => position && `position: ${position};`}
`;
