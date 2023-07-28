import React from 'react';

import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

// import FormFieldError from './FormFieldError';

// import { getFieldError } from '#/utils/formValidations';
import { StyledInput } from '../../modules/SignUp/SignUpForm.styled';

import FormFieldError from './FormFieldError';

const FormCheckbox = ({ control, checked, type, name, defaultValue, placeholder = '', errors, ...rest }) => {
  // console.log({ errors });
  const error = errors?.[name];
  // const { error, color } = getFieldError({ name, ...rest });

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

FormCheckbox.prototype = {
  control: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
};

export default FormCheckbox;
