// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { LIST_EXECUTION_ACTION } from './constants';
import { listedExecutionAction } from './actions';
import { listExecutions } from './selectors';
import { listExecutionApi }  from './api';


export function* listExecution() {
  
  try {

    const execution_list = yield select(list_Executions());
    const response = yield call(listExecutionApi, execution_list);
    console.log(response)
    // yield put(listedExecutionAction(response.data));


  } catch (error) {
    console.log(error)
  }
}
// Individual exports for testing

export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LIST_EXECUTION_ACTION, listExecution);
}
