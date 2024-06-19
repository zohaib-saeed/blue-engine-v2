import Header from "./components/header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/return-app-privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
