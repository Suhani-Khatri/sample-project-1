import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import { FormCheckbox, FormInput } from '../../components/Form';
import {
  ValidateCheckboxValue,
  ValidateConfirmPasswordValue,
  ValidateEmailAddress,
  ValidateFirstName,
  ValidateLastName,
  ValidatePasswordValue,
} from '../../utils/formValidations';

import {
  StyledAccountBlock,
  StyledAstrix,
  StyledBlock,
  StyledButton,
  StyledCard,
  StyledCardHeading,
  StyledCardTitle,
  StyledContainer,
  StyledForm,
  StyledFormItems,
  StyledLabel,
  StyledLoginButton,
  StyledTermsandCondition,
  StyledText,
  StyledWrapper,
} from './SignUpForm.styled';

const SignUpForm = () => {
  const [formData, setFormData] = useState({});
  console.log(formData);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: 'all',
    defaultValues: {},
  });

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledBlock>
          <StyledCard>
            <StyledCardTitle>
              <StyledCardHeading>Admin SignUp</StyledCardHeading>
            </StyledCardTitle>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <StyledFormItems>
                <StyledLabel>
                  First Name
                  <StyledAstrix>*</StyledAstrix>
                </StyledLabel>
                <FormInput
                  type="text"
                  placeholder="Enter Your First Name"
                  name="firstName"
                  control={control}
                  errors={errors}
                  rules={ValidateFirstName}
                />
              </StyledFormItems>
              <StyledFormItems>
                <StyledLabel>
                  Last Name
                  <StyledAstrix>*</StyledAstrix>
                </StyledLabel>
                <FormInput
                  type="text"
                  placeholder="Enter Your Last Name"
                  name="lastName"
                  control={control}
                  errors={errors}
                  rules={ValidateLastName}
                />
              </StyledFormItems>
              <StyledFormItems>
                <StyledLabel>
                  Email
                  <StyledAstrix>*</StyledAstrix>
                </StyledLabel>
                <FormInput
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  control={control}
                  errors={errors}
                  rules={ValidateEmailAddress}
                />
              </StyledFormItems>
              <StyledFormItems>
                <StyledLabel>
                  Password
                  <StyledAstrix>*</StyledAstrix>
                </StyledLabel>
                <FormInput
                  type="text"
                  placeholder="Enter Your Password"
                  name="password"
                  control={control}
                  errors={errors}
                  rules={ValidatePasswordValue}
                />
              </StyledFormItems>
              <StyledFormItems>
                <StyledLabel>
                  Confirm Password
                  <StyledAstrix>*</StyledAstrix>
                </StyledLabel>
                <FormInput
                  type="text"
                  placeholder="Enter Valid Password"
                  name="confirmPassword"
                  control={control}
                  errors={errors}
                  rules={ValidateConfirmPasswordValue}
                />
              </StyledFormItems>

              <StyledTermsandCondition>
                <FormCheckbox
                  type="checkbox"
                  name="checkbox"
                  control={control}
                  errors={errors}
                  rules={ValidateCheckboxValue}
                />
                <StyledText>I accept Terms and Conditions</StyledText>
              </StyledTermsandCondition>
              <StyledLoginButton type="submit">Submit</StyledLoginButton>
            </StyledForm>
            <StyledAccountBlock>
              <StyledButton>Create Account</StyledButton>
            </StyledAccountBlock>
          </StyledCard>
        </StyledBlock>
        {formData && (
          <div>
            <p>
              Form Data:
              {JSON.stringify(formData)}
            </p>
            <h2>Form Data:</h2>
            {Object.keys(formData).map((keys) => (
              <p key={keys}>
                {keys}: {JSON.stringify(formData[keys])}
              </p>
            ))}
          </div>
        )}
      </StyledContainer>
    </StyledWrapper>
  );
};

export default SignUpForm;
