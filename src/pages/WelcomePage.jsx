import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import { COLORS } from '../styles/theme';

const styles = {
  screen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '40px 28px 48px',
    background: COLORS.white,
  },
  title: {
    fontSize: 30,
    fontWeight: 800,
    color: COLORS.textPrimary,
    margin: '0 0 12px',
    lineHeight: 1.25,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    margin: '0 0 24px',
    lineHeight: 1.6,
    maxWidth: 320,
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    textAlign: 'left',
    paddingBottom: 80,
    paddingLeft: 28,
    paddingRight: 28,
  },
  buttons: {
    position: 'absolute',
    left: 28,
    right: 28,
    bottom: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
};

export default function WelcomePage() {
  const { navigate } = useApp();

  return (
    <div style={styles.screen}>
      <div style={styles.center}>
        <h1 style={styles.title}>Welcome to PopX</h1>
        <p style={styles.subtitle}>
          Create your account and enjoy a secure and personalized experience.
          <br />Get started by creating an account or logging in.
        </p>
      </div>
      <div style={styles.buttons}>
        <Button label="Create Account" variant="primary" onClick={() => navigate('create')} />
        <Button label="Already Registered? Login" variant="secondary" onClick={() => navigate('login')} />
      </div>
    </div>
  );
}
