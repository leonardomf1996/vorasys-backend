import { Router } from 'express';
import { FaleMaisController } from './controller/FaleMaisController';
const routes = Router();

const faleMaisController = new FaleMaisController();

routes.post('/faleMais', faleMaisController.show);

export { routes };