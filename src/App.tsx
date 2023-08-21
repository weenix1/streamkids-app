import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import LandingPage from './components/LandingPage';
import Layout from './components/Layout';
import GetStarted from './components/GetStarted';
import Onboarding from './components/Onboarding';
import Onboarding2 from './components/Onboarding2';
import Registration from './components/Registration';
import { ThemeProvider } from '@material-tailwind/react';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/notaparent" element={<Onboarding />} />
            <Route path="/onboarding" element={<Onboarding2 />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
