import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import LandingPage from './components/LandingPage';
import Layout from './components/BaseUi/Layout';
import GetStarted from './components/GetStarted';
import NotAParent from './components/NotAParent';
import ParentOption from './components/ParentOption';
import Registration from './components/Registration';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/notaparent" element={<NotAParent />} />
          <Route path="/parent" element={<ParentOption />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
