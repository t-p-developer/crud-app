import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { getData, postData } from '../../adapters/api/api';
import { versionConstants } from '../../utils/constants';
import { Action, IContext, State } from './login-form-controller.types';

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
  isLoading: true,
  error: null
};

const LoginContext = React.createContext<IContext>({
  data: null,
  isLoading: true,
  error: null,
  handleOnSubmit: (arg: any) => Promise.resolve(arg),
  handleLogOut: () => Promise.resolve()
});
LoginContext.displayName = 'LoginContext';

const LoginControllerProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const [{ isLoading, error, data }, dispatch] = React.useReducer(fetchReducer, initialState);

  const handleOnSubmit = async ({ username, password }: { username: string; password: string }) => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await postData(`${versionConstants.LOGIN}`, { username, password });
      // @ts-ignore
      dispatch({ type: 'SUCCESS', payload: response });
    } catch (errorResponse) {
      // @ts-ignore
      dispatch({ type: 'ERROR', payload: errorResponse?.[errorResponse?.message?.type] });
    }
  };

  const handleLogOut = async () => {
    dispatch({ type: 'LOADING' });
    try {
      await postData(`${versionConstants.LOGOUT}`);
    } catch (errorResponse) {
      dispatch({ type: 'RESET' });
    } finally {
      dispatch({ type: 'RESET' });
      if (data) {
        navigate('/');
      } else {
        window.location.replace('/');
      }
    }
  };

  React.useEffect(() => {
    dispatch({ type: 'LOADING' });
    const checkLogin = async () => {
      try {
        const response = await getData(`${versionConstants.USER}`);
        // @ts-ignore
        dispatch({ type: 'SUCCESS', payload: response });
      } catch (errorResponse) {
        // @ts-ignore
        dispatch({ type: 'ERROR', payload: errorResponse?.[errorResponse?.message?.type] });
      }
    };
    checkLogin();
  }, []);

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
