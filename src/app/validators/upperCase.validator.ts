export const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

import { AbstractControl, ValidationErrors } from '@angular/forms';

// uppercase only validator
export function upperCaseValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  const isAllUppercase = value === value.toUpperCase();
  return isAllUppercase ? null : { nouppercase: true };
}

// noOnlySpaces validator
export function noOnlySpacesValidator(
  control: AbstractControl
): ValidationErrors | null {
  return control.value.trim() === '' ? { noonlySpace: true } : null;
}

// password validator
export function strongPasswordValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;

  // Define the criteria for a strong password
  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  const isValidLength = value && value.length >= 8;

  // Combine all the checks
  const passwordValid =
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar &&
    isValidLength;

  // Return null if valid, otherwise return an object with error details
  return passwordValid
    ? null
    : {
        strongPassword: {
          hasUppercase,
          hasLowercase,
          hasNumber,
          hasSpecialChar,
          isValidLength,
        },
      };
}
