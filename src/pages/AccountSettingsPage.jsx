import { useApp } from '../context/AppContext';
import { COLORS } from '../styles/theme';

const styles = {
  page: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: COLORS.pageBg,
  },
  header: {
    fontSize: 18,
    fontWeight: 600,
    color: COLORS.textPrimary,
    padding: '24px 20px 16px',
    borderBottom: `1px solid ${COLORS.divider}`,
    background: COLORS.white,
  },
  card: {
    background: COLORS.white,
  },
  profileRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 16,
    padding: '20px 20px 16px',
  },
  avatarWrap: {
    position: 'relative',
    width: 72,
    height: 72,
    flexShrink: 0,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: '50%',
    background: COLORS.purpleFaded,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
    color: COLORS.purple,
    fontWeight: 700,
  },
  cameraBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    background: COLORS.purple,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `2px solid ${COLORS.white}`,
    cursor: 'pointer',
  },
  name: {
    fontWeight: 700,
    fontSize: 16,
    color: COLORS.textPrimary,
    margin: '0 0 2px',
  },
  email: {
    fontSize: 13,
    color: COLORS.textLabel,
    margin: 0,
  },
  bio: {
    fontSize: 13,
    color: COLORS.textMuted,
    lineHeight: 1.7,
    padding: '0 20px 20px',
    borderBottom: '1.5px dashed #e0e0e0',
  },
  divider: {
    height: 1,
    background: '#eee',
    margin: '0 20px',
  },
  spacer: {
    height: 160,
  },
};

function CameraIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="13" r="4" stroke="#fff" strokeWidth="2" />
      <path
        d="M8 7l1.5-2h5L16 7h3a1 1 0 011 1v11a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export default function AccountSettingsPage() {
  const { userData } = useApp();
  const { fullName, email } = userData;
  const initial = fullName ? fullName.charAt(0).toUpperCase() : 'U';

  return (
    <div style={styles.page}>
      <div style={styles.header}>Account Settings</div>
      <div style={styles.card}>
        <div style={styles.profileRow}>
          <div style={styles.avatarWrap}>
            <div style={styles.avatar}>{initial}</div>
            <div style={styles.cameraBtn}>
              <CameraIcon />
            </div>
          </div>
          <div>
            <p style={styles.name}>{fullName || 'User'}</p>
            <p style={styles.email}>{email || ''}</p>
          </div>
        </div>

        <p style={styles.bio}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        <div style={styles.divider} />
        <div style={styles.spacer} />
        <div style={styles.divider} />
      </div>
    </div>
  );
}
