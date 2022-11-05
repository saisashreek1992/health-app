import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
// import { googleSigninReducer, googleSigninReducrt } from './reducer/DoctoreReducer';
// import { enrollmentPatientReducer, patientListReducer, registerPatientreducer } from './reducer/Patientreducer';

const initialState={}

const reducer =combineReducers({
    // registerPatient:registerPatientreducer,
    // googleSignin:googleSigninReducer,
    // enrollmentPatient:enrollmentPatientReducer,
    // patientList:patientListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store