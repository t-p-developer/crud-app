import * as React from 'react';

import { postData } from '../../adapters/api/api';
import { versionConstants } from '../../utils/constants';

interface SuccessResponse {
  message: {
    success: boolean;
    description: '';
    data: Array<string>;
    type: '';
  };
}

interface Error {
  message: {
    success: boolean;
    description: string;
    data: Array<string>;
    type: 'error';
  };
  error: {
    code: number;
    description: string;
  };
}

type State = {
  data: SuccessResponse | null;
  isLoading: boolean;
  error: Error | null;
};

type Action =
  | { type: 'LOADING' }
  | { type: 'RESET' }
  | { type: 'SUCCESS'; payload: SuccessResponse }
  | { type: 'ERROR'; payload: Error };

export const fetchReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'SUCCESS':
      return {
        data: action.payload,
        error: null,
        isLoading: false
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case 'RESET':
      return {
        data: null,
        error: null,
        isLoading: false
      };
    default:
      return state;
  }
};

const initialState: State = {
  data: null,
  isLoading: false,
  error: null
};

const LoginContext = React.createContext({});
LoginContext.displayName = 'LoginContext';

const LoginControllerProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ isLoading, error, data }, dispatch] = React.useReducer(fetchReducer, initialState);

  const handleOnSubmit = async (formValues: { formValues: { userName: string; password: string } }) => {
    try {
      const response = await postData(`${versionConstants.LOGIN}`, formValues);
      // @ts-ignore
      dispatch({ type: 'SUCCESS', payload: response });
    } catch (errorResponse) {
      // @ts-ignore
      dispatch({ type: 'ERROR', payload: errorResponse?.error });
    }
  };

  const handleLogOut = async () => {
    dispatch({ type: 'LOADING' });
    try {
      await postData(`${versionConstants.LOGOUT}`);
      dispatch({ type: 'RESET' });
    } catch (errorResponse) {
      dispatch({ type: 'RESET' });
    }
  };

  return (
    <LoginContext.Provider
      value={{
        isLoading,
        error,
        data,
        handleOnSubmit,
        handleLogOut
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

const useLoginContext = () => {
  const context = React.useContext(LoginContext);

  if (context === undefined) {
    throw new Error('It can be used only with a LoginControllerProvider');
  }

  return context;
};

export { LoginControllerProvider, useLoginContext };
