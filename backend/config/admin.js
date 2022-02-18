module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3845db968cc4e838245a6841ad8f4174'),
  },
});
