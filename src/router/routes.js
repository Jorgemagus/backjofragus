import Express from 'express';
import packageRouter from './packages/index.js';
import userRoutes from './user/index.js';

const router = new Express();
router.get('/', (req, res) => {
  res.send('Hello World!');
});
router.use('/user', userRoutes);
router.use('/package', packageRouter)


export default router;
