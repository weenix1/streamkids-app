import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Layout from './components/Layout';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/getstarted" element={<GetStarted />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
