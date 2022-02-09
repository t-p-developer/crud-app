import { useMutation, useQuery } from 'react-query';

import { versionConstants } from '../../utils/constants';
import { getData, postData } from '../api/api';

export const useLogin = () => useMutation((newData) => postData(`${versionConstants.LOGIN}`, newData));

export const useUser = () =>
  useQuery(`${versionConstants.USER}`, () => getData(`${versionConstants.USER}`), { retry: false });
