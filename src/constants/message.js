export const EMAIL_FIELD_VALIDATION = {
  REQUIRED: `Email is required`,
  EMPTY: `Email is required`,
  INVALID: `Please enter valid email`,
  ALREADY_EXISTS: `Email already exists, Please enter another email`,
  MAX_LENGTH: `Email cannot be more than 50 characters`,
};

export const PASSWORD_FIELD_VALIDATION = {
  REQUIRED: `Password is required`,
  EMPTY: `Password is required.`,
  INVALID: `Invalid credentials`,
  DOESNT_MATCH: `Password does not match`,
  MIN_LENGTH: `Your password must have at least 8 characters.`,
  MAX_LENGTH: `Your password must not have more than 20 characters`,
  REQUIRE_UPPERCASE_CHARACTER: `Password must have at least uppercase`,
  REQUIRE_LOWERCASE_CHARACTER: `Password must have at least lowercase`,
  REQUIRE_NUMBER: `Password must have  numeric Values`,
  REQUIRE_SPECIAL_CHARACTER: `Password must have at least uppercase, lowercase, numeric, special character and should be 8 Character Long`,
  NO_SPACE: `Blank space is not allowed`,
  CONFIRM: `Confirm password is required`,
  RE_ENTER_PASSWORD: `Please re-enter your password here`,
  INVALID_PASSWORD: `Please enter your registered password`,
  CONFIRM_PASSWORD_NOT_MATCHING: `Your inputs for password and confirm password doesn’t match`,
};

export const TERMS_AND_CONDITIONS_REQUIRED = `Please accept terms and privacy policy`;

export const FIRSTNAME_FIELD_VALIDATION = {
  REQUIRED: 'FirstName is required',
  EMPTY: 'FirstName is required',
  INVALID: `Please enter only alphabetic characters`,
  MIN_LENGTH: `Minimum 3 characters required`,
  MAX_LENGTH: `Email cannot be more than 50 characters`,
  SPECIAL_CHARACTER_NOT_ALLOWED: `Special Character not allowed`,
};

export const LASTNAME_FIELD_VALIDATION = {
  REQUIRED: 'LastName is required',
  EMPTY: 'LastName is required',
  INVALID: `Please enter only alphabetic characters`,
  MIN_LENGTH: `Minimum 3 characters required`,
  MAX_LENGTH: `LastName cannot be more than 50 characters`,
};
