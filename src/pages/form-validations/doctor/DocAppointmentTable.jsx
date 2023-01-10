import React, { useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { AppointmentInfo, AppointmentGrid } from "../../../Data/Data_Info";
import { updateSampleSection } from "../../shared/SampleBase";
import { getAppointments } from "../../../action/PatientAction";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";

const DocAppointmentTable = () => {
  const appointmentCreate=useSelector(state=>state.appointmentCreate)
  const {success}=appointmentCreate
  const appointmentList=useSelector(state=>state.appointmentList)
  const {loading,error,appointment}=appointmentList
  const dispatch=useDispatch()
  useEffect(() => {
    // updateSampleSection();
    const user='doctor'
    dispatch(getAppointments(user))

  },[]);
 

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };
  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) : str;
  };

  return (
    <>
      <div className="py-16 bg-white rounded-3xl">
        {loading ? <LoadingBox></LoadingBox>:
        error ? <MessageBox>{error}</MessageBox>:(
        <div className="my-10">
         <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-20 p-3 text-lg font-semibold tracking-wide text-left">
                Sl No.
              </th>
              <th className="p-3 text-lg font-semibold tracking-wide text-left">
                Doctor Name
              </th>
              <th className="p-3 text-lg font-semibold tracking-wide text-left">
                Patient Name
              </th>
              <th className="p-3 text-lg font-semibold tracking-wide text-left">
                Appointment Date
              </th>
           
            </tr>
          </thead>
          <tbody>
            {loading ? <LoadingBox></LoadingBox>:
            error ? <MessageBox>{error}</MessageBox>:
            appointment.length>0 ? appointment.map((ap,i)=>(

            
            <tr className="bg-white border-b" key={ap._id}>
              <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 text-center">
            <tr className="bg-white">
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                {i+1}
              </td>
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                {ap.doctorId.name}
              </td>
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                {ap.patientId.name}
              </td>
              <td className="p-3 text-base text-gray-700 whitespace-nowrap">
                {truncate(ap.date,11)}
              </td>
            </tr>
            </td>
            </tr>
           )):(
            <MessageBox>No Appointments</MessageBox>
           ) }
           
           
          
           
          </tbody>
        </table> 
      </div>
        )}
      
      </div>
    </>
  );
};

export default DocAppointmentTable;
