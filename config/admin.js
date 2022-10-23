
   // path: ./config/admin.js
    module.exports = ({ env }) => ({
      url: '/', // Note: The administration will be accessible from the root of the domain (ex: http://yourfrontend.com/)
      serveAdminPanel: false, // http://yourbackend.com will not serve any static admin files
      apiToken: {
        salt: env('API_TOKEN_SALT', 'someRandomLongString'),
      },
      auth: {
        secret: env('ADMIN_JWT_SECRET', 'someSecretKey'),
      },

    });
