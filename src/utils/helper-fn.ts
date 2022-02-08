import * as R from 'ramda';
import { FieldErrors } from 'react-hook-form';

export const hasError = (errorObject: FieldErrors | undefined, errorField: string): boolean => {
  if (!R.isEmpty(errorObject)) {
    return !!errorObject?.[errorField];
  }
  return false;
};

export const hasErrorMessage = (errorObject: FieldErrors | undefined, errorField: string): boolean => {
  if (!R.isEmpty(errorObject)) {
    return !!errorObject?.[errorField] && errorObject?.[errorField]?.message;
  }
  return false;
};
