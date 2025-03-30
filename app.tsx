import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Dashboard, Settings } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};