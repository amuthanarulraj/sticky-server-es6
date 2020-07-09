import express from 'express';
import * as stickyController from '../controllers/sticky-controller';

const router = express.Router();

router.route('/stickies')
    .get(stickyController.list)
    .post(stickyController.save);

router.route('/stickies/:id')
    .get(stickyController.get)
    .put(stickyController.update)
    .delete(stickyController.remove);

export default router;