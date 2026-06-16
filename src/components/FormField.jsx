import { useState } from 'react';
import { COLORS } from '../styles/theme';

const styles = {
  wrap: {
    position: 'relative',
    marginBottom: 20,
  },
  label: {
    position: 'absolute',
    top: -9,
    left: 12,
    background: COLORS.white,
    padding: '0 4px',
    fontSize: 12,
    color: COLORS.purple,
    fontWeight: 600,
    zIndex: 1,
    pointerEvents: 'none',
  },
  requiredMark: {
    color: COLORS.error,
    fontSize: 13,
    lineHeight: 1,
  },
  input: {
    width: '100%',
    border: `1.5px solid ${COLORS.border}`,
    borderRadius: 6,
    padding: '14px 14px',
    fontSize: 14,
    color: '#333',
    outline: 'none',
    boxSizing: 'border-box',
    background: COLORS.inputBg,
    transition: 'border-color 0.2s',
  },
  inputError: {
    border: `1.5px solid ${COLORS.error}`,
  },
  errorMsg: {
    color: COLORS.error,
    fontSize: 11,
    marginTop: 4,
    marginLeft: 2,
  },
  eyeButton: {
    position: 'absolute',
    top: '50%',
    right: 12,
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default function FormField({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  hasError,
  errorMsg,
  inputMode,
  maxLength,
}) {
  const [visible, setVisible] = useState(false);
  const labelNodes = label
    ? label.split('*').flatMap((part, index, array) =>
        index < array.length - 1
          ? [part, <span key={index} style={styles.requiredMark}>*</span>]
          : [part]
      )
    : null;

  return (
    <div style={styles.wrap}>
      <span style={styles.label}>{labelNodes}</span>
      <input
        style={{
          ...styles.input,
          ...(hasError ? styles.inputError : {}),
          ...(type === 'password' ? { paddingRight: 44 } : {}),
        }}
        type={type === 'password' && visible ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputMode={inputMode}
        maxLength={maxLength}
        autoComplete="off"
      />
      {type === 'password' && (
        <button
          type="button"
          aria-label={visible ? 'Hide password' : 'Show password'}
          onClick={() => setVisible((v) => !v)}
          style={styles.eyeButton}
        >
          {visible ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M17.94 17.94A10.94 10.94 0 0112 20c-5.05 0-9.3-3.14-11-7.5C2.7 8.14 6.95 5 12 5c2.35 0 4.5.66 6.32 1.8" stroke={COLORS.purple} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 1l22 22" stroke={COLORS.purple} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12z" stroke={COLORS.purple} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="2" stroke={COLORS.purple} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      )}
      {hasError && errorMsg && (
        <div style={styles.errorMsg}>⚠ {errorMsg}</div>
      )}
    </div>
  );
}
