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
        style={{ ...styles.input, ...(hasError ? styles.inputError : {}) }}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputMode={inputMode}
        maxLength={maxLength}
        autoComplete="off"
      />
      {hasError && errorMsg && (
        <div style={styles.errorMsg}>⚠ {errorMsg}</div>
      )}
    </div>
  );
}
