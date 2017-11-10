import { put, call, takeEvery, takeLatest, fork, select, all } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../actions/invoice'
import { stringify } from 'qs'

var instance = axios.create({
  baseURL: 'http://behnam.ninja/api',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
});


function sendData(Data){
  return instance({
    method: 'post',
    url: '/index.php',
    data: stringify(Data),
  })
  .then(({ data }) => data);
}


function allInvoiceApi(Data){
  return instance({
    method: 'post',
    url: '/all_invocies.php',
    data: stringify(Data),
  })
  .then(({ data }) => data);
}


export function* fetchInvoiceItems(action) {
  try {
    const response = yield call( allInvoiceApi, {});
    console.log(response.status);
    
    yield put(actions.addInvoiceList( response ));
  } catch(e) {
    yield console.log('error',e);
  }
}

export function* saveInvoiceItem(action) {
  try {
    const response = yield call( sendData, {
      invoiceTitle: action.title,
      invoicePrice: action.price
    });
    
    console.log(response.status);

    yield put(actions.addInvoice( response.invoiceTitle, response.invoicePrice ));
  } catch(e) {
    yield console.log('error',e);
  }
}

export function* watchFetchInvoiceRequest(){
  yield takeEvery('FETCH_INVOICE_REQUEST', fetchInvoiceItems)
}

export function* watchAddInvoice(){
  yield takeEvery('ADD_INVOICE_REQUEST', saveInvoiceItem)
}

export function* root(){
  yield all([
    fork(watchAddInvoice),
    fork(watchFetchInvoiceRequest)
  ])
}
