import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PeopleProvider } from "./contexts/PeopleContext";
import { AddPersonView } from "./pages/AddPersonView";
import { HomeView } from "./pages/HomeView";

function App() {
  return (
    <>
      <PeopleProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/add-person" element={<AddPersonView />} />
          </Routes>
        </Router>
      </PeopleProvider>
      <ToastContainer />
    </>
  );
}

export default App;
