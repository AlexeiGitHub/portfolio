import { Routes, Route } from 'react-router';
import { Portfolio } from '@/app/home/portfolio';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Portfolio />} />
    </Routes>
  );
};

export default AppRoutes;
