import { useApp } from './context/AppContext';
import PhoneWrapper from './components/PhoneWrapper';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import AccountSettingsPage from './pages/AccountSettingsPage';

const SCREENS = {
  welcome: WelcomePage,
  login: LoginPage,
  create: CreateAccountPage,
  settings: AccountSettingsPage,
};

export default function App() {
  const { screen } = useApp();
  const CurrentScreen = SCREENS[screen] || WelcomePage;

  return (
    <PhoneWrapper>
      <CurrentScreen />
    </PhoneWrapper>
  );
}
