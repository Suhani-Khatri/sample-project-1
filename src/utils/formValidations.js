import {
  EMAIL_FIELD_VALIDATION,
  FIRSTNAME_FIELD_VALIDATION,
  LASTNAME_FIELD_VALIDATION,
  PASSWORD_FIELD_VALIDATION,
  TERMS_AND_CONDITIONS_REQUIRED,
} from '../constants/message';
import { ALPHABET_PATTERN, EMAIL_PATTERN } from '../constants/patterns';

// export const getFieldError = ({ error, errors, name }) => {
//   const newError = error && error.message;
//   // (errors && lodashGet(errors, name) && lodashGet(errors, name).message);
//   const color = newError && 'error';

//   return { error: newError, color };
// };

export const ValidateFirstName = {
  required: {
    value: true,
    message: FIRSTNAME_FIELD_VALIDATION.REQUIRED,
  },
  minLength: {
    value: 3,
    message: FIRSTNAME_FIELD_VALIDATION.MIN_LENGTH,
  },
  maxLength: {
    value: 50,
    message: FIRSTNAME_FIELD_VALIDATION.MAX_LENGTH,
  },
  validate: {
    checkRegex: (firstName) => {
      const isValid = ALPHABET_PATTERN.test(firstName);

      if (!isValid) {
        return FIRSTNAME_FIELD_VALIDATION.INVALID;
      }

      return null;
    },
    checkSpecialCharacter: (firstName) => {
      console.log(firstName);
      const isInvalid = /[!@#$%^&*)(+=._-]+/g.test(firstName);

      if (isInvalid) {
        return FIRSTNAME_FIELD_VALIDATION.SPECIAL_CHARACTER_NOT_ALLOWED;
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
  maxLength: {
    value: 50,
    message: LASTNAME_FIELD_VALIDATION.MAX_LENGTH,
  },
  validate: {
    checkRegex: (lastName) => {
      const isValid = ALPHABET_PATTERN.test(lastName);

      if (!isValid) {
        return LASTNAME_FIELD_VALIDATION.INVALID;
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
    checkAlreadyExists: (email, formValues) => {
      const isInValid = email === formValues.password;

      if (isInValid) {
        return EMAIL_FIELD_VALIDATION.ALREADY_EXISTS;
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

      if (!isInvalid) {
        return PASSWORD_FIELD_VALIDATION.MIN_LENGTH;
      }

      return null;
    },
    checkLowerCharacter: (password) => {
      const isInvalid = /[a-z]+/g.test(password);

      if (!isInvalid) {
        return PASSWORD_FIELD_VALIDATION.REQUIRE_LOWERCASE_CHARACTER;
      }

      return null;
    },
    checkUpperCharacter: (password) => {
      const isInvalid = /[A-Z]+/g.test(password);

      if (!isInvalid) {
        return PASSWORD_FIELD_VALIDATION.REQUIRE_UPPERCASE_CHARACTER;
      }

      return null;
    },
    checkRequiredNumber: (password) => {
      const isInvalid = /[0-9]+/g.test(password);

      if (!isInvalid) {
        return PASSWORD_FIELD_VALIDATION.REQUIRE_NUMBER;
      }

      return null;
    },
    checkSpecialNumber: (password) => {
      const isInvalid = /[!@#$%^&*)(+=._-]+/g.test(password);

      if (!isInvalid) {
        return PASSWORD_FIELD_VALIDATION.REQUIRE_SPECIAL_CHARACTER;
      }

      return null;
    },
  },
};

export const ValidateConfirmPasswordValue = {
  required: {
    value: true,
    message: PASSWORD_FIELD_VALIDATION.REQUIRED,
  },
  validate: {
    checkIsSame: (confirmPassword, formValues) => {
      const isValid = formValues.password === confirmPassword;

      if (!isValid) {
        return PASSWORD_FIELD_VALIDATION.CONFIRM_PASSWORD_NOT_MATCHING;
      }

      return null;
    },
  },
};

export const ValidateCheckboxValue = {
  validate: {
    checkIsChecked: (checkbox) => {
      const isChecked = checkbox;

      if (!isChecked) {
        return TERMS_AND_CONDITIONS_REQUIRED;
      }

      return null;
    },
  },
};
