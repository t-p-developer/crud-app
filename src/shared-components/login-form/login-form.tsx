import { yupResolver } from '@hookform/resolvers/yup';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { buttonConstants, generalConstants } from '../../utils/constants';
import { hasError, hasErrorMessage } from '../../utils/helper-fn';
import { ErrorAlert } from '../error-alert/error-alert';
import { loginFormValidator } from './login-form-validator';
import { Form, FormInputWrapper, SmallOverlay, SmallOverlayContainer } from './styles';

interface ILoginForm {
  handleOnSubmit: React.FormEventHandler<HTMLFormElement>;
  controllerState: {
    error: {
      code: number;
      description: string;
    };
    isLoading: boolean;
  };
}

type FormInputs = {
  username: string;
  password: string;
};

export const LoginForm = ({ handleOnSubmit, controllerState }: ILoginForm) => {
  const { error, isLoading } = controllerState;

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm<FormInputs>({
    resolver: yupResolver(loginFormValidator)
  });

  const watchFields = watch();

  const [toggleAlertBox, setToggleAlertBox] = React.useState(false);

  const closeToggleAlertBox = () => {
    setToggleAlertBox(false);
  };

  const onSubmit = (formData: FormInputs) => {
    // @ts-ignore
    handleOnSubmit(formData);
  };

  React.useEffect(() => {
    if (error && error.code !== 401) {
      setToggleAlertBox(true);
    }
  }, [error]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h3'>{generalConstants.LOG_IN}</Typography>
      <FormInputWrapper>
        {isLoading ? (
          <SmallOverlayContainer>
            <SmallOverlay>
              <CircularProgress />
            </SmallOverlay>
          </SmallOverlayContainer>
        ) : null}
        <Controller
          render={({ field }) => (
            <TextField
              autoFocus
              id='username'
              type='email'
              label='Email'
              sx={{
                width: '100%',
                mb: '25px',
                mt: '25px'
              }}
              error={hasError(errors, 'email')}
              helperText={hasErrorMessage(errors, 'email')}
              size='small'
              variant='standard'
              {...field}
            />
          )}
          name='username'
          control={control}
          defaultValue=''
        />

        <Controller
          render={({ field }) => (
            <TextField
              id='password'
              type='password'
              label='Password'
              sx={{
                mb: '25px',
                width: '100%'
              }}
              error={hasError(errors, 'password')}
              helperText={hasErrorMessage(errors, 'password')}
              size='small'
              variant='standard'
              {...field}
            />
          )}
          name='password'
          control={control}
          defaultValue=''
        />

        {error?.code ? (
          <ErrorAlert error={error} toggleAlertBox={toggleAlertBox} closeToggleAlertBox={closeToggleAlertBox} />
        ) : null}

        <Button
          type='submit'
          disabled={isLoading || !watchFields?.username || !watchFields?.password}
          variant='contained'
          color='primary'
          endIcon={<ArrowForwardOutlinedIcon />}
        >
          {buttonConstants.LOGIN}
        </Button>
      </FormInputWrapper>
    </Form>
  );
};
