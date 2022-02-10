import axios from 'axios';

const defaults = {
  baseURL: process.env.API_URL || '',
  fatal: {
    message: {
      success: false,
      description: '',
      data: [],
      type: 'fatalError'
    },
    fatalError: {
      code: 500,
      description: 'Something went wrong. Please check your internet connection or contact our support.',
      apiResponse: {}
    }
  }
};

const api = (method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, variables: { [key: string]: any }) => {
  const { CancelToken } = axios;

  const source = CancelToken.source();

  return new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      withCredentials: true,
      params: method === 'GET' ? variables : undefined,
      data: method !== 'GET' ? variables : undefined,
      cancelToken: source.token
    }).then(
      (response) => {
        if (response.data.message.success === true) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      },
      (error) => {
        if (error.response) {
          reject(error.response.data);
        } else {
          defaults.fatal.fatalError.apiResponse = error;
          reject(defaults.fatal);
        }
      }
    );
  });
};

// @ts-ignore
export const getData = (...args: any[]) => api('get', ...args);
// @ts-ignore
export const postData = (...args: any[]) => api('post', ...args);
