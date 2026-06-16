export function validateField(field, value) {
  switch (field) {
    case 'fullName':
      return value.trim() === '' ? 'Full name is required' : '';

    case 'phone':
      if (value === '') return 'Phone number is required';
      if (!/^\d+$/.test(value)) return 'Phone number must contain digits only';
      if (value.length !== 10) return 'Phone number must be exactly 10 digits';
      return '';

    case 'email':
      if (value === '') return 'Email address is required';
      if (value === '@gmail.com') return 'Please enter a valid Gmail address';
      if (!value.endsWith('@gmail.com')) return 'Email must end with @gmail.com';
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
