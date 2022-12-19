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

const observedGridID = (props) => (
  <div className="image flex gap-2">
    <div>
      <p>{props.ObservationID}</p>
    </div>
  </div>
);

const observedGridImage = (props) => (
  <div className="image flex gap-2">
    <div>
      <p>{props.ObservedName}</p>
    </div>
  </div>
);

const observedGridDate = (props) => (
  <div className="image flex gap-2">
    <div>
      <p>{props.ObservedDate}</p>
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
];

export const AppointmentGrid = [
  { type: "Checkbox", width: "50" },
  {
    field: "AppointmentID",
    headerText: "AppointmentID",
    width: "150",
    textAlign: "Center",
    isPrimaryKey: true,
  },
  {
    field: "DoctorName",
    headerText: "DoctorName",
    width: "150",
    textAlign: "Center",
    template: doctorGridImage,
  },
  {
    field: "PatientName",
    headerText: "PatientName",
    width: "150",
    textAlign: "Center",
    template: patientGridImage,
  },
  {
    field: "AppointmentDate",
    headerText: "AppointmentDate",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "AppointmentTime",
    headerText: "AppointmentTime",
    width: "150",
    textAlign: "Center",
  },
];

export const PatientInfo = [
  {
    PatientID: 1,
    DoctorName: "Rajiv Singhla",
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
    field: "DoctorName",
    headerText: "DoctorName",
    width: "100",
    textAlign: "Center",
    template: doctorGridImage,
  },
  {
    field: "PatientName",
    headerText: "PatientName",
    width: "100",
    textAlign: "Center",
    template: patientGridImage,
  },
  {
    field: "HealthPlan",
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

export const PatientAppointmentInfo = [
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
];

export const PatientAppointmentGrid = [
  { type: "Checkbox", width: "50" },
  {
    field: "AppointmentID",
    headerText: "AppointmentID",
    width: "150",
    textAlign: "Center",
    isPrimaryKey: true,
  },
  {
    field: "DoctorName",
    headerText: "DoctorName",
    width: "150",
    textAlign: "Center",
    template: doctorGridImage,
  },
  {
    field: "PatientName",
    headerText: "PatientName",
    width: "150",
    textAlign: "Center",
    template: patientGridImage,
  },
  {
    field: "AppointmentDate",
    headerText: "AppointmentDate",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "AppointmentTime",
    headerText: "AppointmentTime",
    width: "150",
    textAlign: "Center",
  },
];

export const ObservedInfo = [
  {
    ObservationID: 1,
    ObservedName: "Rajiv Singhla",
    PatientName: "Arjun Pandey",
    ObservedDate: "12-12-2022",
  },
  {
    ObservationID: 2,
    ObservedName: "Rajiv Singhla",
    PatientName: "Arjun Pandey",
    ObservedDate: "12-12-2022",
  },
  {
    ObservationID: 3,
    ObservedName: "Rajiv Singhla",
    PatientName: "Arjun Pandey",
    ObservedDate: "12-12-2022",
  },
  {
    ObservationID: 4,
    ObservedName: "Rajiv Singhla",
    PatientName: "Arjun Pandey",
    ObservedDate: "12-12-2022",
  },
];

export const ObservationGrid = [
  { type: "Checkbox", width: "50" },
  {
    field: "ObservationID",
    headerText: "ObservationID",
    width: "100",
    textAlign: "Left",
    isPrimaryKey: true,
    template: observedGridID,
  },
  {
    field: "ObservedName",
    headerText: "ObservedName",
    width: "100",
    textAlign: "Left",
    template: observedGridImage,
  },
  {
    field: "PatientName",
    headerText: "PatientName",
    width: "100",
    textAlign: "Left",
    template: patientGridImage,
  },
  {
    field: "ObservedDate",
    headerText: "ObservedDate",
    width: "100",
    textAlign: "Left",
    template: observedGridDate,
  }
];