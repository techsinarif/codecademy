import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../../axios';

const registerApiUrl = '/api/auth/register';

const registerUserInApp = (user) => {
  axios.post(registerApiUrl, user, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    console.log('data posted to url')
  }).catch((error) => {
    throw error;
  })
}

function* registerUser(action) {
  try{
    const user = yield call(registerUserInApp(action.payload));
    yield put({ type: 'REGISTER_USER_SUCCESS', user: user})
  } catch (e) {
    yield put({type: 'REGISTER_USER_FAILED', message: e.msg})
  }
}

function* userSaga(){
  yield takeEvery('REGISTER_USER', registerUser);
}

export default userSaga;