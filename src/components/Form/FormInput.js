import React from 'react';

import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
// import FormFieldError from './FormFieldError';

// import { getFieldError } from '#/utils/formValidations';
import { StyledInput } from '../../modules/SignUp/SignUpForm.styled';

import FormFieldError from './FormFieldError';

const FormInput = ({ control, color, name, type, placeholder = '', errors, ...rest }) => {
  const error = errors?.[name];

  return (
    <>
      <Controller
        control={control}
        render={({ field }) => {
          return <StyledInput type={type} name={name} errors={error} placeholder={placeholder} {...field} />;
        }}
        name={name}
        color={color}
        // defaultValue={defaultValue || ''}
        {...rest}
      />
      {error && <FormFieldError error={error} {...rest} />}
    </>
  );
};

FormInput.propTypes = {
  control: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
};

export default FormInput;
