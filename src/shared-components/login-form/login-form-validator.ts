import * as yup from 'yup';

import { yupConstants } from '../../utils/constants';

export const loginFormValidator = yup.object().shape({
  username: yup.string().email(yupConstants.INVALID_EMAIL).required(yupConstants.EMAIL_IS_REQUIRED),
  password: yup.string().required(yupConstants.PASSWORD_IS_REQUIRED).min(6, yupConstants.PASSWORD_MIN_LENGTH)
});
