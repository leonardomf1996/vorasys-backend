import { Router } from 'express';
import { FaleMaisController } from './controller/FaleMaisController';
const routes = Router();

const faleMaisController = new FaleMaisController();

routes.get('/faleMais', faleMaisController.show);

export { routes };