import {
  EMAIL_FIELD_VALIDATION,
  FIRSTNAME_FIELD_VALIDATION,
  LASTNAME_FIELD_VALIDATION,
  PASSWORD_FIELD_VALIDATION,
} from '../constants/message';

import { ALPHABET_PATTERN, EMAIL_PATTERN } from '../constants/patterns';

export const getFieldError = ({ error, errors, name }) => {
  const newError = error && error.message;
  // (errors && lodashGet(errors, name) && lodashGet(errors, name).message);
  const color = newError && 'error';

  return { error: newError, color };
};

export const ValidateFirstName = {
  required: {
    value: true,
    message: FIRSTNAME_FIELD_VALIDATION.REQUIRED,
  },
  minLength: {
    value: 3,
    message: FIRSTNAME_FIELD_VALIDATION.MIN_LENGTH,
  },
  validate: {
    checkRegex: (firstName) => {
      const isValid = ALPHABET_PATTERN.test(firstName);

      if (!isValid) {
        return FIRSTNAME_FIELD_VALIDATION.INVALID;
      }

      return null;
    },
  },
};

export const ValidateLastName = {
  required: {
    value: true,
    message: LASTNAME_FIELD_VALIDATION.REQUIRED,
  },
  minLength: {
    value: 3,
    message: LASTNAME_FIELD_VALIDATION.MIN_LENGTH,
  },
  validate: {
    checkRegex: (firstName) => {
      const isValid = ALPHABET_PATTERN.test(firstName);

      if (!isValid) {
        return FIRSTNAME_FIELD_VALIDATION.INVALID;
      }

      return null;
    },
  },
};

export const ValidateEmailAddress = {
  required: {
    value: true,
    message: EMAIL_FIELD_VALIDATION.REQUIRED,
  },
  maxLength: {
    value: 50,
    message: EMAIL_FIELD_VALIDATION.MAX_LENGTH,
  },
  validate: {
    checkRegex: (email) => {
      const isValid = EMAIL_PATTERN.test(email);

      if (!isValid) {
        return EMAIL_FIELD_VALIDATION.INVALID;
      }

      return null;
    },
  },
};

export const ValidatePasswordValue = {
  required: {
    value: true,
    message: PASSWORD_FIELD_VALIDATION.REQUIRED,
  },
  validate: {
    checkSpace: (password) => {
      const isInvalid = /[\s]+/g.test(password);

      if (isInvalid) {
        return PASSWORD_FIELD_VALIDATION.NO_SPACE;
      }

      return null;
    },
    checkMinLength: (password) => {
      const isInvalid = /.{8,}/g.test(password);

      if (isInvalid) {
        return PASSWORD_FIELD_VALIDATION.MIN_LENGTH;
      }

      return null;
    },
    checkLowerCharacter: (password) => {
      const isInvalid = /[a-z]+/g.test(password);

      if (isInvalid) {
        return PASSWORD_FIELD_VALIDATION.REQUIRE_LOWERCASE_CHARACTER;
      }

      return null;
    },
    checkUpperCharacter: (password) => {
      const isInvalid = /[A-Z]+/g.test(password);

      if (isInvalid) {
        return PASSWORD_FIELD_VALIDATION.REQUIRE_UPPERCASE_CHARACTER;
      }

      return null;
    },
    checkRequiredNumber: (password) => {
      const isInvalid = /[0-9]+/g.test(password);

      if (isInvalid) {
        return PASSWORD_FIELD_VALIDATION.REQUIRE_NUMBER;
      }

      return null;
    },
    checkSpecialNumber: (password) => {
      const isInvalid = /[!@#$%^&*)(+=._-]+/g.test(password);

      if (isInvalid) {
        return PASSWORD_FIELD_VALIDATION.REQUIRE_SPECIAL_CHARACTER;
      }

      return null;
    },
  },
};
