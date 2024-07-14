const cors = require('cors');

module.exports = cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['X-Requested-With', 'content-type', 'Authorization']
});
