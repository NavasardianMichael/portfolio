export const PRIVATE_PAGES = {
  profile: '/profile',
  invitation: '/invite',
  invitationConfirm: '/invitationConfirm',
  createPost: '/posts/create',
  favoritePosts: '/posts/favorites',
  editPost: 'posts/edit/:postId',
} as const

export const PUBLIC_PAGES = {
  home: '/',
  login: '/login',
  forgotPassword: '/forgot-password',
  changePassword: '/changePassword',
  resetPassword: '/reset-password',
  confirmation: '/confirmation',
  emailVerification: '/emailVerification',
  registration: '/register',
  posts: '/posts',
  viewPost: '/posts/view/:postId',
  contact: '/contact',
  countries: '/countries',
  subscriptions: '/subscriptions',
  about: '/about'
} as const
