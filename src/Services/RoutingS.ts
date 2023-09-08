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

const RoutingS = {
  useNavToGetStarted,
  useNavToNotAParent,
  useNavToParent,
  goBack,
  useNavToRegistration,
};

export default RoutingS;
