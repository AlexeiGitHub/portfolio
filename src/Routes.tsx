import { Route, Routes } from 'react-router';
import { Portfolio } from '@/app/home/portfolio';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='portfolio' index element={<Portfolio />} />
    </Routes>
  );
};

export default AppRoutes;
