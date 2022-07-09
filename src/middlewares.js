export const localsMiddleware = (req, res, next) => {
  console.log(res.locals);
  res.locals.loggedIn = req.session.loggedIn;
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user || {};
  next();
};
