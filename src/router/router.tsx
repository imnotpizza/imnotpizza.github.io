import Page from '@/pages/Page';
import Scripts from '@/pages/Scripts';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/q%-1217" element={<Scripts />} />
      </Routes>
    </Router>
  );
}
