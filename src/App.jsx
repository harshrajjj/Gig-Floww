import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import ThankYou from './components/ThankYou';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>GigFloww</h1>
          <p>Connect with the best gig workers</p>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<SignUpForm />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} GigFloww. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
