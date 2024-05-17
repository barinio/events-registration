import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const EventsPage = lazy(() => import("./page/EventsPage/EventsPage"));
const EventRegistrationPage = lazy(
  () => import("./page/EventRegistrationPage/EventRegistrationPage")
);
const ParticipantsPage = lazy(() => import("./page/ParticipantsPage/ParticipantsPage"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route index element={<EventsPage />}></Route>

          <Route path="/event-registration" element={<EventRegistrationPage />}></Route>
          <Route path="/event-participants" element={<ParticipantsPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
