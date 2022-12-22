import React from "react";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";
import PatientNav from "./PatientNav";
import PatienPrescriptionsInfo from "../../pages/form-validations/patient/PatienPrescriptionsInfo";
import PatientAppointmentInfo from "../../pages/form-validations/patient/PatientAppointmentInfo";
import PatientObservation from "../../pages/form-validations/patient/PatientObservation";
import PatientUploadDietChart from "../../pages/form-validations/patient/PatientUploadDietChart";

export default class PatientPrescription extends React.Component {
  constructor() {
    super(...arguments);
    this.headerText = [
      { text: "Latest Presciptions" },
      { text: "Appointments" },
      { text: "Personal Observations" },
    ];
  }
  content0() {
    return (
      <div className="py-5">
        <PatienPrescriptionsInfo />
        <PatientUploadDietChart />
      </div>
    );
  }
  content1() {
    return (
      <div className="py-3">
        <PatientAppointmentInfo />
      </div>
    );
  }
  content2() {
    return (
      <div className="py-3">
        <PatientObservation />
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="dashboard__Container">
          <PatientNav />
          <main>
            <div className="dashboard__Main-Content">
              <TabComponent heightAdjustMode="Auto">
                <TabItemsDirective>
                  <TabItemDirective
                    header={this.headerText[0]}
                    content={this.content0}
                  />
                  <TabItemDirective
                    header={this.headerText[1]}
                    content={this.content1}
                  />
                  <TabItemDirective
                    header={this.headerText[2]}
                    content={this.content2}
                  />
                </TabItemsDirective>
              </TabComponent>
            </div>
          </main>
          <footer className="relative text-center text-white">
        <div className="container w-full pt-9 bg-gray-600 fixed bottom-0 left-0 right-0">
          <div className="flex justify-center mb-9">
            <a
              href="/userrole/:roleid/dashboard/patient/mydata/"
              className="mr-9 text-white"
            >
              My Data
            </a>
            <a href="/userrole/:roleid/dashboard/patient/prescriptions/" className="mr-9 text-white">
              Prescriptions
            </a>
            <a href="/userrole/:roleid/dashboard/common/chat/" className="mr-9 text-white">
              Chat
            </a>
          </div>
        </div>
      </footer>
        </div>
      </>
    );
  }
}
