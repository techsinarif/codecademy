import * as type from '../types';

const registerUser = (user) => {
  return {
    type: type.REGISTER_USER,
    payload: user,
  }
}

export default registerUser;