import React from "react";
import Navbar from "../shared/Navbar";
import FloatingButton from "../../pages/shared/Floating-Button";

const DoctorDashboard = () => {
  return (
    <>
      <div className="dashboard__Container">
        
        <Navbar />
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <ul
                className="nav nav-tabs nav-justified flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
                id="tabs-tabJustify"
                role="tablist"
              >
                <li className="nav-item flex-grow text-center" role="presentation">
                  <a
                    href="#tabs-appointmentJustify"
                    className="nav-link w-full block font-medium text-md leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
                    id="tabs-appointment-tabJustify"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-appointmentJustify"
                    role="tab"
                    aria-controls="tabs-appointmentJustify"
                    aria-selected="true"
                  >
                    Appointments
                  </a>
                </li>
                <li className="nav-item flex-grow text-center" role="presentation">
                  <a
                    href="#tabs-mypatientsJustify"
                    className="nav-link w-full block font-medium text-md leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                    id="tabs-mypatients-tabJustify"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-mypatientsJustify"
                    role="tab"
                    aria-controls="tabs-mypatientsJustify"
                    aria-selected="false"
                  >
                    MyPatients
                  </a>
                </li>
                <li className="nav-item flex-grow text-center" role="presentation">
                  <a
                    href="#tabs-chatJustify"
                    className="nav-link w-full block font-medium text-md leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                    id="tabs-chat-tabJustify"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-chatJustify"
                    role="tab"
                    aria-controls="tabs-chatJustify"
                    aria-selected="false"
                  >
                    Chat
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="tabs-tabContentJustify">
                <div
                  className="tab-pane fade show active"
                  id="tabs-appointmentJustify"
                  role="tabpanel"
                  aria-labelledby="tabs-appointment-tabJustify"
                >
                  <p className="text-center text-xl font-medium">Appointment Section</p>
                </div>
                <div
                  className="tab-pane fade"
                  id="tabs-mypatientsJustify"
                  role="tabpanel"
                  aria-labelledby="tabs-mypatients-tabJustify"
                >
                  <p className="text-center text-xl font-medium">My Patients Section</p>
                </div>
                <div
                  className="tab-pane fade"
                  id="tabs-chatJustify"
                  role="tabpanel"
                  aria-labelledby="tabs-chat-tabJustify"
                >
                  <p className="text-center text-xl font-medium">Chat Section</p>
                </div>
              </div>
            </div>
            {/* /End replace */}
            <FloatingButton />
          </div>
          
        </main>
      </div>
    </>
  );
};

export default DoctorDashboard;
