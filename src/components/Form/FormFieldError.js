import React from 'react';

import PropTypes from 'prop-types';
// import { useTheme } from 'styled-components';

import { StyledFieldError } from './Form.styled';

const FormFieldError = ({ align, error, children, size, position }) => {
  // const theme = useTheme();
  // console.log(theme);
  // console.log(error);

  return <StyledFieldError align={align}>{error?.message}</StyledFieldError>;
};

FormFieldError.defaultProps = {
  align: 'left',
  size: 'xsmall',
  position: 'relative',
  children: null,
};

FormFieldError.propTypes = {
  align: PropTypes.string,
  size: PropTypes.string,
  position: PropTypes.string,
  error: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default FormFieldError;
