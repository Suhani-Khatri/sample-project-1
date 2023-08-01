import React, { Suspense } from 'react';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import SideBar from './components/SideBar';

import { Signup } from '#/modules';

const App = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes location={location}>
        <Route path="/" element={<SideBar />} />
        <Route path="/" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
