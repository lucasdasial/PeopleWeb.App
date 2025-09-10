import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AddPersonView } from "./pages/AddPersonView";
import { HomeView } from "./pages/HomeView";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/add-person" element={<AddPersonView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
