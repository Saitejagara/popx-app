import { useState } from 'react';
import { useApp } from '../context/AppContext';
import FormField from '../components/FormField';
import Button from '../components/Button';
import { COLORS } from '../styles/theme';

const styles = {
  screen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 28px 32px',
    background: COLORS.white,
    overflowY: 'auto',
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    color: COLORS.textPrimary,
    margin: '8px 0 10px',
    lineHeight: 1.25,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    margin: '0 0 32px',
    lineHeight: 1.6,
  },
};

export default function LoginPage() {
  const { navigate } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isActive = email.length > 0 && password.length > 0;

  return (
    <div style={styles.screen}>
      <h1 style={styles.title}>
        Signin to your<br />PopX account
      </h1>
      <p style={styles.subtitle}>
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>

      <FormField
        label="Email Address"
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormField
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        label="Login"
        variant={isActive ? 'primary' : 'disabled'}
        onClick={isActive ? () => navigate('settings') : undefined}
        style={{ marginTop: 8 }}
      />

      <Button
        label="← Back"
        variant="ghost"
        onClick={() => navigate('welcome')}
      />
    </div>
  );
}
