import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MigrationDashboard from './pages/MigrationDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400 max-w-md mx-auto">The migration factory is currently processing large-scale VMware discovery data and dependency mappings. This module will be available shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<MigrationDashboard />} />
          <Route path="/discovery" element={<Placeholder name="Discovery & Workload Assessment" />} />
          <Route path="/strategy" element={<Placeholder name="6R Strategy Decision Engine" />} />
          <Route path="/waves" element={<Placeholder name="Migration Wave & Timeline Planning" />} />
          <Route path="/execution" element={<Placeholder name="Migration Factory & Execution Hub" />} />
          <Route path="/roi" element={<Placeholder name="Financial TCO & ROI Modeling" />} />
          <Route path="/modernization" element={<Placeholder name="App Modernization & Refactoring Hub" />} />
          <Route path="/reports" element={<Placeholder name="Executive Migration Reports" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
