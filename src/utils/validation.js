export function validateField(field, value) {
  switch (field) {
    case 'fullName':
      if (value.trim() === '') return 'Full name is required';
      if (!/^[A-Za-z0-9\s'\-.]+$/.test(value.trim()))
        return "Full name may contain letters, numbers, spaces, apostrophes, hyphens, or periods";
      return '';

    case 'phone':
      if (value === '') return 'Phone number is required';
      if (!/^\d+$/.test(value)) return 'Phone number must contain digits only';
      if (value.length !== 10) return 'Phone number must be exactly 10 digits';
      return '';

    case 'email':
      if (value === '') return 'Email address is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
      return '';

    case 'password':
      return value.trim() === '' ? 'Password is required' : '';

    default:
      return '';
  }
}

export function validateForm(form) {
  const requiredFields = ['fullName', 'phone', 'email', 'password'];
  const errors = {};
  requiredFields.forEach((f) => {
    errors[f] = validateField(f, form[f]);
  });
  return errors;
}

export function hasErrors(errors) {
  return Object.values(errors).some((e) => e !== '');
}
