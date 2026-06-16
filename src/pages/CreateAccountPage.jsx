import { useState } from 'react';
import { useApp } from '../context/AppContext';
import FormField from '../components/FormField';
import Button from '../components/Button';
import { validateField, validateForm, hasErrors } from '../utils/validation';
import { COLORS } from '../styles/theme';

const styles = {
  screen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '32px 28px 32px',
    background: COLORS.white,
    overflowY: 'auto',
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    color: COLORS.textPrimary,
    margin: '0 0 24px',
    lineHeight: 1.25,
  },
  agencyLabel: {
    fontSize: 13,
    color: COLORS.textPrimary,
    margin: '4px 0 8px',
    fontWeight: 500,
  },
  radioRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    marginBottom: 24,
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: 7,
    fontSize: 14,
    color: '#333',
    cursor: 'pointer',
  },
  radioInput: {
    accentColor: COLORS.purple,
    width: 18,
    height: 18,
    cursor: 'pointer',
  },
};

const INITIAL_FORM = {
  fullName: '',
  phone: '',
  email: '',
  password: '',
  company: '',
  agency: 'yes',
};

export default function CreateAccountPage() {
  const { navigate, saveUser } = useApp();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (touched[key]) {
      setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
    }
  };

  const handleBlur = (key) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validateField(key, form[key]) }));
  };

  const handlePhoneChange = (value) => {
    const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
    handleChange('phone', digitsOnly);
  };

  const handleSubmit = () => {
    const newErrors = validateForm(form);
    const allTouched = { fullName: true, phone: true, email: true, password: true };
    setTouched(allTouched);
    setErrors(newErrors);
    if (!hasErrors(newErrors)) {
      saveUser({ fullName: form.fullName, email: form.email });
      navigate('settings');
    }
  };

  return (
    <div style={styles.screen}>
      <h1 style={styles.title}>
        Create your<br />PopX account
      </h1>

      <FormField
        label="Full Name*"
        type="text"
        placeholder="Enter full name"
        value={form.fullName}
        onChange={(e) => handleChange('fullName', e.target.value)}
        onBlur={() => handleBlur('fullName')}
        hasError={touched.fullName && !!errors.fullName}
        errorMsg={errors.fullName}
      />

      <FormField
        label="Phone number*"
        type="tel"
        placeholder="Enter 10-digit number"
        value={form.phone}
        onChange={(e) => handlePhoneChange(e.target.value)}
        onBlur={() => handleBlur('phone')}
        hasError={touched.phone && !!errors.phone}
        errorMsg={errors.phone}
        inputMode="numeric"
        maxLength={10}
      />

      <FormField
        label="Email address*"
        type="email"
        placeholder="example@gmail.com"
        value={form.email}
        onChange={(e) => handleChange('email', e.target.value)}
        onBlur={() => handleBlur('email')}
        hasError={touched.email && !!errors.email}
        errorMsg={errors.email}
      />

      <FormField
        label="Password*"
        type="password"
        placeholder="Enter password"
        value={form.password}
        onChange={(e) => handleChange('password', e.target.value)}
        onBlur={() => handleBlur('password')}
        hasError={touched.password && !!errors.password}
        errorMsg={errors.password}
      />

      <FormField
        label="Company name"
        type="text"
        placeholder="Enter company name"
        value={form.company}
        onChange={(e) => handleChange('company', e.target.value)}
      />

      <p style={styles.agencyLabel}>Are you an Agency?*</p>
      <div style={styles.radioRow}>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            style={styles.radioInput}
            name="agency"
            value="yes"
            checked={form.agency === 'yes'}
            onChange={(e) => setForm((prev) => ({ ...prev, agency: e.target.value }))}
          />
          Yes
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            style={styles.radioInput}
            name="agency"
            value="no"
            checked={form.agency === 'no'}
            onChange={(e) => setForm((prev) => ({ ...prev, agency: e.target.value }))}
          />
          No
        </label>
      </div>

      <Button label="Create Account" variant="primary" onClick={handleSubmit} />
      <Button label="← Back" variant="ghost" onClick={() => navigate('welcome')} />
    </div>
  );
}
