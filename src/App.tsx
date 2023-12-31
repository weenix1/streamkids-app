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
import ChildProfileSetUp from './components/ChildProfileSetUp';
import HomeScreen from './components/HomeScreen';
import StoryBook from './components/StoryBook';

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
          <Route path='/enterotp' element={<EnterOtp />} />
          <Route path='/childprofile' element={<ChildProfileSetUp />} />
          <Route path='/homescreen' element={<HomeScreen />} />
          <Route path='/storybook' element={<StoryBook />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
