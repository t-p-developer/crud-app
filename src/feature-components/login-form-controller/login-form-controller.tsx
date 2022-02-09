import * as React from 'react';

import { useLogin } from '../../adapters/user/user';
import { LoginForm } from '../../shared-components/login-form/login-form';
import { normalizeResponse } from '../../utils/helper-fn';

export const LoginFormController = () => {
  const { isLoading, mutateAsync } = normalizeResponse(useLogin());

  const [errorResponse, setErrorResponse] = React.useState(null);

  const [dataResponse, setDataResponse] = React.useState(null);

  const handleOnSubmit = async (formValues: any) => {
    try {
      const response = await mutateAsync(formValues);
      setDataResponse(response);
    } catch (error) {
      // @ts-ignore
      setErrorResponse(error);
    }
  };

  React.useEffect(() => {
    if (dataResponse) {
      window.location.reload();
    }
  }, [dataResponse]);

  // @ts-ignore
  const controllerState = {
    isLoading,
    // @ts-ignore
    error: errorResponse?.[errorResponse?.message?.type]
  };
  // @ts-ignore
  return <LoginForm handleOnSubmit={handleOnSubmit} controllerState={controllerState} />;
};
