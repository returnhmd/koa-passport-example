import Router from 'koa-router';
import passport from 'koa-passport';

const router = new Router();

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/redirect',
  passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/',
  }),
);

export default router.routes();
