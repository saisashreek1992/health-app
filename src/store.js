import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import { enrollmentPatientReducer, patientDetailsReducer, patientListReducer } from './reducer/Patientreducer';


const initialState={}

const reducer =combineReducers({
    enrollmentPatient:enrollmentPatientReducer,
    patientList:patientListReducer,
    patientDetails:patientDetailsReducer,
    // registerPatient:registerPatientreducer,
    // googleSignin:googleSigninReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store