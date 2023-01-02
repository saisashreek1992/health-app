import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import { activateDoctorReducer, adminSigninReducer, deactivateDoctorReducer, doctorCreateReducer, doctorListReducer } from './reducer/AdminReducer';
import { dietChartUploadReducer, doctorProfileListReducer, formCreateReducer, prescriptionCreateReducer } from './reducer/DoctoreReducer';
import { appointmentCreateReducer, appointmentListReducer, doctorSigninReducer, enrollmentPatientReducer, formSubmitReducer, latestDietChartReducer, latestPrescriptionReducer, observationCreateReducer, observationListReducer, patientDetailsReducer, patientFormListReducer, patientListReducer, patientOtpReducer, patientProfileListReducer, patientSigninReducer, presctListReducer } from './reducer/Patientreducer';


const initialState = {
    patientSignin: {
      patientInfo: localStorage.getItem('patientInfo')
        ? JSON.parse(localStorage.getItem('patientInfo'))
        : null,
    },
    doctorSignin: {
      doctorInfo: localStorage.getItem('doctorInfo')
        ? JSON.parse(localStorage.getItem('doctorInfo'))
        : null,
    },
    adminSignin: {
      adminInfo: localStorage.getItem('adminDocInfo')
        ? JSON.parse(localStorage.getItem('adminDocInfo'))
        : null,
    },
  };

const reducer =combineReducers({
    enrollmentPatient:enrollmentPatientReducer,
    patientList:patientListReducer,
    patientDetails:patientDetailsReducer,
    dietChartUpload:dietChartUploadReducer,
    formCreate:formCreateReducer,
    patientFormList:patientFormListReducer,
    appointmentCreate:appointmentCreateReducer,
    appointmentList:appointmentListReducer,
    prescriptionCreate:prescriptionCreateReducer,
    doctorCreate:doctorCreateReducer,
    presctList:presctListReducer,
    patientOtp:patientOtpReducer,
    observationCreate:observationCreateReducer,
    observationList:observationListReducer,
    patientSignin:patientSigninReducer,
    doctorSignin:doctorSigninReducer,
    adminSignin:adminSigninReducer,
    patientProfileList:patientProfileListReducer,
    doctorProfileList:doctorProfileListReducer,
    doctorList:doctorListReducer,
    activateDoctor:activateDoctorReducer,
    deactivateDoctor:deactivateDoctorReducer,
    formSubmit:formSubmitReducer,
    latestPrescription:latestPrescriptionReducer,
    latestDietChart:latestDietChartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store