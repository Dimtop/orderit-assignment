export default () => ({
  database: {
    uri: process.env.DB_URI,
    authentication:
      process.env.DB_AUTH === 'tls'
        ? {
            tls: true,
            tlsCertificateKeyFile: process.env.DB_PEM_FILE,
          }
        : process.env.DB_AUTH === 'ssl'
        ? {
            ssl: true,
            sslValidate: true,
            sslCA: process.env.DB_CA_FILE,
            sslKey: process.env.DB_KEY_FILE,
            sslCert: process.env.DB_CERT_FILE,
          }
        : {},
  },
});
