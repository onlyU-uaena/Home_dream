import { handleActions } from 'redux-actions'
import { LOGIN_SUCCESS, REQUEST_LOGIN, LOGIN_FAILED, REQUEST_TOKEN_VERIFICATION } from './actionTypes'

const initialState = {
  loginIn: false,
  isLogging: false,
  loginFailedMessage: '',
  isFirstEnter: true,
  college: '',
  profession: ''
}

export type LoginState = typeof initialState

const loginReducer = handleActions<LoginState>({
  [LOGIN_SUCCESS] (state, action) {
    return {
      ...state,
      loginIn: true,
      isLogging: false,
      isFirstEnter: action.payload.isFirstEnter,
      college: action.payload.college,
      profession: action.payload.profession
    }
  },
  [REQUEST_LOGIN] (state, action) {
    return {
      ...state,
      isLogging: true
    }
  },
  [REQUEST_TOKEN_VERIFICATION] (state, action) {
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
