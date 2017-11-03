import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../actions/invoice'

export function* saveInvoiceItem(action) {
  try {
    const response = yield call( axios.post, 'http://behnam.ninja/api/index.php', {
      invoiceTitle: 'hi',
      invoicePrice: 10000,
    });
    
    console.log(response.data.status);

    yield put(actions.addInvoice( action.title, action.price ));
  } catch(e) {
    yield console.log('error',e);
  }
}

export function* watchAddInvoice(){
  yield  takeEvery('ADD_INVOICE', saveInvoiceItem)
}
