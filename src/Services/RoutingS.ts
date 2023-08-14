import { useNavigate } from 'react-router-dom';

function useNavToGetStarted(): () => void {
  const navigate = useNavigate();
  return () => navigate('/getstarted');
}

function useNavToNotAParent(): () => void {
  const navigate = useNavigate();
  return () => navigate('/notaparent');
}

function useNavToOnBoarding(): () => void {
  const navigate = useNavigate();
  return () => navigate('/onboarding');
}

const RoutingS = {
  useNavToGetStarted,
  useNavToNotAParent,
  useNavToOnBoarding,
};

export default RoutingS;
