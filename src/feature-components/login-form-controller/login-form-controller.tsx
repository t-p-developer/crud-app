import * as React from 'react';

import { usePortingTime } from '../../adapters/user/user';
import { LoginForm } from '../../shared-components/login-form/login-form';
import { normalizeResponse } from '../../utils/helper-fn';

export const LoginFormController = () => {
  const { isLoading, error, mutateAsync } = normalizeResponse(usePortingTime());

  const handleOnSubmit = async (formValues: any) => {
    await mutateAsync(formValues);
  };

  const controllerState = {
    isLoading,
    error
  };

  return <LoginForm handleOnSubmit={handleOnSubmit} controllerState={controllerState} />;
};
