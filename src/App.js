import React, { Suspense } from 'react';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import SideBarMenuNavItems from './components/SideBarMenuNavItems';

const App = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes location={location}>
        <Route path="/" element={<SideBarMenuNavItems />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
