import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import { COLORS } from '../styles/theme';

const styles = {
  screen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '40px 28px 48px',
    background: COLORS.white,
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    color: COLORS.textPrimary,
    margin: '0 0 10px',
    lineHeight: 1.25,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    margin: '0 0 32px',
    lineHeight: 1.6,
  },
};

export default function WelcomePage() {
  const { navigate } = useApp();

  return (
    <div style={styles.screen}>
      <div style={{ flex: 1 }} />
      <h1 style={styles.title}>Welcome to PopX</h1>
      <p style={styles.subtitle}>
  Connect with your favorite brands,<br />creators, and communities — all in one place.
      </p>
      <Button label="Create Account" variant="primary" onClick={() => navigate('create')} />
      <Button label="Already Registered? Login" variant="secondary" onClick={() => navigate('login')} />
    </div>
  );
}