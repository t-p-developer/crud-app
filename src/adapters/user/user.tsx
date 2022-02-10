import { useQuery } from 'react-query';

import { versionConstants } from '../../utils/constants';
import { getData } from '../api/api';

export const useUser = () =>
  useQuery(`${versionConstants.USER}`, () => getData(`${versionConstants.USER}`), {
    retry: false,
    refetchOnWindowFocus: false
  });
