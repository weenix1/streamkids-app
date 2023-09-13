import { useNavigate } from 'react-router-dom';

function useNavToGetStarted(): () => void {
  const navigate = useNavigate();
  return () => navigate('/getstarted');
}

function goBack(): () => void {
  const navigate = useNavigate();
  return () => navigate(-1);
}

function useNavToNotAParent(): () => void {
  const navigate = useNavigate();
  return () => navigate('/notaparent');
}

function useNavToParent(): () => void {
  const navigate = useNavigate();
  return () => navigate('/parent');
}

function useNavToRegistration(): () => void {
  const navigate = useNavigate();
  return () => navigate('/registration');
}

function useNavToLogin(): () => void {
  const navigate = useNavigate();
  return () => navigate('/login');
}

function useNavToEnterOtp(): () => void {
  const navigate = useNavigate();
  return () => navigate('/enterotp');
}

function useNavForgetPassword(): () => void {
  const navigate = useNavigate();
  return () => navigate('/forgetpassword');
}

function useNavToResetPassword(): () => void {
  const navigate = useNavigate();
  return () => navigate('/resetpassword');
}

function useNavToHome(): () => void {
  const navigate = useNavigate();
  return () => navigate('/home');
}

function useNavChildProfile(): () => void {
  const navigate = useNavigate();
  return () => navigate('/childprofile');
}

const RoutingS = {
  useNavToGetStarted,
  useNavToNotAParent,
  useNavToParent,
  goBack,
  useNavToRegistration,
  useNavToLogin,
  useNavToEnterOtp,
  useNavForgetPassword,
  useNavToResetPassword,
  useNavToHome,
  useNavChildProfile,
};

export default RoutingS;
