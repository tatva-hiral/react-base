const appUrl = process.env.NODE_ENV === 'production' ? process.env.APP_URL : '';

/* URL configuration */
export const configuration = {
  BASE_URL: process.env.BASE_URL,
  APP_URL: appUrl
};

/* routes constants */
export const Path = {
  Root: '/',
  Home: '/home'
};

