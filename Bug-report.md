// Error 1: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
// Solved : To use environment variable create a .env file in root folder

// (node:2400) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
// [0] (Use `node --trace-deprecation ...` to show where the warning was created)
// [0] (node:2400) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.

// Sollution : Update your code: Change any instances of onAfterSetupMiddleware and onBeforeSetupMiddleware to setupMiddlewares. Refer to the Webpack Dev Server documentation for details on how to use setupMiddlewares.

// Postman Error : Validation
// "message": "User validation failed: roles: `jobseekers` is not a valid enum value for path `roles`.",
// Solved : jobseeker
