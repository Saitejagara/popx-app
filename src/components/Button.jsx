import { COLORS } from '../styles/theme';

const base = {
  width: '100%',
  border: 'none',
  borderRadius: 6,
  padding: '16px 0',
  fontSize: 15,
  fontWeight: 600,
  cursor: 'pointer',
  letterSpacing: 0.2,
  transition: 'opacity 0.2s',
};

const variants = {
  primary: {
    background: COLORS.purple,
    color: COLORS.white,
    marginBottom: 12,
  },
  secondary: {
    background: COLORS.purpleLight,
    color: COLORS.textPrimary,
  },
  disabled: {
    background: '#ccc',
    color: COLORS.white,
    cursor: 'default',
  },
  ghost: {
    background: 'none',
    color: COLORS.purple,
    fontSize: 13,
    padding: '8px 0',
    width: 'auto',
    marginTop: 12,
  },
};

export default function Button({ label, onClick, variant = 'primary', style = {} }) {
  const variantStyle = variants[variant] || variants.primary;
  return (
    <button
      style={{ ...base, ...variantStyle, ...style }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
