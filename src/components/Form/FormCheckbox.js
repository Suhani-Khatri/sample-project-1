import React from 'react';

import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { StyledInput } from '../../modules/SignUp/SignUpForm.styled';

import FormFieldError from './FormFieldError';

const FormCheckbox = ({ control, checked, type, name, defaultValue, placeholder = '', errors, ...rest }) => {
  const error = errors?.[name];

  return (
    <>
      <Controller
        control={control}
        render={({ field }) => {
          return <StyledInput type={type} placeholder={placeholder} checked={field.value} {...field} />;
        }}
        name={name}
        defaultValue={defaultValue || ''}
        {...rest}
      />
      {error && <FormFieldError error={error} {...rest} />}
    </>
  );
};

FormCheckbox.propTypes = {
  control: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
};

export default FormCheckbox;
