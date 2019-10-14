'use strict';
module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      //ctx.logger.error(err);
      ctx.status = 500;
      ctx.body = ''
    }
  };
};