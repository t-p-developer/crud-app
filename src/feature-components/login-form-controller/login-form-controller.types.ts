interface SuccessResponse {
  message: {
    success: boolean;
    description: '';
    data: Array<string>;
    type: '';
  };
}

interface Error {
  code: number;
  description: string;
}

export type State = {
  data: SuccessResponse | null;
  isLoading: boolean;
  error: Error | null;
};

export type Action =
  | { type: 'LOADING' }
  | { type: 'RESET' }
  | { type: 'SUCCESS'; payload: SuccessResponse }
  | { type: 'ERROR'; payload: Error };

export interface IContext {
  data: SuccessResponse | null;
  isLoading: boolean;
  error: Error | null;
  // eslint-disable-next-line no-unused-vars
  handleOnSubmit: ({ username, password }: { username: string; password: string }) => Promise<void>;
  handleLogOut: () => Promise<void>;
}
