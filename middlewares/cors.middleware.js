
const allowedOrigins = ['http://localhost:3000','https://inventorysales.netlify.app'];

const corsOptions = {
  origin: function(origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

module.exports = { corsOptions }

// Use the cors middleware with the cors options for all routes

