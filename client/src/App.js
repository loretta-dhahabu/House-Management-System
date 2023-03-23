import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Houses from "./component/Houses";
import House from "./component/House";
import Tenants from "./component/Tenants";
import Tenant from "./component/Tenant";
import Payments from "./component/Payments";
import Payment from "./component/Payment";
import Dashboard from "./component/Dashboard";
import SignInPage from "./component/SignInPage";
import SignUpForm from "./component/SignUpForm";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route exact path="/login" element={<SignInPage />}></Route>
          <Route exact path="/signup" element={<SignInPage />}></Route>
          <Route exact path="/logout" element={<Home />}></Route>
          <Route exact path="/register" element={<SignUpForm />}></Route>
          <Route path="/apartments" element={<Houses />}></Route>
          <Route path="/apartments/:id" element={<House />}></Route>
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/tenants/:id" element={<Tenant />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/payments/:id" element={<Payment />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
