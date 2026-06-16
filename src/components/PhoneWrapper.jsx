const styles = {
  wrapper: {
    minHeight: '100vh',
    background: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 375,
    minHeight: 667,
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
};

export default function PhoneWrapper({ children }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.phone}>{children}</div>
    </div>
  );
}
