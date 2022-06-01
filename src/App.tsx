import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultLayout from './layout/Default';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
