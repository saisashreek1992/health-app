import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import { enrollmentPatientReducer } from './reducer/Patientreducer';


const initialState={}

const reducer =combineReducers({
    enrollmentPatient:enrollmentPatientReducer,
    // patientList:patientListReducer,
    // registerPatient:registerPatientreducer,
    // googleSignin:googleSigninReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store