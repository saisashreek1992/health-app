import React from "react";
import PatientNav from "./PatientNav";

const UserChat = () => {
  return (
    <>
      <div className="min-h-full">
        <PatientNav />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard - Chat Page</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
      <footer className="relative text-center text-white">
        <div className="container pt-9 bg-gray-600 w-full fixed bottom-0 left-0">
          <div className="flex justify-center mb-9">
            <a
              href="/userrole/:roleid/dashboard/patient/mydata/"
              className="mr-9 text-white"
            >
              My Data
            </a>
            <a
              href="/userrole/:roleid/dashboard/patient/prescriptions/"
              className="mr-9 text-white"
            >
              Prescriptions
            </a>
            <a href="/userrole/:roleid/dashboard/common/chat/" className="mr-9 text-white font-bold">
              Chat
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default UserChat;
