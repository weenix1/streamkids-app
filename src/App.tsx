import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Layout from './components/Layout';
import GetStarted from './components/GetStarted';
import Onboarding from './components/Onboarding';
import Onboarding2 from './components/Onboarding2';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/notaparent" element={<Onboarding />} />
          <Route path="/onboarding" element={<Onboarding2 />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
