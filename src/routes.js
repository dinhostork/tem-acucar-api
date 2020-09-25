import { Router } from 'express';
import BuilduingsController from './app/controllers/BuildingsController';
import ResidentsController from './app/controllers/ResidentController';
import FavorsController from './app/controllers/FavorsController';
import NotificationController from './app/controllers/NotificationController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();


routes.use(authMiddleware)

// Building
routes.post('/buildings', BuilduingsController.create);
routes.put('/buildings', BuilduingsController.update);
routes.delete('/buildings/:id', BuilduingsController.delete);

// Residents
routes.get('/residents', ResidentsController.index);
routes.get('/residents/all', ResidentsController.list);
routes.post('/residents', ResidentsController.create);
routes.update('/residents', ResidentsController.update);

// Favors
routes.post('/favors', FavorsController.create);
routes.get('/favors', FavorsController.list);
routes.get('/favors/:id', FavorsController.index);
routes.delete('/favors/:id', FavorsController.delete);

// Notifications
routes.get('/notifications', NotificationController.list)
routes.get('/notifications/:id', NotificationController.delete)


export default routes;