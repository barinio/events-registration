import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";

const EventsPage = lazy(() => import("./page/EventsPage/EventsPage"));
const EventRegistrationPage = lazy(
  () => import("./page/EventRegistrationPage/EventRegistrationPage")
);
const ParticipantsPage = lazy(() => import("./page/ParticipantsPage/ParticipantsPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<EventsPage />} />

            <Route path="/event-registration/:eventId" element={<EventRegistrationPage />} />
            <Route path="/event-participants/:eventId" element={<ParticipantsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App;
