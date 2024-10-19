
import './App.css';
import React, { useState } from "react";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Import your HomePage component

import Researchhomepage from './components/Research/Researchhomepage'; // Create this component for "RESEARCH"
import SignIn from './components/Research/SignInForm';
import ResearchForm from './components/Research/ResearchForm';
import Researcherprofile from './components/Research/ResearcherProfile';
import ReasearchSearchWindow from './components/Research/ReasearchSearchWindow';
import ContactUs from './components/ContactUs';
import IPRHomePage from './components/IPRHomePage';
import ManagePatents from './components/ManagePatents'; // Import the ManagePatents component
import IPRStatusPage from './components/IPRStatusPage';
import PatentTrack from './components/PatentTrack';
import ProtectedRoute from "./components/Research/ProtectedRoute";
import Geographical_Indication from './components/Geographical_Indication';
import Industrial_Designs from './components/Industrial_Designs';
import Trade_Secret from './components/Trade_Secret';
import TrademarkPage from './components/TrademarkPage';
import PatentPage from './components/PatentPage';
import CopyrightPage from './components/CopyrightPage';
import StartupHomePage from './components/StartupHomePage'; 



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<Researchhomepage />} />
          <Route path="/signUp" element={<ResearchForm />} />
          <Route path="/signIn" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/research-profile" element={<Researcherprofile />} />
        </Route>
          <Route path="/ReasearchSearchPage" element={<ReasearchSearchWindow />} />
          <Route path="/ipr" element={<IPRHomePage />} /> {/* Add IPR Home Page Route */}
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/manage-patents" element={<ManagePatents />} /> {/* Add Manage Patents Route */}
          <Route path="/ipr-status" element={<IPRStatusPage />} /> {/* Add this line */}
          <Route path="/Patent-Track" element={<PatentTrack />} />
          <Route path="/geographical-indication" element={<Geographical_Indication />} /> 
          <Route path="/industrial_designs" element={<Industrial_Designs />} />
          <Route path="/trade_secret" element={<Trade_Secret />} />
          <Route path="/trademarkpage" element={<TrademarkPage />} />
          <Route path="/patentpage" element={<PatentPage />} />
          <Route path="/copyrightpage" element={<CopyrightPage/>} />
          <Route path="/startup" element={<StartupHomePage />} />

        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
