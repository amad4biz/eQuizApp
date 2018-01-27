const adminRegex = /^\/admin.*/;

const auth = (req, res, next) => {
  if ( adminRegex.test(req.url) ){
    res.json({error: "auth error"});
  } else {
    next();
  }
};

module.exports = auth;
