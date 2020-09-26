import { Router } from 'express';
import BuilduingsController from './app/controllers/BuildingsController';
import ResidentsController from './app/controllers/ResidentController';
import FavorsController from './app/controllers/FavorsController';
import AcceptedFavorsController from './app/controllers/AceptedFavorsController';
import NotificationController from './app/controllers/NotificationController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController'
import ActiveResidentController from './app/controllers/ActiveResidentController'
import authMiddleware from './app/middlewares/auth';
import superUserMiddleware from './app/middlewares/superUser';

import {avatar} from './config/multer';
import multer from 'multer';

const upload_avatar = multer(avatar);

const routes = new Router();

routes.post('/buildings', BuilduingsController.create);
routes.post('/residents', upload_avatar.single('avatar'), ResidentsController.create);
routes.post('/login', SessionController.create);

routes.put('/buildings/:id', superUserMiddleware, BuilduingsController.update);
routes.put('/residents/actives', superUserMiddleware, ActiveResidentController.update);

routes.use(authMiddleware)

// Building

routes.delete('/buildings/:id', BuilduingsController.delete);

// Residents
routes.get('/residents', ResidentsController.index);
routes.get('/residents/all', ResidentsController.list);
routes.put('/residents/:id', ResidentsController.update);
routes.put('/residents/photos', upload_avatar.single('avatar') ,FileController.update);
routes.delete('/residents/photos', FileController.delete);

// Favores

routes.post('/favors', FavorsController.create);
routes.get('/favors', FavorsController.list);
routes.get('/favors/:id', FavorsController.index);
routes.put('/favors/:id', FavorsController.update);
routes.delete('/favors/:id', FavorsController.delete);

// Aceitar favores
routes.post('/favors/accept/:id', AcceptedFavorsController.create);
routes.get('/favors/my', AcceptedFavorsController.list);
routes.delete('/favors/giveup/:id', AcceptedFavorsController.delete);


// Notifications
routes.get('/notifications', NotificationController.list)
routes.delete('/notifications/:id', NotificationController.delete)

export default routes;