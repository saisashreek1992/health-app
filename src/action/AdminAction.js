import axios from "axios";
import { ACTIVATE_DOCTOR_FAIL, ACTIVATE_DOCTOR_REQUEST, ACTIVATE_DOCTOR_SUCCESS, ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, CREATE_DOCTOR_FAIL, CREATE_DOCTOR_REQUEST, CREATE_DOCTOR_SUCCESS, DEACTIVATE_DOCTOR_FAIL, DEACTIVATE_DOCTOR_REQUEST, DEACTIVATE_DOCTOR_SUCCESS, GET_ALL_DIET_CHART_FAIL, GET_ALL_DIET_CHART_REQUEST, GET_ALL_DIET_CHART_SUCCESS, GET_ALL_DOCTORS_FAIL, GET_ALL_DOCTORS_REQUEST, GET_ALL_DOCTORS_SUCCESS } from "../constant.js/AdminConstant";
import { Url } from "../constant.js/PatientConstant";



  export const addDoctore=(name,role,email,phone,registration_no)=>async(dispatch,getState)=>{
    dispatch({type:CREATE_DOCTOR_REQUEST});   
  const { adminSignin: { adminInfo }} = getState();

    try{
      const {data} = await axios.post(`${Url}/doctors/add-doctor`,{name,role,email,phone,registration_no},{
        headers: {
          Authorization: `Bearer ${adminInfo}`,
        },
      });      
      dispatch({type:CREATE_DOCTOR_SUCCESS,payload:data});
     
    }catch(error){
        console.log(error.response.data.message,'error')
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.response;
       dispatch({ type: CREATE_DOCTOR_FAIL, payload: message });
    }
  }


  export const adminLogin =(email,password,user)=>async(dispatch)=>{
    dispatch({type:ADMIN_LOGIN_REQUEST,payload:{email}});
    try{
      const {data}= await axios.post(`${Url}/auth/login`,{email,password,user})
        dispatch({type:ADMIN_LOGIN_SUCCESS,payload:data});
        console.log(data.token,'dctrt');
        localStorage.setItem('adminDocInfo', JSON.stringify(data.token));
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: ADMIN_LOGIN_FAIL, payload: message })
    }
  }

  export const getAllDoctors=()=>async(dispatch,getState)=>{
    dispatch({type:GET_ALL_DOCTORS_REQUEST});   
    const { adminSignin: { adminInfo }} = getState();
    try{
      const {data} = await axios.get(`${Url}/doctors/get-all`,{
        headers: {
          Authorization: `Bearer ${adminInfo}`,
        },
      });      
      dispatch({type:GET_ALL_DOCTORS_SUCCESS,payload:data});
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.response;
       dispatch({ type: GET_ALL_DOCTORS_FAIL, payload: message });
    }
  }
  

  export const activateDoctor=(id)=>async(dispatch,getState)=>{
    dispatch({type:ACTIVATE_DOCTOR_REQUEST});
    const {
      adminSignin: { adminInfo },
    } = getState();  
    try{
      const {data} = await axios.put(`${Url}/doctors/activate/${id}`,{},{
        headers: {
          Authorization: `Bearer ${adminInfo}`,
        },
      });      
      dispatch({type:ACTIVATE_DOCTOR_SUCCESS,payload:data});
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: ACTIVATE_DOCTOR_FAIL, payload: message });
    }
  }

  
  export const deactivateDoctor=(id)=>async(dispatch,getState)=>{
    dispatch({type:DEACTIVATE_DOCTOR_REQUEST});
    const {
      adminSignin: { adminInfo },
    } = getState();  
    console.log(adminInfo,'ad');
    try{
      const {data} = await axios.put(`${Url}/doctors/deactivate/${id}`,{},{
        headers: {
          Authorization: `Bearer ${adminInfo}`,
        },
      });      
      dispatch({type:DEACTIVATE_DOCTOR_SUCCESS,payload:data});
     
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
       dispatch({ type: DEACTIVATE_DOCTOR_FAIL, payload: message });
    }
  }

  
  export const getAllDietChart=()=>async(dispatch,getState)=>{
    dispatch({type:GET_ALL_DIET_CHART_REQUEST});   
    const { adminSignin: { adminInfo }} = getState();
    try{
      const {data} = await axios.get(`${Url}/diet-charts/get-all`,{
        headers: {
          Authorization: `Bearer ${adminInfo}`,
        },
      });      
      dispatch({type:GET_ALL_DIET_CHART_SUCCESS,payload:data});
    }catch(error){
      const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.response;
       dispatch({ type: GET_ALL_DIET_CHART_FAIL, payload: message });
    }
  }
  