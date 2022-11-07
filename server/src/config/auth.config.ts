export default () => ({
  auth: {
    accessToken: {
      secret: 'asrAdmin',
      expiration: '1h',
      expirationMilliseconds: 3600000,
    },
  },
});
