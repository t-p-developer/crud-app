import { useMutation } from 'react-query';

import { versionConstants } from '../../utils/constants';
import { postData } from '../api/api';

export const usePortingTime = () => useMutation((newData) => postData(`${versionConstants.LOGIN}`, newData));
