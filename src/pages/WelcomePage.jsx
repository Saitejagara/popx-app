import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import { COLORS } from '../styles/theme';

const styles = {
  screen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: 12,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
};

export default function WelcomePage() {
  const { navigate } = useApp();

  return (
    <div style={styles.screen}>
      <div style={{ flex: 3 }} />
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to PopX</h1>
        <p style={styles.subtitle}>
          Connect with your favorite brands,<br />creators, and communities — all in one place.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
          <Button label="Create Account" variant="primary" onClick={() => navigate('create')} />
          <Button label="Already Registered? Login" variant="secondary" onClick={() => navigate('login')} />
        </div>
      </div>
    </div>
  );
}