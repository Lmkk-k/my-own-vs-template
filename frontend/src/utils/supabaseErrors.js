const errorMessages = {
  'Invalid login credentials': 'Incorrect email or password. Please try again.',
  'Email not confirmed': 'Please check your email and confirm your account first.',
  'User already registered': 'An account with this email already exists.',
  'Password should be at least 6 characters': 'Password must be at least 6 characters long.',
  'JWT expired': 'Your session has expired. Please sign in again.',
  'Invalid JWT': 'Invalid session. Please sign in again.',
}

export function getSupabaseError(error) {
  if (!error) return null
  return errorMessages[error.message] || error.message || 'Something went wrong. Please try again.'
}