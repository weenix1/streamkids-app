import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import LandingPage from './components/LandingPage';
import Layout from './components/BaseUi/Layout';
import GetStarted from './components/GetStarted';
import NotAParent from './components/NotAParent';
import ParentOption from './components/ParentOption';
import Registration from './components/Registration';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import EnterOtp from './components/EnterOtp';

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
          <Route path='/login' element={<Login />} />
          <Route path='/forgetPassword' element={<ForgetPassword />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/enterOtp' element={<EnterOtp />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
