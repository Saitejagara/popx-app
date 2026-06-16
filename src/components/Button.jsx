import { useState } from 'react';
import { COLORS } from '../styles/theme';

const base = {
  width: '100%',
  border: 'none',
  borderRadius: 8,
  padding: '14px 0',
  fontSize: 15,
  fontWeight: 600,
  cursor: 'pointer',
  letterSpacing: 0.2,
  transition: 'transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease',
  willChange: 'transform',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const variants = {
  primary: {
    background: COLORS.purple,
    color: COLORS.white,
    marginBottom: 12,
    boxShadow: '0 6px 18px rgba(108,99,255,0.18)',
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
    background: 'transparent',
    color: COLORS.purple,
    fontSize: 13,
    padding: '8px 0',
    width: 'auto',
    marginTop: 12,
  },
};

export default function Button({ label, onClick, variant = 'primary', style = {} }) {
  const [pressed, setPressed] = useState(false);
  const variantStyle = variants[variant] || variants.primary;

  const handlePressStart = () => setPressed(true);
  const handlePressEnd = () => setPressed(false);

  return (
    <button
      type="button"
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onClick={onClick}
      style={{
        ...base,
        ...variantStyle,
        ...style,
        transform: pressed ? 'translateY(1px) scale(0.995)' : 'translateY(0) scale(1) ',
        opacity: variant === 'disabled' ? 0.7 : 1,
      }}
    >
      {label}
    </button>
  );
}
