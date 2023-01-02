import React from 'react';
import { useEffect } from 'react';
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { getAllDietChart } from '../../../action/AdminAction';
import { getForms } from '../../../action/PatientAction';
import  LoadingBox  from '../../../Components/LoadingBox';
import  MessageBox  from '../../../Components/MessageBox';




const Charts = () => {
 
  const dispacth = useDispatch()
  const getFomrsList=useSelector((state=>state.patientFormList))
  const {loading,error,forms}=getFomrsList
  const deitChartList=useSelector((state)=>state.deitChartList)
  const {loading:loadingDiet,error:errorDiet,dietchart}=deitChartList


  useEffect(()=>{
    dispacth(getForms('admin'))
    dispacth(getAllDietChart())
  },[])

  // if(forms){
  //   console.log(forms);
  // }
  // if(dietchart){
  //   console.log(dietchart);
  // }
 

  return (
    <>
      <div className="my-10">
        <table className="table__Container">
          <thead className="table__Head">
            <tr>
              <th className="table__Head--Text">
                Sl No.
              </th>
              <th className="table__Head--Text">
                Form Name
              </th>
              <th className="table__Head--Text">
                Created By
              </th>
              <th className="table__Head--Text">
                Created Date
              </th>
              <th className="table__Head--Text">
                Access
              </th>
              <th className="table__Head--Text">
                Actions
              </th>
            </tr>
          </thead>
          {loading ? <LoadingBox></LoadingBox>:
          error ? <MessageBox>{error}</MessageBox>:
          forms.map((frm,index)=>(
            <tbody>
            <tr className="table__Body--Row">
              <td className="table__Body--Row_Data">
              {index + 1}

              </td>
              <td className="table__Body--Row_Data">
               {frm.question_title}
              </td>
              <td className="table__Body--Row_Data">
                Dr. D.S.N.Rao
              </td>
              <td className="table__Body--Row_Data">
                11-10-2022
              </td>
              <td className="table__Body--Row_Data">
                <select
                  id="status"
                  name="status"
                  autoComplete="status-name"
                  className="form__Select"
                >
                 <option value={frm.active}>{frm.status}</option>  
                 {frm.status === 'Active' ? (
                   <option>De-Active</option>

                 ):frm.status === 'De-Active' ? (
                  <option>Active</option>
                 ):                
                 ''}
                </select>
              </td>
              <td className="table__Body--Row_Data">
                <FiEdit className="table__Body--Status_Icons" />
              </td>
            </tr>
          </tbody>
          ))}
        
        </table>
      </div>
      <div className="my-10">
        <table className="table__Container">
          <thead className="table__Head">
            <tr>
              <th className="table__Head--Text">
                Sl No.
              </th>
              <th className="table__Head--Text">
                Diet Chart Name
              </th>
              <th className="table__Head--Text">
                Created By
              </th>
              <th className="table__Head--Text">
                Created Date
              </th>
              <th className="table__Head--Text">
                Access
              </th>
              <th className="table__Head--Text">
                Actions
              </th>
            </tr>
          </thead>
          {loadingDiet ? <LoadingBox></LoadingBox>:
          errorDiet ? <MessageBox>{error}</MessageBox>:
          dietchart.map((dt,index)=>(
          <tbody>
            <tr className="table__Body--Row">
              <td className="table__Body--Row_Data">
                {index + 1}
              </td>
              <td className="table__Body--Row_Data">
                Burn Calories
              </td>
              <td className="table__Body--Row_Data">
                Dr. Suha
              </td>
              <td className="table__Body--Row_Data">
                11-10-2022
              </td>
              <td className="table__Body--Row_Data">
                <select
                  id="status"
                  name="status"
                  autoComplete="status-name"
                  className="form__Select"
                >
                  <option>{dt.status}</option>
                  {dt.status === 'Active' ? (
                   <option>De-Active</option>

                 ):dt.status === 'De-Active' ? (
                  <option>Active</option>
                 ):                
                 ''}
                </select>
              </td>
              <td className="table__Body--Row_Data">
                <FiEdit className="table__Body--Status_Icons" />
              </td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
    </>
  )
}

export default Charts