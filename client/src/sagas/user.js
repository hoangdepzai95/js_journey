import { takeLatest } from 'redux-saga';
import { fork, call } from 'redux-saga/effects';
import Api from '../api';
import { REGISTER } from '../actions/user';

function* register(action) {
	try {
		const response = yield call (Api.register, action.username, action.password);
		console.log(response);
	} catch (err) {
		console.log(err);
	}
}

function* watchResetPassword (){
	yield takeLatest(REGISTER, register);
}

export function* user(){
	yield fork(watchResetPassword);
};
