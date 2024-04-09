import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './webpages/home/Home';
import AboutUs from './webpages/aboutus/AboutUs';
import BioCharProject from './webpages/biocharproject/BioCharProject';
import Services from './webpages/services/Services';
import ContactUs from './webpages/contactus/ContactUs';
import Team from './Components/team/Team';
import Client from './Components/client/Client';
import Career from './webpages/career/Career';
import AdminRout from './AdminRout.jsx';

function App() {
  const [urlParams, setUrlParams] = useState('');

  useEffect(() => {
    // Extract the URL parameters when component mounts
    const params = new URLSearchParams(window.location.search);
    setUrlParams(params.get('url'));
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='admin' element={<AdminRout />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/team' element={<Team />} />
          <Route path='/client' element={<Client />} />
          <Route path='/biochar' element={<BioCharProject />} />
          <Route path='/service' element={<Services />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/career' element={<Career />} />
          {/* Redirect to the requested URL if available */}
          {urlParams && <Route path='*' element={<Navigate to={urlParams} replace />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
