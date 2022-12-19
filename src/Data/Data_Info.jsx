import { FiEye } from "react-icons/fi";

const doctorGridImage = (props) => (
  <div className="image flex gap-4">
    <div>
      <p>{props.DoctorName}</p>
    </div>
  </div>
);

const patientGridImage = (props) => (
  <div className="image flex gap-4">
    <div>
      <p>{props.PatientName}</p>
    </div>
  </div>
);

const actionGridImage = () => (
  <div className="image flex">
    <div>
      <p className="text-center text-3xl hover:text-emerald-600">
        <FiEye />
      </p>
    </div>
  </div>
);

export const AppointmentInfo = [
  {
    AppointmentID: 1,
    DoctorName: "Rajiv Singhla",
    PatientName: "Arjun Pandey",
    AppointmentDate: "12-12-2022",
    AppointmentTime: "2:00 PM",
  },
  {
    AppointmentID: 2,
    DoctorName: "Rajiv Singhla",
    PatientName: "Arjun Pandey",
    AppointmentDate: "12-12-2022",
    AppointmentTime: "2:00 PM",
  },
  {
    AppointmentID: 3,
    DoctorName: "Rajiv Singhla",
    PatientName: "Arjun Pandey",
    AppointmentDate: "12-12-2022",
    AppointmentTime: "2:00 PM",
  },
  {
    AppointmentID: 4,
    DoctorName: "Rajiv Singhla",
    PatientName: "Arjun Pandey",
    AppointmentDate: "12-12-2022",
    AppointmentTime: "2:00 PM",
  },
  {
    AppointmentID: 4,
    DoctorName: "Rajiv Singhla",
    PatientName: "Arjun Pandey",
    AppointmentDate: "12-12-2022",
    AppointmentTime: "2:00 PM",
  },
  {
    AppointmentID: 4,
    DoctorName: "Rajiv Singhla",
    PatientName: "Arjun Pandey",
    AppointmentDate: "12-12-2022",
    AppointmentTime: "2:00 PM",
  },
];

export const AppointmentGrid = [
  { type: "Checkbox", width: "50" },
  {
    field: "index",
    headerText: "AppointmentIDS",
    width: "150",
    textAlign: "Center",
    isPrimaryKey: true,
    template: doctorGridImage,
  },
  {
    field: "doctorId",
    headerText: "DoctorName",
    width: "150",
    textAlign: "Center",
    // template: doctorGridImage,
  },
  {
    field: "patientId",
    headerText: "PatientName",
    width: "150",
    textAlign: "Center",
    // template: patientGridImage,
  },
  {
    field: "date",
    headerText: "AppointmentDate",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "doctorId",
    headerText: "AppointmentTime",
    width: "150",
    textAlign: "Center",
  },
];

export const PatientInfo = [
  {
    PatientID: 1,
    DoctorName: "Rajiv Singhlas",
    PatientName: "Arjun Pandey",
    HealthPlan: "12-12-2022",
    iconCss: <FiEye />,
  },
  {
    PatientID: 2,
    DoctorName: "Rajiv Singhla",
    PatientName: "Arjun Pandey",
    HealthPlan: "12-12-2022",
    iconCss: <FiEye />,
  },
  {
    PatientID: 3,
    DoctorName: "Rajiv Singhla",
    PatientName: "Arjun Pandey",
    HealthPlan: "12-12-2022",
    iconCss: <FiEye />,
  },
  {
    PatientID: 4,
    DoctorName: "Rajiv Singhla",
    PatientName: "Arjun Pandey",
    HealthPlan: "12-12-2022",
    iconCss: <FiEye />,
  },
];

export const PatientGrid = [
  { type: "Checkbox", width: "50" },
  {
    field: "PatientID",
    headerText: "PatientID",
    width: "50",
    textAlign: "Center",
    isPrimaryKey: true,
  },
  {
    field: "doctorId",
    headerText: "DoctorName",
    width: "100",
    textAlign: "Center",
    // template: doctorGridImage,
  },
  {
    field: "patientId",
    headerText: "PatientName",
    width: "100",
    textAlign: "Center",
    // template: patientGridImage,
  },
  {
    field: "health_plan",
    headerText: "HealthPlan",
    width: "100",
    textAlign: "Center",
  },
  {
    field: "Action",
    headerText: "Action",
    width: "100",
    textAlign: "Center",
    template: actionGridImage,
  },
];
