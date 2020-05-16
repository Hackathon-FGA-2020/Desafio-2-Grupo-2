import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SolicitationController from './app/controllers/SolicitationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/solicitations', SolicitationController.store);
routes.delete('/solicitations/:id', SolicitationController.delete);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
