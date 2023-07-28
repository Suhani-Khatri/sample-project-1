import {
  EMAIL_FIELD_VALIDATION,
  FIRSTNAME_FIELD_VALIDATION,
  LASTNAME_FIELD_VALIDATION,
  PASSWORD_FIELD_VALIDATION,
  TERMS_AND_CONDITIONS_REQUIRED,
} from '../constants/message';
import {
  ALPHABET_PATTERN,
  BLANK_SPACE,
  EMAIL_PATTERN,
  MIN_LENGTH,
  ONLY_NUMBER,
  PASSWORD_LOWERCASE_CHARACTER,
  PASSWORD_SPECIAL_CHARACTER,
  PASSWORD_UPPERCASE_CHARACTER,
} from '../constants/patterns';

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
    checkAlphabetCharacters: (firstName) => {
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
  maxLength: {
    value: 50,
    message: LASTNAME_FIELD_VALIDATION.MAX_LENGTH,
  },
  validate: {
    checkAlphabetCharacters: (lastName) => {
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
    checkAlphabetCharacters: (email) => {
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
  maxLength: {
    value: 20,
    message: PASSWORD_FIELD_VALIDATION.MAX_LENGTH,
  },
  validate: {
    checkSpace: (password) => {
      const isInvalid = BLANK_SPACE.test(password);

      if (isInvalid) {
        return PASSWORD_FIELD_VALIDATION.NO_SPACE;
      }

      return null;
    },
    checkUpperCharacter: (password) => {
      const isInvalid = PASSWORD_UPPERCASE_CHARACTER.test(password);

      if (!isInvalid) {
        return PASSWORD_FIELD_VALIDATION.REQUIRE_UPPERCASE_CHARACTER;
      }

      return null;
    },
    checkLowerCharacter: (password) => {
      const isInvalid = PASSWORD_LOWERCASE_CHARACTER.test(password);

      if (!isInvalid) {
        return PASSWORD_FIELD_VALIDATION.REQUIRE_LOWERCASE_CHARACTER;
      }

      return null;
    },
    checkRequiredNumber: (password) => {
      const isInvalid = ONLY_NUMBER.test(password);

      if (!isInvalid) {
        return PASSWORD_FIELD_VALIDATION.REQUIRE_NUMBER;
      }

      return null;
    },
    checkSpecialNumber: (password) => {
      const isInvalid = PASSWORD_SPECIAL_CHARACTER.test(password);

      if (!isInvalid) {
        return PASSWORD_FIELD_VALIDATION.REQUIRE_SPECIAL_CHARACTER;
      }

      return null;
    },
    checkMinLength: (password) => {
      const isInvalid = MIN_LENGTH.test(password);

      if (!isInvalid) {
        return PASSWORD_FIELD_VALIDATION.MIN_LENGTH;
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
      // const isValid = confirmPassword === formValues.password;
      // console.log(`formvalues${formValues}`);

      if (confirmPassword !== formValues.password) {
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
