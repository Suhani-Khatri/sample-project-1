export const EMAIL_PATTERN =
  /^[\d\w]+[-._+]{0,1}([\d\w]+|[-._+]{0,1})?[\d\w+]+([^\W-._+]+)@([\w\d]+)((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;

export const PASSWORD_PATTERN = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;

export const PASSWORD_UPPERCASE_CHARACTER = /[A-Z]+/g;

export const PASSWORD_LOWERCASE_CHARACTER = /[a-z]+/g;

export const PASSWORD_NUMBER = /[\d]+/g;

export const PASSWORD_SPECIAL_CHARACTER = /[!@#$%^&*)(+=._-]+/g;

export const NAME_SPECIAL_CHARACTER = /[!@#$%^&*)(+=._-]+/g;

export const ALPHABET_PATTERN = /^[a-zA-Z]*$/;

export const MOBILE_NUMBER = /^\d{10}$/;

export const BLANK_SPACE = /\s/;

export const USER_NAME = /^(?=^.{1,30}$)[0-9a-zA-Z-_.]+$/;

export const EMAIL_OR_NUMBER =
  /^[\d\w]+[-._+]{0,1}([\d\w]+|[-._+]{0,1})?[\d\w+]+([^\W-._+]+)@([\w\d]+)((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$|^\d{10}$/;

export const PLATFORM_FEES_NUMBER_VALIDATION = /^(0|[1-9][0-9]?|100)$/;
