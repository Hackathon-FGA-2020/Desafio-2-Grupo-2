import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SolicitationController from './app/controllers/SolicitationController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post(
  '/solicitations',
  upload.single('file'),
  SolicitationController.store
);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/solicitations', SolicitationController.index);
routes.delete('/solicitations/:id', SolicitationController.delete);
routes.put('/users', UserController.update);

export default routes;
