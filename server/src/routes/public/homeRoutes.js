import { list, register } from '#src/controllers/public/publicController';
import { Router } from 'express';
const homeRouter = Router();
homeRouter.get('/current-bidding', list);
homeRouter.post('/user/register', register);
export default homeRouter;