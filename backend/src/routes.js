import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SolicitationController from './app/controllers/SolicitationController';
import CampaignController from './app/controllers/CampaignController';

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

routes.post('/campaigns', upload.single('file'), CampaignController.store);

routes.put(
  '/campaigns/:id',
  upload.single('file'),
  CampaignController.update
);

export default routes;
