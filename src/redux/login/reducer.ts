import { handleActions } from 'redux-actions'
import { LOGIN_SUCCESS, REQUEST_LOGIN, LOGIN_FAILED } from './actionTypes'

const initialState = {
  loginIn: false,
  isLogging: false,
  loginFailedMessage: ''
}

export type LoginState = typeof initialState

const loginReducer = handleActions<LoginState>({
  [LOGIN_SUCCESS] (state, action) {
    return {
      ...state,
      loginIn: true,
      isLogging: false
    }
  },
  [REQUEST_LOGIN] (state, action) {
    return {
      ...state,
      isLogging: true
    }
  },
  [LOGIN_FAILED] (state, action) {
    return {
      ...state,
      loginFailedMessage: action.payload.loginFailedMessage,
      isLogging: false
    }
  }
}, initialState)

export default loginReducer