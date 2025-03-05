export const ENDPOINTS = {
  login: '/api/Identity/login',
  register: '/api/Identity/register',
  logout: '/api/Identity/logout',
  sendForgotPasswordInstructions: 'sendForgotPasswordInstructions',
  changePassword: 'changePassword',
  inviteUser: 'inviteUser',
  verifyToken: 'verifyToken',
  resetPassword: 'resetPassword',
  getProfile: '/api/Identity/userinfo',
} as const
