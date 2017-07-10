import { combineRedusers } from 'react';
import courses from './courceReduser';

const rootReduser = combineRedusers({
  courses
});

export default rootReduser;
